angular.module('starter.services', [])

// make service that to connect Firebase database to my app
//use get function in order to get any item ID

.factory('Blogg', function($firebaseArray){
  var ref = new Firebase('https://calapp.firebaseio.com');
  //return $firebaseArray(ref);
  var recs = $firebaseArray(ref);
  var Blogg = {
        all: recs,
        get: function(itemId) {
            return recs.$getRecord(itemId);
        }        
    };
    return Blogg;
})
/*
 app.factory('Queue', function($firebaseArray) {
    var ref = new Firebase('https://calapp.firebaseio.com');
    return $firebaseArray(ref);
  });
*/