var app = angular.module('APPersoneria.controllers', [])

app.controller('DashCtrl', function($scope) {})
app.controller('glosarioController',function($scope, glosarioService)
{
  $scope.maxLength = 100;
  glosarioService.list(function(glosarioService) {
    $scope.terminos = glosarioService;
  });
})
app.controller('faqController', function($scope,faqService)
{
  $scope.maxLength = 100;
  faqService.list(function(faqService) {
    $scope.faqs = faqService;
  });
})
app.controller('contactoController',function($scope, departamentosService, municipiosService, $http)
{
  departamentosService.getDepartamentos().then(function(terminos){
    $scope.departamentos = terminos.data;
  });

  $scope.getMunicipios = function(msg){
    municipiosService.getMunicipios(msg).then(function(terminos){
      $scope.municipios = terminos.data;
    });
  }

  $scope.addMessage =function(msg){
    return $http({
        url: 'localhost/Appersoneria/appersoneria Kurten/APPersoneria-APP/APP-Appersoneria/APPersoneria2/www/js/messages.json',
        method:'POST',
        data: $.param(msg),
        dataType:'json'
      }).
      success(function (data, status, headers, config) {
        alert(status); 
      }).
      error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert(status);
      });      
    }  
});
