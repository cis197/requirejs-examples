require.config({
    baseUrl: 'js',
    paths: {
        backbone:   'vendor/backbone-min',
        jquery:     'vendor/jquery.min',
        text:       'vendor/text',
        underscore: 'vendor/underscore-min'
    },
    shim: {
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
});

require(['jquery', 'myModule', 'models/HelloModel', 'views/HelloView'],
  function ($, myModule, HelloModel, HelloView) {
    $('body').html('<h1>Hello from RequireJS!</h1>');
    myModule('body');

    var helloModel = new HelloModel();
    var helloView = new HelloView({
      model: helloModel
    });
    $('body').append(helloView.$el);
    helloView.render();
});
