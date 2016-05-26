angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

     $urlRouterProvider.otherwise("/login");
    //
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: true
    // });

    //$state.go('login');

    $stateProvider
        .state('arvici', {
            url: "/",
            views: getDefaultView()
        })
        .state('login', {
            url: "/login",
            views: {
              'logon': {
                  templateUrl: "view/logon/login.html"
              }
            }
        })
        .state('apps', {
            url: "/apps",
            templateUrl: "view/page/apps.html"
        })
        .state('appnew', {
            url: "/apps/new",
            templateUrl: "view/page/appnew.html"
        })
        .state('appinfo', {
            url: "/apps/:id",
            views: {
              'sidebar': {
                templateUrl: 'view/category/CategoryList.html'
              },
              'navmenu': {
                templateUrl: 'view/navigator/Menu.html'
              },
              'appinfo': {
                templateUrl: "view/app/appinfo.html"
              }
            }
        })
        .state('store', {
            url: "/store",
            views: {
              'sidebar': {
                templateUrl: "view/category/CategoryList.html"
              },
              'applist': {
                templateUrl: 'view/app/AppList.html'
              },
              'navmenu': {
                templateUrl: 'view/navigator/Menu.html'
              }
            }
        })
});

function getDefaultView() {
  return {
    'sidebar': {
      templateUrl: "view/category/CategoryList.html"
    },
    'applist': {
      templateUrl: 'view/app/AppList.html'
    },
    'navmenu': {
      templateUrl: 'view/navigator/Menu.html'
    }
  }
}
