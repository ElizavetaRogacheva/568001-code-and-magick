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

var LEFT_TOP_X = 110;
var LEFT_TOP_Y = 20;
var RIGHT_BOTTOM_X = 630;
var RIGHT_BOTTOM_Y = 290;
var TEXT_START_X = 150;
var TEXT_START_Y = 30;
var COLUMN_X = 160;
var COLUMN_Y = 250;
var DISTANCE = 50;
var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, LEFT_TOP_X, LEFT_TOP_Y, RIGHT_BOTTOM_X, RIGHT_BOTTOM_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, LEFT_TOP_X - 10, LEFT_TOP_Y - 10, RIGHT_BOTTOM_X - 10, RIGHT_BOTTOM_Y - 10, '#fff');
  ctx.font = '16px, PT Mono';
  ctx.fillStyle = "#000"
  ctx.fillText('Ура вы победили!', TEXT_START_X, TEXT_START_Y);
  ctx.fillText('Список результатов:',TEXT_START_X, TEXT_START_Y + 30);

  ctx.fillStyle = '#000';
  var maxTime = 0;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  for (var i = 0; i < names.length; i++) {
    var x = COLUMN_X + (COLUMN_WIDTH + DISTANCE)*i;
    var y = COLUMN_Y - COLUMN_MAX_HEIGHT * times[i] / maxTime;
    var height = COLUMN_MAX_HEIGHT * times[i] / maxTime;
    ctx.fillRect(x, y, COLUMN_WIDTH, height);
    ctx.fillText(names[i], x, COLUMN_Y + 20);

  }
}
