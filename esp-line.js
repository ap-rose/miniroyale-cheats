const onMovementUpdateAnimation = a0_0xa13894.prototype.updateAnimation;
const HEAD_OFFSET = 0.4;
const RENDER_LINE_STEP = 0.001;
const RENDER_LINE_WIDTH = 0.03;
const RED_COLOR = new pc.Color(1, 0, 0);
const BLUE_COLOR = new pc.Color(0, 0, 1);

function renderLine(application, from, to, color) {
  for (let i = 0; i < RENDER_LINE_WIDTH; i += RENDER_LINE_STEP) {
    const fromOffset = new pc.Vec3(from.x + i, from.y, from.z + i);
    const toOffset = new pc.Vec3(to.x + i, (to.y - HEAD_OFFSET), to.z + i);

    application.renderLine(fromOffset, toOffset, color);
  }
}

a0_0xa13894.prototype.updateAnimation = function () {
  onMovementUpdateAnimation.apply(this, arguments);

  const position = this.entity.getPosition().clone();
  const enemies = this.playerManager.script.playerManager.players;

  for (const enemy of enemies) {
	if (enemy.team == pc.controls.team){
	renderLine(this.app, enemy.localPosition, position, BLUE_COLOR);  
	}else{
	renderLine(this.app, enemy.localPosition, position, RED_COLOR);
	}
  }
  
}
