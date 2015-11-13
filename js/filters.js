(function(){
	
	var app = angular.module('portal-filters', []);

	app.filter("getDays", function(){
	   return function(beginDate,endDate){
		
			var dt1 = beginDate.split('-'),
				dt2 = endDate.split('-'),
				one = new Date(dt1[0], dt1[1], dt1[2]),
				two = new Date(dt2[0], dt2[1], dt2[2]);
			
			var millisecondsPerDay = 1000 * 60 * 60 * 24;
			var millisBetween = two.getTime() - one.getTime();
			var days = Math.floor(millisBetween / millisecondsPerDay);
	
			if(days === 1){
			 return days+" dia";   
			}else
			{
			 return days+" dias";   	
			}
	   }
	});
	
	app.filter("isUndo", function(){
		return function(approved)
		{
			if(approved == "")
			{
			  return true;
			}
			else
			{ 
			  return false;
			}
		}
	});
	
	app.filter("isApproved", function(){
		return function(approved)
		{
			if(approved == "1")
			{
			  return true;
			}
			else
			{ 
			  return false;
			}
		}
	});
	
	app.filter("isRejected", function(){
		return function(approved)
		{
			if(approved == "0")
			{
			  return true;
			}
			else
			{ 
			  return false;
			}
		}
	});
	
})();