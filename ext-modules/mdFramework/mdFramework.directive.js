(function() {
  'use strict';

  // angular
  //   .module("app.framework")
  //   .directive('mdFramework', mdFramework);
  //
  //   // mdFramework.$inject = */
  //
  //   /* @ngInject */
  //   function mdFramework() {
  //
  //     var directive = {
  //         bindT oController: true,
  //         controller: FrameworkController,
  //         controllerAs: 'vm',
  //         templateUrl: 'ext-modules/mdFramework/md-framework.template.html'
  //     };
  //
  //       // FrameworkController.$inject = [];
  //
  //         /* @ngInject */
  //         function FrameworkController() {
  //           var vm = this;
  //         }
  //
  //         return directive;
  //   }

  angular.module('app.framework').directive('mdFramework', function () {
    return {
        transclude: false,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: 'mdFrameworkController',
        templateUrl: 'ext-modules/mdFramework/mdFrameworkTemplate.html'

    };
});

})();
