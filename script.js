// ======================= Changing <h1>'s Text =============================

let h1Element = document.getElementsByTagName("h1")[0]; // Selecting the <h1> element

function askUserName() { // Defining a function called askUserName
    h1Element.textContent = prompt("What is your name?"); // Changing <h1> element's text when clicked
}

h1Element.addEventListener("click", askUserName); // adding an event listener to the <h1> element to detect when it is clicked. When it is clicked, the event listener will run the 'askUserName' function





// ======================= Changing <html>'s Background Color =============================

let buttonElement = document.getElementsByTagName("button")[0]; // Selecting the <button> element

function changeBackgroundColor() { // Defining a function called changeBackgroundColor
    let redValue = Math.floor(Math.random() * 256); // Generating a random value from 0 - 255
    let greenValue = Math.floor(Math.random() * 256); // Generating a random value from 0 - 255
    let blueValue = Math.floor(Math.random() * 256); // Generating a random value from 0 - 255
    let randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`; // using the above values to create a random color
    document.getElementsByTagName("html")[0].style.backgroundColor = randomColor; // Assigning the generated color to the backgroundColor property of the <html> element
}

buttonElement.addEventListener("click", changeBackgroundColor); // adding an event listener to the h1 element to detect when it is clicked. When it is clicked, it will run the 'changeBackgroundColor' function





// ======================= Changing <img>'s Element's src =============================

let imageElement = document.getElementsByTagName("img")[0]; // Selecting the <img> element

let selectedImageIndex = 0; // Keeping track of which image is being displayed
let imageUrls = ['https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
    'https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg'
] // Defining image Urls

function changeImage() { // Defining a function that changes the <img> element's src attribute
    if (selectedImageIndex == 0) { // Checking if first image is currently selected
        selectedImageIndex = 1; // If so, change the selection to the second image
    }
    else { // Else, the second image is currently selected
        selectedImageIndex = 0; // Change the selection to the first image
    }
    document.getElementsByTagName("img")[0].src = imageUrls[selectedImageIndex]; // Changing the displayed image
}

imageElement.addEventListener("click", changeImage); // adding an event listener to the <img> element to detect when it is clicked. When it is clicked, it will run the 'changeImage' function