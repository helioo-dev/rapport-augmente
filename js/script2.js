const imagesPage2 = [
    "assets/images/page2/0001.png",
    "assets/images/page2/0002.png",
    "assets/images/page2/0003.png",
    "assets/images/page2/0004.png",
    "assets/images/page2/0005.png",
    "assets/images/page2/0006.png",
    "assets/images/page2/0007.png",
    "assets/images/page2/0008.png",
    "assets/images/page2/0009.png",
    "assets/images/page2/0010.png",
    "assets/images/page2/0011.png",
    "assets/images/page2/0012.png",
    "assets/images/page2/0013.png",
    "assets/images/page2/0014.png",
    "assets/images/page2/0015.png",
    "assets/images/page2/0016.png",
    "assets/images/page2/0017.png",
    "assets/images/page2/0018.png",
    "assets/images/page2/0019.png",
    "assets/images/page2/0020.png",
    "assets/images/page2/0021.png",
    "assets/images/page2/0022.png",
    "assets/images/page2/0023.png",
    "assets/images/page2/0024.png"
];

let currentImageIndexPage2 = 0;

const imageDisplayPage2 = document.getElementById('imageDisplay');

if (imageDisplayPage2) {
    imageDisplayPage2.addEventListener('click', () => {
        currentImageIndexPage2 = (currentImageIndexPage2 + 1) % imagesPage2.length;
        imageDisplayPage2.src = imagesPage2[currentImageIndexPage2];
    });
}