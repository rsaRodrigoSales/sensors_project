angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

	
    return {
        // call to get all geeks
        get : function() {
            return $http.get('/api/geeks');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/geeks', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/geeks/' + id);
        }
    }       

}]);

