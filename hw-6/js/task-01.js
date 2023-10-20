"use strict"


const list = document.querySelector('.categories');
const listItem = document.querySelectorAll('.item');


console.log(`Number of categories: ${listItem.length}`);

listItem.forEach(item => {
    return console.log(`Category: ${item.firstElementChild .textContent} 
Elements: ${item.lastElementChild.children.length}
    `)
})

