define([], function() {
  "use strict";

  return {
    baseUrl: 'static/js',
    paths: {
      'angular': '../../static/components/angularjs/angular',
      'ui-router': '../../static/components/angular-ui-router/release/angular-ui-router.min',
      'bootstrap': '../../static/components/bootstrap/dist/js/bootstrap.min',
      '_': '../../static/components/lodash/dist/lodash.min',
      'jquery': '../../static/components/jquery/dist/jquery.min',
      'bootstrapcss': ['../../static/components/bootstrap/dist/css/bootstrap.min'],
      'fontawesome': ['../../static/components/fontawesome/css/font-awesome.min'],
      'ui.calendar': ['../../static/components/angular-ui-calendar/src/calendar'],
      'fullcalendar': ['../../static/components/fullcalendar/fullcalendar.min'],
      'angular-elastic': '../../static/components/angular-elastic/elastic',
      'ui.bootstrap': ['../../static/components/angular-bootstrap/ui-bootstrap-tpls.min']
    },
    map: {
      '*': {
        '$': 'jquery',
        '@commons': './scripts',
        'css': '/static/components/require-css/css.js'
      }
    },
    shim: {
      'angular': {
        'deps': [
          'jquery',
          'bootstrap',
          'css!bootstrapcss',
          'css!../css/main.css',
          'css!fontawesome'
        ],
        'exports': 'angular'
      },
      bootstrap: {
        deps: [
          'jquery'
        ]
      },
      '_': {
        'exports': '_'
      },
      'ui-router': {
        'deps': ['angular']
      },
      'angular-elastic': {
        deps: ['angular']
      },
      'csses': {
        'deps': ['css!bootstrapcss']
      },
      'ui.calendar': {
        'deps': ['angular', 'fullcalendar']
      },
      'ui.bootstrap': {
        'deps': ['angular', 'bootstrap', 'css!bootstrapcss']
      }
    }
  };
});
