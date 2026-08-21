import { Vector2 } from './Vector2';

export class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.width = canvas.width;
    this.height = canvas.height;

    this.lastTime = 0;

    this.entities = [];
    this.enemies = [];
    this.towers = [];
    this.projectiles = [];
    this.vfx = []; // Particles and Texts

    this.gameOver = false;

    this.core = null;
    this.player = null;
    this.spawner = null;

    this.energy = 50;
    this.wave = 1;
    this.score = 0;

    this.keys = {};

    this.mouse = new Vector2(0, 0);
    this.mouseDown = false;

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();

      // Ajusta a coordenada do mouse caso o canvas esteja
      // sendo exibido em tamanho diferente da resolução interna.
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      this.mouse.x = (e.clientX - rect.left) * scaleX;
      this.mouse.y = (e.clientY - rect.top) * scaleY;
    });

    this.canvas.addEventListener('mousedown', () => {
      this.mouseDown = true;
    });

    this.canvas.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });

    // Evita manter o mouse pressionado caso ele seja solto
    // fora do canvas.
    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });

    // Evita teclas ficarem presas quando a janela perde foco.
    window.addEventListener('blur', () => {
      this.keys = {};
      this.mouseDown = false;
    });
  }

  addEntity(entity, type = 'general') {
    this.entities.push(entity);

    if (type === 'enemy') {
      this.enemies.push(entity);
    }

    if (type === 'tower') {
      this.towers.push(entity);
    }

    if (type === 'projectile') {
      this.projectiles.push(entity);
    }

    if (type === 'vfx') {
      this.vfx.push(entity);
    }
  }

  start() {
    this.lastTime = performance.now();

    requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    // Delta time em segundos.
    //
    // Limitamos em 0.1s para evitar que o jogo "salte"
    // caso a aba fique congelada/minimizada.
    const dt = Math.min(
      (timestamp - this.lastTime) / 1000,
      0.1
    );

    this.lastTime = timestamp;

    this.update(dt);
    this.draw();

    if (!this.gameOver) {
      requestAnimationFrame(this.loop.bind(this));
    } else {
      this.drawGameOver();
    }
  }

  update(dt) {
    // Remove entidades inativas.
    this.entities = this.entities.filter(
      (entity) => entity.active !== false
    );

    this.enemies = this.enemies.filter(
      (enemy) => enemy.active !== false
    );

    this.towers = this.towers.filter(
      (tower) => tower.active !== false
    );

    this.projectiles = this.projectiles.filter(
      (projectile) => projectile.active !== false
    );

    this.vfx = this.vfx.filter(
      (effect) => effect.active !== false
    );

    // Atualiza todas as entidades.
    for (const entity of this.entities) {
      if (typeof entity.update === 'function') {
        entity.update(dt, this);
      }
    }
  }

  draw() {
    const ctx = this.ctx;

    // =========================================================
    // FUNDO
    // =========================================================

    const gradient = ctx.createRadialGradient(
      this.width / 2,
      this.height / 2,
      0,
      this.width / 2,
      this.height / 2,
      this.width
    );

    gradient.addColorStop(0, '#0a0a1a');
    gradient.addColorStop(1, '#000000');

    ctx.fillStyle = gradient;

    ctx.fillRect(
      0,
      0,
      this.width,
      this.height
    );

    // =========================================================
    // GRID SCI-FI
    // =========================================================

    ctx.save();

    ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    const gridSize = 50;

    ctx.beginPath();

    // Linhas verticais
    for (
      let x = 0;
      x <= this.width;
      x += gridSize
    ) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
    }

    // Linhas horizontais
    //
    // CORREÇÃO:
    // anteriormente estava:
    //
    // for (let y = 0; x = 0, y <= this.height; ...)
    //
    // "x" não existe neste escopo.
    for (
      let y = 0;
      y <= this.height;
      y += gridSize
    ) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
    }

    ctx.stroke();

    ctx.restore();

    // =========================================================
    // ENTIDADES
    // =========================================================
    //
    // Ordem de renderização:
    //
    // Torres
    // ↓
    // Inimigos
    // ↓
    // Projéteis
    // ↓
    // Core
    // ↓
    // Player
    // ↓
    // VFX

    for (const tower of this.towers) {
      if (
        tower.active !== false &&
        typeof tower.draw === 'function'
      ) {
        tower.draw(ctx, this);
      }
    }

    for (const enemy of this.enemies) {
      if (
        enemy.active !== false &&
        typeof enemy.draw === 'function'
      ) {
        enemy.draw(ctx, this);
      }
    }

    for (const projectile of this.projectiles) {
      if (
        projectile.active !== false &&
        typeof projectile.draw === 'function'
      ) {
        projectile.draw(ctx, this);
      }
    }

    if (
      this.core &&
      this.core.active !== false &&
      typeof this.core.draw === 'function'
    ) {
      this.core.draw(ctx, this);
    }

    if (
      this.player &&
      this.player.active !== false &&
      typeof this.player.draw === 'function'
    ) {
      this.player.draw(ctx, this);
    }

    for (const effect of this.vfx) {
      if (
        effect.active !== false &&
        typeof effect.draw === 'function'
      ) {
        effect.draw(ctx, this);
      }
    }
  }

  drawGameOver() {
    const ctx = this.ctx;

    ctx.save();

    // Overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

    ctx.fillRect(
      0,
      0,
      this.width,
      this.height
    );

    // Título
    ctx.fillStyle = '#ff0000';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(
      'CONEXÃO PERDIDA',
      this.width / 2,
      this.height / 2
    );

    // Informações
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';

    ctx.fillText(
      `Wave: ${this.wave} | Score: ${this.score}`,
      this.width / 2,
      this.height / 2 + 50
    );

    ctx.restore();
  }
}