// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryListDiv = document.querySelector('.gallery');
const cardsMarkup = createPictureCards(galleryItems);

galleryListDiv.insertAdjacentHTML('afterbegin', cardsMarkup);

function createPictureCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description} "/>
</a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  // captions: true,
  captionDelay: 250,
  // captionsData: title,
  overlayOpacity: 1,
});

// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// // console.log(galleryItems);

// const galleryEl = document.querySelector('.gallery');

// galleryEl.innerHTML = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<a class="gallery__item" href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}" />
//   </a>`;
//   })
//   .join('');

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// lightbox.on('show.simplelightbox');