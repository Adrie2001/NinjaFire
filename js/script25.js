// Adding Images for Concept and Storyboard Art in 

var imageIndex = 1;
var images = ["./images/IMG_2024.png", "./images/N1NJ4F123-23COV323D.jpg"];

function changeImage() {
var image = document.getElementById('myImage');
if (imageIndex < images.length) {
    image.src = images[imageIndex];
    imageIndex++;
} else {
    image.src = images[0];
    imageIndex = 1;
    }
}