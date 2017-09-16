var app = angular.module('chatApp' , ['ngMaterial']);


app.controller('chatController' , function ($scope){
	
	$scope.messages = [

		{
			sender: "BOT",	
			text:"What can I do for you?" ,
			time:"1:10 PM"
		},
		{	
			sender:"USER",
			text:"Give me the news about cricket",
			time:"1:12 PM"
		},
		{
			sender:"BOT",
			text:"Hi 3",
			time:"1:13 PM"
		}

	];

	var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
	exampleSocket.onmessage  =   function  (event) {
	       var jsonData = JSON.parse(event.data);
	       console.log(jsonData);
	   };

});
