const galleryContainer = document.querySelector('.gallery-container');

const frameNamePrefix = "Frame ";
const frameNameStartIndex = 1;
const frameNameEndIndex = 20;
const frameNameExt = "png";


// Get the image file paths from the directory
const imagePaths = getImageNames(frameNamePrefix,frameNameStartIndex,frameNameEndIndex,frameNameExt);

console.log(imagePaths)

// Create gallery item elements for each image
imagePaths.forEach((imagePath, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.style.animationDelay = `${index * 0.2}s`;

    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = `Image ${index + 1}`;

    galleryItem.appendChild(image);
    galleryContainer.appendChild(galleryItem);
});


function getImageNames(prefix ,startIndex , endIndex,ext){
  const imageNames = [];

  for(let i=startIndex;i<=endIndex;i++){
     imageNames.push(`./${prefix}${i}.${ext}`)
  }

  return imageNames;
}
