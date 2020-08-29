(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common'])
.constant('ITEMS_URL', 'https://angular-droor.herokuapp.com/menu_items');

})();
