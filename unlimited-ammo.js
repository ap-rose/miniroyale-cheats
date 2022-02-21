a0_0x46d546.prototype.shoot = function() {
  if (this.isShooting && this.nextShootTime < 1 && !this.isNetworkShooting && this.app.fire("Keyboard:State", "shoot", !0),this.isShooting && this.nextShootTime < 0) {
    this.fireBullet();      
  }
}
