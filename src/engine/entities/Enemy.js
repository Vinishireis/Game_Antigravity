import { Entity } from './Entity';
import { Vector2 } from '../Vector2';
import { createExplosion } from './Particle';
import { FloatingText } from './FloatingText';

export class Enemy extends Entity {
  constructor(x, y, type = 'swarm') {
    super(x, y, 12, '#ff0055');
    this.type = type;
    this.maxHp = 30;
    this.hp = this.maxHp;
    this.speed = 90;
    this.damage = 15;
    this.value = 5; 
    this.pulse = 0;
  }

  takeDamage(amount, engine) {
    this.hp -= amount;
    this.triggerFlash();
    
    if (this.hp <= 0) {
      this.active = false;
      engine.energy += this.value;
      engine.score += 10 * (this.type === 'tank' ? 5 : 1);
      
      createExplosion(engine, this.x, this.y, this.color, this.radius * 2);
      engine.addEntity(new FloatingText(this.x, this.y - 10, `+${this.value} ⚡`, '#00ff88'), 'vfx');
    }
  }

  update(dt, engine) {
    super.update(dt, engine);
    this.pulse += dt * 5;
    
    if (!engine.core) return;
    
    const pos = new Vector2(this.x, this.y);
    const corePos = new Vector2(engine.core.x, engine.core.y);
    const dir = corePos.sub(pos).normalize();
    
    this.x += dir.x * this.speed * dt;
    this.y += dir.y * this.speed * dt;
    
    // Collision with core
    if (pos.distance(corePos) < this.radius + engine.core.radius) {
      engine.core.takeDamage(this.damage, engine);
      createExplosion(engine, this.x, this.y, '#ff0000', 20);
      this.active = false;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    
    ctx.save();
    ctx.translate(this.x, this.y);
    
    // Rotate towards center roughly (just visually spinning)
    ctx.rotate(this.pulse);
    
    ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;

    if (this.type === 'tank') {
      // Hexagon shape
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.lineTo(Math.cos(a) * this.radius, Math.sin(a) * this.radius);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      // Star/Jagged shape
      const spikes = 4;
      const outer = this.radius;
      const inner = this.radius / 2;
      ctx.beginPath();
      let rot = Math.PI / 2 * 3;
      const step = Math.PI / spikes;

      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(Math.cos(rot) * outer, Math.sin(rot) * outer);
        rot += step;
        ctx.lineTo(Math.cos(rot) * inner, Math.sin(rot) * inner);
        rot += step;
      }
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
}
