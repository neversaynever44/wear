// /* share42.com | 22.08.2016 | (c) Dimox */
// window.addEventListener('load', function() {
//     var e = document.getElementsByTagName('ul');
//     for (var k = 0; k < e.length; k++) {
//         if (e[k].className.indexOf('share42init') != -1) {
//             if (e[k].getAttribute('data-url') != -1) var u = e[k].getAttribute('data-url');
//             if (e[k].getAttribute('data-title') != -1) var t = e[k].getAttribute('data-title');
//             if (e[k].getAttribute('data-image') != -1) var i = e[k].getAttribute('data-image');
//             if (e[k].getAttribute('data-description') != -1) var d = e[k].getAttribute('data-description');
//             if (e[k].getAttribute('data-path') != -1) var f = e[k].getAttribute('data-path');
//             if (e[k].getAttribute('data-icons-file') != -1) var fn = e[k].getAttribute('data-icons-file');
//             if (!f) {
//                 function path(name) {
//                     var sc = document.getElementsByTagName('script'),
//                         sr = new RegExp('^(.*/|)(' + name + ')([#?]|$)');
//                     for (var p = 0, scL = sc.length; p < scL; p++) {
//                         var m = String(sc[p].src).match(sr);
//                         if (m) {
//                             if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)) return m[1];
//                             if (m[1].indexOf("/") == 0) return m[1];
//                             b = document.getElementsByTagName('base');
//                             if (b[0] && b[0].href) return b[0].href + m[1];
//                             else return document.location.pathname.match(/(.*[\/\\])/)[0] + m[1];
//                         }
//                     }
//                     return null;
//                 }
//                 f = path('js/share42.js');
//             }
//             if (!u) u = location.href;
//             if (!t) t = document.title;
//             if (!fn) fn = 'icons.png';

//             function desc() {
//                 var meta = document.getElementsByTagName('meta');
//                 for (var m = 0; m < meta.length; m++) {
//                     if (meta[m].name.toLowerCase() == 'description') {
//                         return meta[m].content;
//                     }
//                 }
//                 return '';
//             }
//             if (!d) d = desc();
//             u = encodeURIComponent(u);
//             t = encodeURIComponent(t);
//             t = t.replace(/\'/g, '%27');
//             i = encodeURIComponent(i);
//             d = encodeURIComponent(d);
//             d = d.replace(/\'/g, '%27');
//             var fbQuery = 'u=' + u;
//             if (i != 'null' && i != '') fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
//             var vkImage = '';
//             if (i != 'null' && i != '') vkImage = '&image=' + i;
//             var s = new Array('"#" data-count="fb" onclick="window.open(\'//www.facebook.com/sharer/sharer.php?u=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="gplus" onclick="window.open(\'//plus.google.com/share?url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"', '"#" data-count="twi" onclick="window.open(\'//twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"', '"#" data-count="vk" onclick="window.open(\'//vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"');
//             var l = '';
//             for (j = 0; j < s.length; j++) l += '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:24px;height:24px;margin:0 6px 6px 0;padding:0;outline:none;background:url(' + f + fn + ') -' + 24 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a>';
//             e[k].innerHTML = '<span id="share42">' + l + '</span>';
//         }
//     };
// }, false);


$(document).ready(function() {
	$(document).on('click', '.social__link', function(){
    Share.go(this);
});
	Share = {
    /**
     * Показать пользователю дилог шаринга в сооветствии с опциями
     * Метод для использования в inline-js в ссылках
     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
     *
     * @example <a href="" onclick="return share.go(this)">like+</a>
     *
     * @param Object _element - элемент DOM, для которого
     * @param Object _options - опции, все необязательны
     */
    go: function(_element, _options) {
        var
            self = Share,
            options = $.extend(
                {
                    type:       'vk',    // тип соцсети
                    url:        location.href,  // какую ссылку шарим
                    count_url:  location.href,  // для какой ссылки крутим счётчик
                    title:      document.title, // заголовок шаринга
                    image:        '',             // картинка шаринга
                    text:       '',             // текст шаринга
                },
                $(_element).data(), // Если параметры заданы в data, то читаем их
                _options            // Параметры из вызова метода имеют наивысший приоритет
            );

        if (self.popup(link = self[options.type](options)) === null) {
            // Если не удалось открыть попап
            if ( $(_element).is('a') ) {
                // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
                $(_element).prop('href', link);
                return true;
            }
            else {
                // Если это не <a>, то пытаемся перейти по адресу
                location.href = link;
                return false;
            }
        }
        else {
            // Попап успешно открыт, просим браузер не продолжать обработку
            return false;
        }
    },

    // ВКонтакте
    vk: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);

        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },

    // Одноклассники
    ok: function(_options) {
        var options = $.extend({
                url:    location.href,
                text:   '',
            }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);

        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },


    // Твиттер
    tw: function(_options) {
        var options = $.extend({
                url:        location.href,
                count_url:  location.href,
                title:      document.title,
            }, _options);

        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url)
            + '&counturl=' + encodeURIComponent(options.count_url);
    },


    // Открыть окно шаринга
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
}
});