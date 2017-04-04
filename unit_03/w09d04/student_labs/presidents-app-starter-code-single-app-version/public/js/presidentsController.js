angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);
PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
    var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.deletePresident = deletePresident;
  activate();

  function activate() {
    loadAllPresidents();
}

  //TODO: Add presidents#create connection
function addPresident(){
  console.log('Adding...');
  console.log(vm.newPresident);

  $http
    .post('/presidents', vm.newPresident)
    .then(function someName(response) {
      vm.all.push(response.data.president);
      vm.newPresident = {};
    });

    // vm.all.push(vm.newPresident);
    // vm.newPresident = {};
  }
function deletePresident(president) {
  $http
    .delete('/presidents/' + presidents._id)
    .then(function resolve(response){
      vm.all = vm.all.filter(function(currentlyIteratedPresident) {
        return president._id != currentlyIteratedPresident
      }
    });
}

function loadAllPresidents() {
  $http
    .get('/presidents')
    .then(function resolve(response) {
      console.log(response)
      vm.all = response.data.presidents;
      vm.loadingAll = false;
    }, function reject(err) {
      vm.loadingAll = false;
});
}

}
