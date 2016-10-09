angular.module('myApp.services', [])

.factory("data", function($firebaseArray, $firebaseObject) {
  // the $firebaseArray service properly handles database queries as well
  var ref = new Firebase("https://enroll-tec.firebaseio.com/TEC");
  // download the data into a local object
  
  return {
    all: function(pTable){ 
      var query = ref.child(pTable);
      return $firebaseArray(query);
    },
    remove: function(key){ }, // TODO
    
    byCarnet: function($value){ 
      var query = ref.child("carnet");
      return $firebaseArray(query);
    },
    
    registrar(pTable, pData){
      var usersRef = ref.child(pTable);
      usersRef.set(pData);
    }
  };
})