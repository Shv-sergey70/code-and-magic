'use strict';

window.renderStatistics = function (ctx, names, times) {
  var CLOUD_X = 110;
  var CLOUD_Y = 20;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_COLOR = '#fff';

  var CLOUD_SHADOW_X = CLOUD_X - 10;
  var CLOUD_SHADOW_Y = CLOUD_Y - 10;
  var CLOUD_SHADOW_WIDTH = 420;
  var CLOUD_SHADOW_HEIGHT = 270;
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

  var COLUMNS_X = 150;
  var COLUMNS_Y = 250;
  var COLUMNS_WIDTH = 40;
  var COLUMNS_MAX_HEIGHT = 150;
  var COLUMNS_GAP = COLUMNS_WIDTH + 50;
  var USER_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';

  var MAIN_TEXT_COLOR = '#000';
  var TEXT_PADDING = 20;

  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_SHADOW_WIDTH, CLOUD_SHADOW_HEIGHT);

  ctx.fillStyle = MAIN_TEXT_COLOR;
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_PADDING, CLOUD_Y + TEXT_PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_PADDING, CLOUD_Y + TEXT_PADDING * 2);

  var maxTimeResult = getMaxArrayValue(times);
  var columnHeight = 0;
  ctx.textBaseline = 'bottom';

  for (var i = 0; i < names.length; i++) {
    columnHeight = Math.floor((times[i] * COLUMNS_MAX_HEIGHT) / maxTimeResult);

    if (names[i] === 'Вы') {
      ctx.fillStyle = USER_COLUMN_COLOR;
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor(Math.random() * 255) + ', 1)';
    }

    ctx.fillRect(COLUMNS_X + COLUMNS_GAP * i, COLUMNS_Y, COLUMNS_WIDTH, -columnHeight);

    ctx.fillStyle = MAIN_TEXT_COLOR;
    ctx.fillText(names[i], COLUMNS_X + COLUMNS_GAP * i, COLUMNS_Y + TEXT_PADDING);

    ctx.fillText(Math.floor(times[i]), COLUMNS_X + COLUMNS_GAP * i, CLOUD_HEIGHT - columnHeight - TEXT_PADDING);
  }
};

function getMaxArrayValue(array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {

    if (array[i] > result) {
      result = array[i];
    }
  }

  return result;
}
