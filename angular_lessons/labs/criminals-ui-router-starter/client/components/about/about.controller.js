AboutController.$inject = ['$stateparams', 'AboutService'];

function AboutController(AboutService) {
  const vm = this;

  vm.current = {};

  activate();

  function activate() {
    loadCurrentCriminal();
  }

  function loadCurrentCriminal() {
    AboutService
      .loadCurrent($stateparams.criminalId)
      .then(function resolve(response) {
        vm.currenet = response.data.criminal;
      });
  }
}

module.exports = AboutController;
