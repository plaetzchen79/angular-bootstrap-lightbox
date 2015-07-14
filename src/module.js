/**
 * @namespace bootstrapLightbox
 */
angular.module('bootstrapLightbox', [
  'ui.bootstrap.modal',
  'ui.bootstrap.tpls' // templates
]);

// optional dependencies
try {
  angular.module('angular-loading-bar');
  angular.module('bootstrapLightbox').requires.push('angular-loading-bar');
} catch (e) {}

try {
  angular.module('ngTouch');
  angular.module('bootstrapLightbox').requires.push('ngTouch');
} catch (e) {}
