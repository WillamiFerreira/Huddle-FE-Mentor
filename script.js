const button = document.getElementsByTagName('button')[0];
const socials = document.getElementsByClassName('s');

for (let s of socials){
    s.addEventListener('mousedown', () => s.classList.add('social-actived'));
    s.addEventListener('mouseup', () => s.classList.remove('social-actived'));
    s.addEventListener('touchstart', () => s.classList.add('social-actived'));
    s.addEventListener('touchend', () => s.classList.remove('social-actived'));

}


button.addEventListener('mousedown', () => button.classList.add('on'));
button.addEventListener('mouseup', () => button.classList.remove('on'));

button.addEventListener('touchstart', () => button.classList.add('on'));
button.addEventListener('touchend', () => button.classList.remove('on'));
