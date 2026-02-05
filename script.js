// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the milk-and-mocha-bear.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "Are you really sure?"
        // Array of 20 annoying questions
        const annoyingQuestions = [
            "Are you sure you don't want to be my valentine?",
            "Are you really sure?",
            "Are you really really sure??",
            "Are you absolutely, positively sure???",
            "Are you 100% sure, no take-backs?",
            "Are you sure-sure, like beyond all doubt?",
            "Are you really really really sure????",
            "Are you sure you’re not just pretending?",
            "Are you sure you won’t regret this?",
            "Are you sure you’re not secretly saying yes?",
            "Are you sure you’re not hesitating?",
            "Are you sure you’re not just shy?",
            "Are you sure you don’t want to reconsider?",
            "Are you sure you’re not being stubborn?",
            "Are you sure you’re not joking?",
            "Are you sure you’re not changing your mind?",
            "Are you sure you’re not 99% sure instead of 100%?",
            "Are you sure you’re not secretly hoping I’ll ask again?",
            "Are you sure you’re not just testing me?",
            "Are you really, truly, absolutely sure???"
        ];

        // Track current index
        let index = 0;

        // Function to update the element text
        this.updateQuestion();
        document.getElementById('no-button').innerText = 'Yes';
        document.getElementById('yes-button').innerText = 'I do want to be your Valentine!';

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function updateQuestion() {
    const element = document.getElementById("question-title");
    if (element) {
        element.textContent = annoyingQuestions[index];
        index = (index + 1) % annoyingQuestions.length; // loop back to start
    }
}
function flashRainbowColors(callback) {
    var colors = ['#ffffff'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the bear-love.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'bear-love.gif'; // Assuming the cat image is named "bear-love.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the milk-and-mocha-bear.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'milk-and-mocha-bear.gif'; // Assuming the cat-heart image is named "milk-and-mocha-bear.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
