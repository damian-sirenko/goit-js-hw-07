const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.backgroundColor = '#f6f6fe';
boxesContainer.style.padding = '32px';
boxesContainer.style.display = 'flex';
boxesContainer.style.flexDirection = 'row';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '16px'
boxesContainer.style.alignItems = 'end';

function createBoxes(amount) {
	destroyBoxes();

   const firstBoxSize = 30;
	const boxes = [];

	for (let i = 0; i < amount; i++) {
		const boxSize = firstBoxSize + i * 10;
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }

	boxesContainer.append(...boxes);
	
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

createBtn.addEventListener('click', () => {
	const amount = parseInt(input.value);
	if (amount >= 1 && amount <= 100) {
		createBoxes(amount);
	}
	input.value = '';
});

	destroyBtn.addEventListener('click', destroyBoxes);
