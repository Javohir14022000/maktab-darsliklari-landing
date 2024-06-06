const galleryContainer = document.querySelector(".gallery-container");

const frameNamePrefix = "Frame ";
const frameNameStartIndex = 1;
const frameNameEndIndex = 20;
const frameNameExt = "png";

const cardItems = [];

// Get the image file paths from the directory
const imagePaths = getImageNames(
  frameNamePrefix,
  frameNameStartIndex,
  frameNameEndIndex,
  frameNameExt
);

const Maktab_Darsliklari_Kitoblar = {
  image: "./images/maktab_darslikalari.png",
  link: "https://play.google.com/store/apps/details?id=dev.mobile.books"
}

const matem1To4 = {
  image: "./images/matematika-1-4.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.matematika1_4"
}

const matem5To11 = {
  image: "./images/matem-5-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.matematika"
}

const onatili5To11 = {
  image: "./images/onatili-5-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.onatili5_11"
}

const jahonTarixi5To11 = {
  image: "./images/jaxon_tarixi-5-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.jahontarixi7_11"
}

const ozTarixi5To11= {
  image: "./images/oz-tarix-5-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.ozbekistontarixi7_11"
}

const tarbiya1To11 = {
  image: "./images/tarbiya-1-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.tarbiya5_11"
}

const fizika6To11 = {
  image: "./images/fizika-6-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.fizika6_11"
}

const ingliz1To4 = {
  image: "./images/ingliz-1-4.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.ingliztili1_4"
}

const ingliz5To11 = {
  image: "./images/ingliz-5-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.ingliztili5_11"
}

const kimyo7To11 = {
  image: "./images/kimyo-7-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.kimyo7_11"
}

const texnalogiya1To9 = {
  image: "./images/texnalogiya-1-9.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.texnologiya5_9"
}

const darslik5 = {
  image: "./images/darslik-5.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari7_sinf"
}

const darslik6 = {
  image: "./images/darslik-6.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari6_sinf"
}

const darslik7 = {
  image: "./images/darslik-7.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari7_sinf"
}

const darslik8 = {
  image: "./images/darslik-8.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari8_sinf"
}

const darslik9 = {
  image: "./images/darslik-9.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari9_sinf"
}

const darslik10 = {
  image: "./images/darslik-10.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari10_sinf"
}

const darslik11 = {
  image: "./images/darslik-11.png",
  link: "https://play.google.com/store/apps/details?id=com.mobiler.maktabdarsliklari11_sinf"
}




cardItems.push(Maktab_Darsliklari_Kitoblar);
cardItems.push(matem1To4);
cardItems.push(matem5To11);
cardItems.push(onatili5To11);
cardItems.push(jahonTarixi5To11);
cardItems.push(ozTarixi5To11);
cardItems.push(tarbiya1To11);
cardItems.push(fizika6To11);
cardItems.push(ingliz1To4);
cardItems.push(ingliz5To11);
cardItems.push(kimyo7To11);
cardItems.push(texnalogiya1To9);
cardItems.push(darslik5);
cardItems.push(darslik6);
cardItems.push(darslik7);
cardItems.push(darslik8);
cardItems.push(darslik9);
cardItems.push(darslik10);
cardItems.push(darslik11);

console.log(imagePaths);

// Create gallery item elements for each image
cardItems.forEach((item, index) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  galleryItem.style.animationDelay = `${index * 0.2}s`;

  const link = document.createElement("a");
  link.href = item.link; // Replace with the desired link page
  link.target = "_blank"; // Open the link in a new tab or window

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = `Image ${index + 1}`;

  link.appendChild(image);
  galleryItem.appendChild(link);
  galleryContainer.appendChild(galleryItem);
});

function getImageNames(prefix, startIndex, endIndex, ext) {
  const imageNames = [];

  for (let i = startIndex; i <= endIndex; i++) {
    imageNames.push(`./images/${prefix}${i}.${ext}`);
  }

  return imageNames;
}
