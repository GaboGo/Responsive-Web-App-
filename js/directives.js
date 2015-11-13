(function(){

      var app = angular.module('portal-directives', []);
	  
	  app.directive("itemsList", function() {
		  return {
			restrict: 'E',
			templateUrl: "items-list.html",
			 controller: function() {
			  
			  this.setApproved = function(item) {
	            item.approved = "1";
			  };
			  
			  this.setRejected = function(item) {
	            item.approved = "0";
			  };
			},
			controllerAs: "button"
		  };
		});
		
	  app.directive("portalHeader", function() {
		 return {
		   restrict: 'E',
		   templateUrl: "portal-header.html"
		 };
	   });	
 })();
