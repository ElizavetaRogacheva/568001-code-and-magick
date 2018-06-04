var renderCloud = function(ctx, cloudTopLeftX, cloudTopLeftY, cloudBottomRightX, cloudBottomRightY, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cloudTopLeftX, cloudTopLeftY);
  ctx.lineTo(cloudBottomRightX, cloudTopLeftY );
  ctx.lineTo(cloudBottomRightX - 50, (cloudTopLeftY + cloudBottomRightY)/2);
  ctx.lineTo(cloudBottomRightX, cloudBottomRightY);
  ctx.lineTo(cloudTopLeftX, cloudBottomRightY);
  ctx.lineTo(cloudTopLeftX + 50, (cloudTopLeftY + cloudBottomRightY)/2);
  ctx.closePath();
  ctx.stroke();
}

window.renderStatistics = function(ctx) {

}
