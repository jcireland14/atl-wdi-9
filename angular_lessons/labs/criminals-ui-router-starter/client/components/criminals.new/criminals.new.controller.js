CriminalsNewController.$inject =['$stateParams', 'CriminalsService'];

function CriminalsNewController($stateParams, CriminalsService) {
  const vm = this;

  // vm.current = {};
  vm.new = {};

  activate();

  function activate() {
    loadNewCriminal();
  }

  function loadNewCriminal() {
    CriminalsService
    .loadNew($stateParams.criminalId)
    .then(function resolve(response) {
      vm.new = response.data.criminal;
    });
}
}
module.exports = CriminalsNewController;
