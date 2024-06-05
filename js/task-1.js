const ulCategories = document.querySelectorAll('#categories .item');
const total = ulCategories.length;
console.log(ulCategories);
console.log(`Number of categories: ${total}`);
ulCategories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    // const categoryItemsCount = category.querySelectorAll('ul li').length;
    const categoryItemsCount = category.querySelector('ul').childElementCount 
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
});


