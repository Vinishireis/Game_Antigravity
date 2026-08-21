export class Entity {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.active = true;
    this.flashTimer = 0;
  }

  update(dt, engine) {
    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
    }
  }

  triggerFlash(duration = 0.1) {
    this.flashTimer = duration;
  }

  draw(ctx) {
    if (!this.active) return;
    
    // Default drawing if not overridden
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : this.color;
    ctx.fill();
    ctx.closePath();
  }
}
