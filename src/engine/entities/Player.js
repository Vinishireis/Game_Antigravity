import { Entity } from './Entity';
import { Vector2 } from '../Vector2';
import { Projectile } from './Projectile';
import { createExplosion } from './Particle';

export class Player extends Entity {
  constructor(x, y) {
    super(x, y, 15, '#00ffff');
    this.speed = 250;
    this.shootTimer = 0;
    this.shootCooldown = 0.15; // Faster shooting
    
    // Dash mechanic
    this.dashTimer = 0;
    this.dashCooldown = 1.5;
    this.isDashing = false;
    this.dashDuration = 0.2;
    this.dashSpeed = 800;
    this.dashDir = new Vector2(0,0);
  }

  update(dt, engine) {
    super.update(dt, engine);
    
    let dx = 0;
    let dy = 0;
    
    if (engine.keys['w']) dy -= 1;
    if (engine.keys['s']) dy += 1;
    if (engine.keys['a']) dx -= 1;
    if (engine.keys['d']) dx += 1;
    
    const moveVec = new Vector2(dx, dy).normalize();

    // Dash Logic
    if (this.dashTimer > 0) this.dashTimer -= dt;
    
    if ((engine.keys['shift'] || engine.keys[' ']) && this.dashTimer <= 0 && (dx !== 0 || dy !== 0)) {
      this.isDashing = true;
      this.dashTimer = this.dashCooldown;
      this.dashDuration = 0.2;
      this.dashDir = moveVec.clone();
      createExplosion(engine, this.x, this.y, '#00ffff', 10); // visual burst
    }

    if (this.isDashing) {
      this.x += this.dashDir.x * this.dashSpeed * dt;
      this.y += this.dashDir.y * this.dashSpeed * dt;
      this.dashDuration -= dt;
      if (this.dashDuration <= 0) {
        this.isDashing = false;
      }
    } else {
      this.x += moveVec.x * this.speed * dt;
      this.y += moveVec.y * this.speed * dt;
    }
    
    // Bounds
    if (this.x < 15) this.x = 15;
    if (this.x > engine.width - 15) this.x = engine.width - 15;
    if (this.y < 15) this.y = 15;
    if (this.y > engine.height - 15) this.y = engine.height - 15;

    // Shooting
    if (this.shootTimer > 0) this.shootTimer -= dt;
    
    if (engine.mouseDown && this.shootTimer <= 0 && !engine.buildMode) {
      this.shoot(engine);
      this.shootTimer = this.shootCooldown;
    }
  }

  shoot(engine) {
    const pVec = new Vector2(this.x, this.y);
    const dir = engine.mouse.sub(pVec).normalize();
    
    // Spawn at the tip of the ship
    const spawnX = this.x + dir.x * 20;
    const spawnY = this.y + dir.y * 20;
    
    const proj = new Projectile(spawnX, spawnY, dir, 15, '#00ffff');
    engine.addEntity(proj, 'projectile');
  }

  draw(ctx, engine) {
    const pVec = new Vector2(this.x, this.y);
    const dir = engine.mouse.sub(pVec).normalize();
    const angle = Math.atan2(dir.y, dir.x);

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);

    // Draw Ship shape
    ctx.beginPath();
    ctx.moveTo(20, 0); // Nose
    ctx.lineTo(-15, 15); // Right wing
    ctx.lineTo(-10, 0); // Engine back
    ctx.lineTo(-15, -15); // Left wing
    ctx.closePath();

    ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();

    // Engine exhaust
    if (!this.isDashing) {
      ctx.beginPath();
      ctx.moveTo(-12, 0);
      ctx.lineTo(-25 + Math.random() * -10, 5);
      ctx.lineTo(-25 + Math.random() * -10, -5);
      ctx.fillStyle = '#ff8800';
      ctx.fill();
    } else {
      // Dash big exhaust
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(-40, 10);
      ctx.lineTo(-40, -10);
      ctx.fillStyle = '#00ffff';
      ctx.fill();
    }

    ctx.restore();
  }
}
