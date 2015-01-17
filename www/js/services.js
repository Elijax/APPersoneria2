var app = angular.module('APPersoneria.services', [])
app.factory('glosarioService', function($http)
{
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'http://apps.personeriacali.gov.co/api/glosary',
        cache: true
      }).success(callback);
    }
  }
})
app.factory('faqService', function($http)
{
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'http://apps.personeriacali.gov.co/api/faqs',
        cache: true
      }).success(callback);
    }
  }
})
app.factory('departamentosService', function($http)
{
  var urlService = 'http://apps.personeriacali.gov.co/api/dept/';
  var obj = {};

  obj.getDepartamentos =function(){
      return $http.get(urlService);
  }
  return obj;
})
app.factory('municipiosService', function($http)
{
  var obj = {};

  var urlService = "http://apps.personeriacali.gov.co/api/mun/" 

  obj.getMunicipios =function(id){
      return $http.get(urlService+id.departamento);
  }
  return obj;
})
app.factory('createMessageService', function($http)
{
  return{
    postMessage: function(message){
      $http({
          url: 'http://apps.personeriacali.gov.co/create/message',
          method:'POST',
          data: $.param(msg),
          dataType:'json',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    }  
  } 
}  
);
