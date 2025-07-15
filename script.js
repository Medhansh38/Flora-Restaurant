let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;
let autoRotateInterval;


function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}
function prevSlider(){
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
}function startAutoRotate() {
    autoRotateInterval = setInterval(nextSlider, 3500);
}

// Stop auto-rotation
function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

// Initialize auto-rotation
startAutoRotate();

// Button click handlers
next.onclick = function() {
    stopAutoRotate(); // Stop auto-rotation when clicked
    nextSlider();
    // Optional: restart auto-rotation after 10 seconds
    // setTimeout(startAutoRotate, 10000);
};

prev.onclick = function() {
    stopAutoRotate(); // Stop auto-rotation when clicked
    prevSlider();
    // Optional: restart auto-rotation after 10 seconds
    // setTimeout(startAutoRotate, 10000);
};
/*next.onclick = nextSlider;
prev.onclick = prevSlider;
const autoNext = setInterval(nextSlider, 3000);*/
// Stop event propagation if clicking inside the slider
