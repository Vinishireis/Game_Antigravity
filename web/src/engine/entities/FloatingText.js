import { Entity } from './Entity';

export class FloatingText extends Entity {
  constructor(x, y, text, color = '#00ff88', isCritical = false) {
    super(x, y, 0, color);
    this.text = text;
    this.life = 1.0;
    this.maxLife = 1.0;
    this.vy = -30;
    this.isCritical = isCritical;
  }

  update(dt, engine) {
    this.y += this.vy * dt;
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
    ctx.fillStyle = this.color;
    ctx.font = this.isCritical ? 'bold 20px Orbitron' : 'bold 16px Rajdhani';
    ctx.shadowBlur = 5;
    ctx.shadowColor = this.color;
    ctx.textAlign = 'center';
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}
