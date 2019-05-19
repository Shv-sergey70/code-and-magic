'use strict';

(function () {
  var handleResult = function (xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200: {
          onLoad(xhr.response);
          break;
        }
        case 400: {
          error = 'Неверный запрос';
          break;
        }
        case 401: {
          error = 'Пользователь не авторизован';
          break;
        }
        case 404: {
          error = 'Страница не найдена';
          break;
        }
        case 500: {
          error = 'Внутренняя ошибка сервера';
          break;
        }
        default: {
          error = 'Стутус ответа: ' + xhr.status + '. ' + xhr.statusText;
        }
      }

      if (error) {
        onError(error);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Возникла внутренняя ошибка');
    });
    xhr.addEventListener('timeout', function () {
      onError('Превышен лимит ожидания в ' + xhr.timeout / 1000 + ' секунд');
    });
  };
  window.backend = {
    load: function (onLoad, onError) {
      var ACADEMY_DATA_URL = '//js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      handleResult(xhr, onLoad, onError);
      xhr.open('GET', ACADEMY_DATA_URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var ACADEMY_DATA_FORM_SEND = '//js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      handleResult(xhr, onLoad, onError);
      xhr.open('POST', ACADEMY_DATA_FORM_SEND);
      xhr.send(data);
    }
  };
})();
