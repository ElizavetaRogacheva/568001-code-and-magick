var renderCloud = function(ctx, cloudTopLeftX, cloudTopLeftY, cloudBottomRightX, cloudBottomRightY, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(cloudTopLeftX, cloudTopLeftY);
  ctx.lineTo(cloudBottomRightX, cloudTopLeftY );
  ctx.lineTo(cloudBottomRightX - 50, (cloudTopLeftY + cloudBottomRightY)/2);
  ctx.lineTo(cloudBottomRightX, cloudBottomRightY);
  ctx.lineTo(cloudTopLeftX, cloudBottomRightY);
  ctx.lineTo(cloudTopLeftX + 50, (cloudTopLeftY + cloudBottomRightY)/2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 60, 610, 260, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, 600, 250, '#fff');
}
