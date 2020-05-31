app.controller("addController", function($scope, Product) {
  $scope.products = [];
  $scope.temp = [];
  $scope.name = "";
  $scope.price = "";
  $scope.desc = "";
  $scope.category = "Choose Category";
  $scope.id = 1;
  $scope.currentId = 0;
  $scope.isEdit = false;

  $scope.add = function() {
    let productObject = new Product(
      $scope.id,
      $scope.name,
      $scope.price,
      $scope.desc,
      $scope.category
    );

    $scope.products.push(productObject);
    $scope.temp = [...$scope.products];
    console.log($scope.products);
    $scope.id++;

    $scope.clearAll();
  };

  $scope.clearAll = function() {
    $scope.name = "";
    $scope.price = "";
    $scope.desc = "";
    $scope.category = "Choose Category";
  };

  $scope.toggleStarred = function(id) {
    $scope.products.forEach(product => {
      if (product.id == id) {
        product.isStarred = !product.isStarred;
      }
    });
  };

  $scope.sortByName = function() {
    $scope.temp.sort((a, b) => a.name.localeCompare(b.name));
  };

  $scope.sortById = function() {
    $scope.temp.sort((a, b) => a.id - b.id);
  };

  $scope.showAll = function() {
    $scope.temp = [...$scope.products];
  };

  $scope.filterStarred = function() {
    $scope.temp = [...$scope.products.filter(product => product.isStarred)];
  };

  $scope.deleteProduct = function(id) {
    console.log("delete called  ", id);

    $scope.products = $scope.products.filter(function(product) {
      return product.id != id;
    });

    $scope.temp = [...$scope.products];
  };

  $scope.editProduct = function(id) {
    $scope.products.forEach(product => {
      if (product.id == id) {
        $scope.currentId = product.id;
        $scope.name = product.name;
        $scope.price = product.price;
        $scope.desc = product.desc;
        $scope.category = product.category;
      }
    });
    $scope.isEdit = true;
  };

  $scope.updateProduct = function(id) {
    $scope.products.forEach(product => {
      if (product.id == $scope.currentId) {
        product.name = $scope.name;
        product.price = $scope.price;
        product.desc = $scope.desc;
        product.category = $scope.category;
      }
    });
    $scope.isEdit = false;
    $scope.clearAll();
  };
});
