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

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 630, 290, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 620, 280, '#fff');
  ctx.font = '16px, PT Mono';
  ctx.fillStyle = "#000"
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:',150, 60);
}
