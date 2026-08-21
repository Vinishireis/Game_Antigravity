import { useState, useEffect, useRef } from 'react';
import { GameEngine } from './engine/GameEngine';
import { Core } from './engine/entities/Core';
import { Player } from './engine/entities/Player';
import { Tower } from './engine/entities/Tower';
import { Spawner } from './engine/Spawner';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [gameState, setGameState] = useState({ energy: 50, wave: 1, score: 0, gameOver: false });
  const [buildMode, setBuildMode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 700;

    const gameEngine = new GameEngine(canvas);
    
    const core = new Core(500, 350);
    gameEngine.core = core;
    gameEngine.addEntity(core);

    const player = new Player(550, 400);
    gameEngine.player = player;
    gameEngine.addEntity(player);

    const spawner = new Spawner(gameEngine);

    const originalUpdate = gameEngine.update.bind(gameEngine);
    gameEngine.update = (dt) => {
      originalUpdate(dt);
      spawner.update(dt);
      
      setGameState({
        energy: gameEngine.energy,
        wave: gameEngine.wave,
        score: gameEngine.score,
        gameOver: gameEngine.gameOver
      });
    };

    gameEngine.start();
    setEngine(gameEngine);

    return () => {
      gameEngine.gameOver = true;
    };
  }, []);

  const handleCanvasClick = (e) => {
    if (!engine || !buildMode) return;
    
    let cost = 0;
    if (buildMode === 'gatling') cost = 30;
    if (buildMode === 'flame') cost = 30;
    if (buildMode === 'sniper') cost = 50;

    if (engine.energy >= cost) {
      engine.energy -= cost;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const tower = new Tower(x, y, buildMode);
      engine.addEntity(tower, 'tower');
      setBuildMode(null);
    }
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      <div className="canvas-wrapper">
        <canvas 
          ref={canvasRef} 
          onClick={handleCanvasClick}
          style={{ cursor: buildMode ? 'crosshair' : 'default' }}
        />
        
        {/* HUD Superior (Status) */}
        <div className="hud-top glass-panel">
          <div className="stat-item">
            <span className="stat-label">WAVE</span>
            <span className="stat-value highlight">{gameState.wave}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ENERGIA</span>
            <span className="stat-value energy">{gameState.energy} ⚡</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">SCORE</span>
            <span className="stat-value">{gameState.score}</span>
          </div>
        </div>

        {/* HUD Inferior (Build Menu) */}
        <div className="hud-bottom glass-panel">
          <div className="build-instructions">
            {buildMode ? <span className="pulsing-text">Selecione o local no mapa...</span> : <span>Construir Defesas:</span>}
          </div>
          <div className="build-actions">
            <button 
              className={`build-btn ${buildMode === 'gatling' ? 'active' : ''}`} 
              onClick={() => setBuildMode(buildMode === 'gatling' ? null : 'gatling')}
              disabled={gameState.energy < 30}>
              <div className="btn-icon">🔫</div>
              <div className="btn-info">
                <span className="btn-name">Gatling</span>
                <span className="btn-cost">30 ⚡</span>
              </div>
            </button>
            <button 
              className={`build-btn ${buildMode === 'flame' ? 'active' : ''}`} 
              onClick={() => setBuildMode(buildMode === 'flame' ? null : 'flame')}
              disabled={gameState.energy < 30}>
              <div className="btn-icon">🔥</div>
              <div className="btn-info">
                <span className="btn-name">Flame</span>
                <span className="btn-cost">30 ⚡</span>
              </div>
            </button>
            <button 
              className={`build-btn ${buildMode === 'sniper' ? 'active' : ''}`} 
              onClick={() => setBuildMode(buildMode === 'sniper' ? null : 'sniper')}
              disabled={gameState.energy < 50}>
              <div className="btn-icon">🎯</div>
              <div className="btn-info">
                <span className="btn-name">Sniper</span>
                <span className="btn-cost">50 ⚡</span>
              </div>
            </button>
            {buildMode && (
              <button className="cancel-btn" onClick={() => setBuildMode(null)}>
                ✕ Cancelar
              </button>
            )}
          </div>
        </div>

        {/* Game Over Overlay */}
        {gameState.gameOver && (
          <div className="game-over-overlay glass-panel">
            <h1 className="glitch-text">CONEXÃO PERDIDA</h1>
            <p>O Núcleo colapsou na Wave <span className="highlight">{gameState.wave}</span></p>
            <div className="final-score">Score Final: {gameState.score}</div>
            <button className="restart-btn" onClick={restartGame}>ESTABELECER NOVA CONEXÃO</button>
          </div>
        )}
      </div>

      <div className="controls-hint">
        <span>⌨️ <b>WASD</b>: Mover</span>
        <span>🖱️ <b>Mouse</b>: Mirar e Atirar</span>
      </div>
    </div>
  );
}

export default App;
