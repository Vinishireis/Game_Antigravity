import { Entity } from './Entity';
import { Vector2 } from '../Vector2';
import { Projectile } from './Projectile';

export class Tower extends Entity {
  constructor(x, y, type = 'gatling') {
    super(x, y, 18, '#aaaaaa');
    this.type = type;
    this.range = 150;
    this.damage = 10;
    this.fireRate = 0.3;
    this.fireTimer = 0;
    this.rotation = 0; // Turret rotation
    
    if (type === 'flame') {
      this.color = '#ff8800';
      this.range = 120;
      this.damage = 3; 
      this.fireRate = 0.1;
    } else if (type === 'sniper') {
      this.color = '#ffffff';
      this.range = 350;
      this.damage = 60;
      this.fireRate = 1.5;
    }
  }

  update(dt, engine) {
    if (this.fireTimer > 0) this.fireTimer -= dt;

    const target = this.findTarget(engine);
    
    if (target) {
      // Rotate towards target
      const pos = new Vector2(this.x, this.y);
      const tPos = new Vector2(target.x, target.y);
      const dir = tPos.sub(pos).normalize();
      this.rotation = Math.atan2(dir.y, dir.x);

      if (this.fireTimer <= 0) {
        this.shoot(target, engine, dir);
        this.fireTimer = this.fireRate;
      }
    }
  }

  findTarget(engine) {
    let closest = null;
    let minD = this.range;
    const pos = new Vector2(this.x, this.y);

    for (const enemy of engine.enemies) {
      if (!enemy.active) continue;
      const d = pos.distance(new Vector2(enemy.x, enemy.y));
      if (d < minD) {
        minD = d;
        closest = enemy;
      }
    }
    return closest;
  }

  shoot(target, engine, dir) {
    const pX = this.x + dir.x * (this.radius + 5);
    const pY = this.y + dir.y * (this.radius + 5);

    let color = '#00ffff';
    if (this.type === 'flame') color = '#ff5500';
    if (this.type === 'sniper') color = '#ffffff';

    const proj = new Projectile(pX, pY, dir, this.damage, color);
    
    if (this.type === 'flame') {
      proj.life = 0.3;
      proj.speed = 350;
      proj.radius = 6;
      // Spread
      const spread = (Math.random() - 0.5) * 0.2;
      const angle = Math.atan2(dir.y, dir.x) + spread;
      proj.direction = new Vector2(Math.cos(angle), Math.sin(angle));
    }

    engine.addEntity(proj, 'projectile');
  }

  draw(ctx) {
    if (!this.active) return;
    
    // Draw Base
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#222';
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    
    // Draw Turret Head
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    ctx.fillStyle = this.color;
    
    if (this.type === 'gatling') {
      // Twin barrels
      ctx.fillRect(5, -6, 15, 3);
      ctx.fillRect(5, 3, 15, 3);
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI*2);
      ctx.fill();
    } else if (this.type === 'flame') {
      // Wide nozzle
      ctx.fillRect(0, -8, 12, 16);
      ctx.fillStyle = '#ff3300';
      ctx.fillRect(12, -6, 4, 12);
    } else if (this.type === 'sniper') {
      // Long barrel
      ctx.fillRect(0, -2, 25, 4);
      // Laser sight
      ctx.beginPath();
      ctx.moveTo(25, 0);
      ctx.lineTo(this.range, 0);
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.1)';
      ctx.stroke();
    }
    
    ctx.restore();
  }
}
