import {startScroll} from './scroll.js';

const form =document.getElementById('intro-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';

    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const body = document.getElementById('body').value;

    const fullText = `${title}\n\n${subtitle}\n\n${body}`;

    startScroll(fullText);

});