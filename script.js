var images = ['Img/BackImage/1.jpg', 'Img/BackImage/2.jpg', 'Img/BackImage/3.jpg'];
var index = 0;

setInterval(function() {
    index = (index + 1) % images.length;
    document.querySelector('.header').style.backgroundImage = `url('${images[index]}')`;
}, 3000); // меняем изображение каждые 3 секунд