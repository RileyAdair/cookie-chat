angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

  messageService.getMessages().then(function(response){
    console.log(response);
    $scope.messages = response.data.reverse();
  })

  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function(newMessage) {
    messageService.addMessage(newMessage);
  }

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  //  setInterval(function(){
  //   $scope.getMessages();
  //
  // }, 1500)


  // Daanish
  // $scope.asc = function(){
  //   messageService.getMessages().then(function(response){
  //     console.log(response);
  //     $scope.messages = response.data.reverse();
  //   })
  // }
  // $scope.desc = function(){
  //   console.log('descending');
  //   messageService.getMessages().then(function(response){
  //     $scope.messages = response.data;
  //   })
  // }

})
