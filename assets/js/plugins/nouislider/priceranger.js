const priceRanger = document.getElementById('priceranger');

noUiSlider.create(priceRanger, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});


const priceRange = document.getElementById('pricerange');

noUiSlider.create(priceRange, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});