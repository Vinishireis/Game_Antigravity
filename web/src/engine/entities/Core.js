import { Entity } from './Entity';

export class Core extends Entity {
  constructor(x, y) {
    super(x, y, 45, '#00ffff');
    this.maxHp = 1000;
    this.hp = this.maxHp;
    this.rotation = 0;
  }

  takeDamage(amount, engine) {
    this.hp -= amount;
    this.triggerFlash();
    if (this.hp < 0) this.hp = 0;
    
    // Add screen shake or hit effect (handled via flash and particles usually)
  }

  update(dt, engine) {
    super.update(dt, engine);
    this.rotation += dt * 0.5;
    if (this.hp <= 0) {
      engine.gameOver = true;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    
    // Core Base
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    const coreColor = this.hp > 300 ? '#00ffff' : (this.hp > 0 ? '#ff5500' : '#ff0000');
    
    ctx.strokeStyle = this.flashTimer > 0 ? '#ffffff' : coreColor;
    ctx.lineWidth = 4;
    ctx.shadowBlur = 25;
    ctx.shadowColor = coreColor;
    
    // Octagon
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      ctx.lineTo(Math.cos(a) * this.radius, Math.sin(a) * this.radius);
    }
    ctx.closePath();
    ctx.stroke();

    // Inner glowing circle
    ctx.beginPath();
    ctx.arc(0, 0, this.radius - 15, 0, Math.PI * 2);
    ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : coreColor;
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // Health bar floating above core
    const barWidth = 80;
    const barHeight = 8;
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(this.x - barWidth/2, this.y - this.radius - 20, barWidth, barHeight);
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(this.x - barWidth/2, this.y - this.radius - 20, barWidth * (this.hp/this.maxHp), barHeight);
  }
}
