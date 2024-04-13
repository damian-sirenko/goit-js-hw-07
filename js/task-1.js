const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((item) => {
	const categoryTitle = item.querySelector('h2');
	console.log(`Cagegory: ${categoryTitle.textContent}`);
	const categoryItems = item.querySelectorAll('.item-list');
	console.log(`Elements: ${categoryItems.length}`);
});

