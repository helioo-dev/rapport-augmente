const imagesPage3 = [
    "assets/images/page3/0001.png",
    "assets/images/page3/0002.png",
    "assets/images/page3/0003.png",
    "assets/images/page3/0004.png",
    "assets/images/page3/0005.png",
    "assets/images/page3/0006.png",
    "assets/images/page3/0007.png",
    "assets/images/page3/0008.png",
    "assets/images/page3/0009.png",
    "assets/images/page3/0010.png",
    "assets/images/page3/0011.png",
    "assets/images/page3/0012.png",
    "assets/images/page3/0013.png",
    "assets/images/page3/0014.png",
    "assets/images/page3/0015.png",
    "assets/images/page3/0016.png",
    "assets/images/page3/0017.png",
    "assets/images/page3/0018.png",
    "assets/images/page3/0019.png",
    "assets/images/page3/0020.png",
    "assets/images/page3/0021.png",
    "assets/images/page3/0022.png",
    "assets/images/page3/0023.png",
    "assets/images/page3/0024.png"
];

let currentImageIndexPage3 = 0;

const imageDisplayPage3 = document.getElementById('imageDisplay');

if (imageDisplayPage3) {
    imageDisplayPage3.addEventListener('click', () => {
        currentImageIndexPage3 = (currentImageIndexPage3 + 1) % imagesPage3.length;
        imageDisplayPage3.src = imagesPage3[currentImageIndexPage3];
    });
}