(function() {
  angular
    .module('store')
    .controller('StoreController', function() {
      var vm = this;
      vm.products = gems;
    });

    var gems = [
      {
        name: 'Lexville',
        price: 2,
        description: 'LoremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        canPurchase: true,
        soldOut: true,
        images: [
          {
            full: '/img/gem-01.gif',
            thumb: '/img/gem-01.gif'
          },
          {
            full: '/img/gem-01.gif',
            thumb: '/img/gem-01.gif'
          }
        ]
      },
      {
        name: 'Birdy',
        price: 10.50,
        description: 'Typewriter cliche dreamcatcher ethical pug beard banjo master cleanse. Four loko mumblecore banh mi neutra asymmetrical, synth polaroid gochujang godard jean shorts selvage',
        canPurchase: false,
        soldOut: false,
        images: [
          {
            full: '/img/gem-01.gif',
            thumb: '/img/gem-01.gif'
          },
          {
            full: '/img/gem-01.gif',
            thumb: '/img/gem-01.gif'
          }
        ]
      },
    ];
})();