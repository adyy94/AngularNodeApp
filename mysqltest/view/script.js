var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
    $scope.myData = {};
    
    $http.get("/books").then(function (response) {
        
        $scope.myData = response.data.Books;

    });
    
    $scope.Delete = function (book) {
        
        
        if (confirm('Are you sure you want to delete this?')) {
            // TODO:  Do something here if the answer is "Ok".
            
            $http.delete('books/' + book);
            // alert('datele au fost sterse cu succes');
            var index = $scope.myData.indexOf(book);
            $scope.myData.splice(index, 1);

        }

    };
    
    
    $scope.Save = function () {
        
        var data = {
            bookname: $scope.bookname,
            authorname: $scope.authorname,
            price: $scope.price
        };
        
        
        
        $http.post('/books', data).success(function (data) {
            
            alert('datele au fost salvate cu succes!');
            $scope.myData.push($scope.data);

        })

    };





});


app.controller('createCtrl', function ($scope, $http) {



});
     