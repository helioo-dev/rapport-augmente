const imagesPage1 = [
    "assets/images/page1/0001.png",
    "assets/images/page1/0013.png",
    "assets/images/page1/0004.png",
    "assets/images/page1/0020.png",
    "assets/images/page1/0018.png",
    "assets/images/page1/0009.png",
    "assets/images/page1/0015.png",
    "assets/images/page1/0003.png",
    "assets/images/page1/0010.png",
    "assets/images/page1/0019.png",
    "assets/images/page1/0007.png",
    "assets/images/page1/0016.png",
    "assets/images/page1/0002.png",
    "assets/images/page1/0014.png",
    "assets/images/page1/0006.png",
    "assets/images/page1/0023.png",
    "assets/images/page1/0011.png",
    "assets/images/page1/0005.png",
    "assets/images/page1/0021.png",
    "assets/images/page1/0012.png",
    "assets/images/page1/0024.png",
    "assets/images/page1/0008.png",
    "assets/images/page1/0017.png",
    "assets/images/page1/0022.png"
];

let currentImageIndexPage1 = 0;

const imageDisplayPage1 = document.getElementById('imageDisplay');

if (imageDisplayPage1) {
    imageDisplayPage1.addEventListener('click', () => {
        currentImageIndexPage1 = (currentImageIndexPage1 + 1) % imagesPage1.length;
        imageDisplayPage1.src = imagesPage1[currentImageIndexPage1];
    });
}