(function(){
  
  var app = angular.module('workPortal', ['portal-directives','portal-filters']);
  
  app.controller('PortalController',['$http',function($http){
    var portal = this;
    portal.items = [];
    
    $http.get('inbox.json').success(function(data)
	{
		portal.items = data;
		
	});
	
  }]);
})();
