const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

ingredients.map(item => {
  const li = document.createElement('li');
  li.classList.add('item')
  li.textContent = item;
  list.append(li);
})
