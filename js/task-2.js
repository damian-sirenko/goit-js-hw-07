const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const galleryEl = document.querySelector('.gallery');
galleryEl.style.maxWidth = '1128px';
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = "wrap";
galleryEl.style.flexDirection = 'row';
galleryEl.style.gap = "48px 24px";

const fragment = document.createDocumentFragment();

images.forEach((image) => {
	const listItemEl = document.createElement('li');
	listItemEl.classList.add('gallery-item');
	listItemEl.style.width = "360px";
	listItemEl.style.height = "300px";
	listItemEl.style.border = "none";

	const imageEl = document.createElement('img');
	imageEl.src = image.url;
	imageEl.alt = image.alt;
	imageEl.style.width = "100%";
	imageEl.style.height = "100%";
	imageEl.style.objectFit = "cover";

	listItemEl.append(imageEl);
	fragment.append(listItemEl);
});

galleryEl.append(fragment);

	

