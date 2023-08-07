import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', handlerClick);

// console.log(galleryItems);

function createImages(arr) {
    return arr.map (({ preview, original, description}) => 
        `<li class="gallary__item"> 
         <a class="galary__link" href="${original}"> 
         <img
         class="gallery__image"
         src="${preview}" 
         data-source="${original}" 
         alt="${description}"/>
         </a> 
         </li>`).join('')
}; // Збираємо усі об'єкти та робимо розмітку для HTML
    
gallery.insertAdjacentHTML('beforeend', createImages(galleryItems)); // Додаємо у HTML розмітку

function handlerClick(evt) {
    evt.preventDefault(); // Заборонити дефолтну поведінку
    const originalPic = evt.target.dataset.source; // Дістаємо значення великої картинки
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${originalPic}">
    </div>
    `) // робимо розмітку модального вікна
    instance.show(); // Викликаємо модалку з бібліотекі
    window.addEventListener("keydown", onEsc); // Прослуховувачь на натискання клавіши
    // Подія на випадок натискання клавіши ESC
    function onEsc(evt) {
        if (evt.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEsc);
        } 
    }
}