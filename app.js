var i = 0;
var images = [];
var time = 5000;

images[0] = '/img/photo-1.jpg';
images[1] = '/img/photo-2.jpg';
images[2] = '/img/photo-3.jpg';

function changeImg() {
    document.slide.src = images[i];    

    setTimeout("changeImg()", time);
    return i<images.length - 1 ? i++ : i = 0;
}

window.onload = changeImg;