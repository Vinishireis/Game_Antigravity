import { Entity } from './Entity';

export class Particle extends Entity {
  constructor(x, y, vx, vy, color, life = 0.5, size = 3) {
    super(x, y, size, color);
    this.vx = vx;
    this.vy = vy;
    this.life = life;
    this.maxLife = life;
    this.friction = 0.95;
  }

  update(dt, engine) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.life -= dt;
    if (this.life <= 0) {
      this.active = false;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

export function createExplosion(engine, x, y, color, count = 15) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 50 + Math.random() * 150;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    const life = 0.2 + Math.random() * 0.4;
    engine.addEntity(new Particle(x, y, vx, vy, color, life, Math.random() * 3 + 1), 'vfx');
  }
}
