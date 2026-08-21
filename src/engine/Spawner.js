import { Enemy } from './entities/Enemy';

export class Spawner {
  constructor(engine) {
    this.engine = engine;
    this.spawnTimer = 0;
    this.spawnRate = 2.0; // seconds
    this.enemiesToSpawn = 10;
    this.waveActive = false;
    this.waveTimer = 5; // Prep time before wave 1
  }

  update(dt) {
    if (!this.waveActive) {
      this.waveTimer -= dt;
      if (this.waveTimer <= 0) {
        this.startWave();
      }
      return;
    }

    if (this.enemiesToSpawn > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        this.spawnEnemy();
        this.enemiesToSpawn--;
        this.spawnTimer = this.spawnRate;
      }
    } else {
      // Check if wave is cleared
      if (this.engine.enemies.length === 0) {
        this.endWave();
      }
    }
  }

  startWave() {
    this.waveActive = true;
    this.enemiesToSpawn = 5 + (this.engine.wave * 5);
    this.spawnRate = Math.max(0.5, 2.0 - (this.engine.wave * 0.1));
  }

  endWave() {
    this.waveActive = false;
    this.engine.wave++;
    this.engine.energy += 50; // Wave clear bonus
    this.waveTimer = 10; // 10 seconds prep time
  }

  spawnEnemy() {
    // Spawn at random edge
    let x, y;
    const edge = Math.floor(Math.random() * 4);
    if (edge === 0) { x = Math.random() * this.engine.width; y = -20; } // Top
    else if (edge === 1) { x = this.engine.width + 20; y = Math.random() * this.engine.height; } // Right
    else if (edge === 2) { x = Math.random() * this.engine.width; y = this.engine.height + 20; } // Bottom
    else { x = -20; y = Math.random() * this.engine.height; } // Left

    // Add Elite chance
    const isElite = Math.random() < (this.engine.wave * 0.05);
    const enemy = new Enemy(x, y, isElite ? 'tank' : 'swarm');
    
    if (isElite) {
      enemy.maxHp = 100;
      enemy.hp = 100;
      enemy.radius = 15;
      enemy.color = '#aa00ff';
      enemy.speed = 40;
      enemy.value = 20;
    }

    this.engine.addEntity(enemy, 'enemy');
  }
}
