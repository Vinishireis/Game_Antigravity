import { Entity } from './Entity';
import { Vector2 } from '../Vector2';
import { createExplosion } from './Particle';
import { FloatingText } from './FloatingText';

export class Projectile extends Entity {
  constructor(x, y, direction, damage, color) {
    super(x, y, 4, color);
    this.direction = direction;
    this.damage = damage;
    this.speed = 600;
    this.life = 1.5;
    this.trail = [];
  }

  update(dt, engine) {
    this.trail.push(new Vector2(this.x, this.y));
    if (this.trail.length > 5) this.trail.shift();

    this.x += this.direction.x * this.speed * dt;
    this.y += this.direction.y * this.speed * dt;
    
    this.life -= dt;
    if (this.life <= 0) {
      this.active = false;
      return;
    }

    const pos = new Vector2(this.x, this.y);
    for (const enemy of engine.enemies) {
      if (!enemy.active) continue;
      const enemyPos = new Vector2(enemy.x, enemy.y);
      if (pos.distance(enemyPos) < this.radius + enemy.radius) {
        
        // Critical hit chance logic (Optional polish)
        const isCrit = Math.random() < 0.2;
        const finalDamage = isCrit ? this.damage * 2 : this.damage;
        
        enemy.takeDamage(finalDamage, engine);
        
        if (isCrit) {
          engine.addEntity(new FloatingText(this.x, this.y - 20, 'CRIT!', '#ffff00', true), 'vfx');
        }

        createExplosion(engine, this.x, this.y, this.color, 5);
        this.active = false; 
        break;
      }
    }
  }

  draw(ctx) {
    if (!this.active) return;
    
    // Draw trail
    if (this.trail.length > 1) {
      ctx.beginPath();
      ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.radius;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    }

    // Draw head
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;
  }
}
