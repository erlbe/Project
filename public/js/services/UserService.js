angular.module('UserService', []).factory('UserService', ['$http', '$location', function($http, $location) {

    return {
        // call to get all users
        getAll : function() {
            return $http.get('/api/users/all').then(function(response){
                return response;
            })
        },

        // call api to add a new user with userdata
        newUser : function(userData) {
            return $http.post('/api/user', userData);
        }
/*

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
*/
    }

}]);