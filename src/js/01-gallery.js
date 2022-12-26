// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const galleryMarkup = galleryItems.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`
}).join("");

galleryEl.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true, 
    captionSelector: "img", 
    captionType: "attr", 
    captionsData: "alt", 
    captionPosition: "bottom", 
    captionDelay: 250, 
});

lightbox.on("show.simplelightbox", () => console.log(galleryEl));
lightbox.on("closed.simplelightbox", () => console.log("Thanks for watching!"));
lightbox.on("changed.simplelightbox", () => console.log("this is the next image!"));