self.addEventListener('install',function(event){
    console.log('sw installed');
    event.waitUntil(
        caches.open('static')
            .then(function(cache){
                cache.add('/');
                cache.add('/index.html');
                cache.add('/elements.html');
                cache.add('/generic.html');
                /*----------------*/
                cache.add('/assets/css/font-awesome.min.css');
                cache.add('/assets/css/main.css');
                /*----------------*/
                cache.add('/assets/fonts/fontawesome-webfont.eot');
                cache.add('/assets/fonts/fontawesome-webfont.svg');
                cache.add('/assets/fonts/fontawesome-webfont.ttf');
                cache.add('/assets/fonts/fontawesome-webfont.woff');
                cache.add('/assets/fonts/fontawesome-webfont.woff2');
                cache.add('/assets/fonts/fontawesome.otf');

                /*----------------*/
                cache.add('/assets/js/util.js');
                cache.add('/assets/js/main.js');
                cache.add('/assets/js/jquery.min.js');
                cache.add('/assets/js/breakpoints.min.js');
                cache.add('/assets/js/browser.min.js');
                /*----------------*/
                cache.add('/assets/sass/base/_page.scss');
                cache.add('/assets/sass/base/reset.scss');
                cache.add('/assets/sass/base/_typography.scss');
                /*----------------*/
                cache.add('/assets/sass/components/_actions.scss');
                cache.add('/assets/sass/components/_box.scss');
                cache.add('/assets/sass/components/_button.scss');
                cache.add('/assets/sass/components/_form.scss');
                cache.add('/assets/sass/components/_grid.scss');
                cache.add('/assets/sass/components/_highlights.scss');
                cache.add('/assets/sass/components/_icon.scss');
                cache.add('/assets/sass/components/_icons.scss');
                cache.add('/assets/sass/components/_image.scss');
                cache.add('/assets/sass/components/_inner.scss');
                cache.add('/assets/sass/components/_list.scss');
                cache.add('/assets/sass/components/_table.scss');
                cache.add('/assets/sass/components/_testimonials.scss');
                cache.add('/assets/sass/components/_wrapper.scss');
                /*----------------*/
                cache.add('/assets/sass/layout/_banner.scss');
                cache.add('/assets/sass/layout/_cta.scss');
                cache.add('/assets/sass/layout/_footerpage.scss');
                cache.add('/assets/sass/layout/_header.scss');
                cache.add('/assets/sass/layout/_heading.scss');
                cache.add('/assets/sass/layout/_main.scss');
                cache.add('/assets/sass/layout/_menu.scss');

                /*----------------*/
                cache.add('/assets/sass/libs/_breakpoints.scss');
                cache.add('/assets/sass/libs/_flexgrid.scss');
                cache.add('/assets/sass/libs/_functions.scss');
                cache.add('/assets/sass/libs/_grid.scss');
                cache.add('/assets/sass/libs/_mixins.scss');
                cache.add('/assets/sass/libs/_vars.scss');
                cache.add('/assets/sass/libs/_vendor.scss');

                /*----------------*/
                cache.add('/images/96.png');
                cache.add('/images/144.png');
                cache.add('/images/256.png');
                cache.add('/images/512.png');
                /*----------------*/
                cache.add('/images/banner.jpg');
                cache.add('/images/bg.jpg');
                cache.add('/images/cta01.jpg');
                cache.add('/images/pic01.jpg');
                cache.add('/images/pic02.jpg');
                cache.add('/images/pic03.jpg');

                /*----------------*/
                
            })
    )
});

self.addEventListener('activate',function(){
    console.log('sw activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

  