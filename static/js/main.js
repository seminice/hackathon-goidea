require(['static/js/sharedRequireConfig.js'], function(sharedRequireConfig) {
  'use strict';
  require.config(sharedRequireConfig);

  require(['./goidea/module'], function(module) {
      angular.element().ready(function() {
          angular.bootstrap(document, ['goidea']);
      });
  });
});
