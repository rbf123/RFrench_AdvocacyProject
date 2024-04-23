// Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");


// toggle DarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

};


// Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);





/* unit 8 

// Query for button with a class "submit-btn"
const signNowButton = document.querySelector('.submit-btn');
let count = 3; // Initial count of signatures

// Function to validate the form and add a signature if validation passes
const validateAndAddSignature = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById("sign-petition");
  const petitionInputs = form.elements;

  // Create a person object with properties from the form inputs
  const person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
    comments: petitionInputs[3].value
  };

  let containsErrors = false;

  // Validate each property of the person object
  for (const prop in person) {
    if (person[prop].length < 2 || (prop === 'email' && !person[prop].includes('@'))) {
      petitionInputs[Object.keys(person).indexOf(prop)].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[Object.keys(person).indexOf(prop)].classList.remove('error');
    }
  }

  if (!containsErrors) {
    // Add the signature
    addSignature(person);

    // Update the signature count
    count++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Reset form fields
    form.reset();

    // Show the modal
    toggleModal(person);
  }
};

// Function to add a signature
const addSignature = (person) => {
  const signatureElement = document.createElement('p');
  signatureElement.classList.add('signature');
  signatureElement.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesContainer = document.querySelector('.signatures');
  signaturesContainer.appendChild(signatureElement);
};

 Function to toggle the modal
const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');

  modal.style.display = 'flex';
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;

  setTimeout(() => {
    modal.style.display = 'none';
  }, 4000); // Hide the modal after 4 seconds
};  

// Attach the event listener to the button's click event
signNowButton.addEventListener('click', validateAndAddSignature); 

unit8 */

// Create a new variable outside of any functions called scaleFactor and set it to 1
let scaleFactor = 1;

// Create another variable outside any function called modalImage that selects the image within the modal
const modalImage = document.querySelector('.modal-content img');

// Create a new function called scaleImage that takes no arguments
const scaleImage = () => {
  // Within the scaleImage function, it will first toggle the image size between a factor of 1 and 0.8.
  scaleFactor = scaleFactor === 1 ? 0.8 : 1; // Using the ternary operator for conciseness

  // Next, the function applies that scaleFactor to the image:
  modalImage.style.transform = `scale(${scaleFactor})`;
};

// Function to close the modal
const closeModal = () => {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = 'none';
};

// Function to toggle the modal
const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');

  modal.style.display = 'flex';
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;

  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId); // Stop the animation
  }, 4000); // Hide the modal after 4 seconds
};

// Query for button with a class "submit-btn"
const signNowButton = document.querySelector('.submit-btn');
let count = 3; // Initial count of signatures

// Function to validate the form and add a signature if validation passes
const validateAndAddSignature = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById("sign-petition");
  const petitionInputs = form.elements;

  // Create a person object with properties from the form inputs
  const person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
    comments: petitionInputs[3].value
  };

  let containsErrors = false;

  // Validate each property of the person object
  for (const prop in person) {
    if (person[prop].length < 2 || (prop === 'email' && !person[prop].includes('@'))) {
      petitionInputs[Object.keys(person).indexOf(prop)].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[Object.keys(person).indexOf(prop)].classList.remove('error');
    }
  }

  if (!containsErrors) {
    // Add the signature
    addSignature(person);

    // Update the signature count
    count++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Reset form fields
    form.reset();

    // Show the modal
    toggleModal(person);
  }
};

// Function to add a signature
const addSignature = (person) => {
  const signatureElement = document.createElement('p');
  signatureElement.classList.add('signature');
  signatureElement.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesContainer = document.querySelector('.signatures');
  signaturesContainer.appendChild(signatureElement);
};

// Attach the event listener to the button's click event
signNowButton.addEventListener('click', validateAndAddSignature);

// Select the close modal button and add an event listener
const closeModalBtn = document.getElementById('close-modal-btn');
closeModalBtn.addEventListener('click', closeModal);





/* adding reduce motion */
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
  // Define reduced motion properties
  reducedTransitionDuration: '0s', // Shorter duration for reduced motion
  reducedTransitionTimingFunction: 'ease-out' // A timing function that might be more comfortable for reduced motion
};

let revealableContainers = document.querySelectorAll('.revealable');
let reduceMotionBtn = document.getElementById('reduceMotionBtn');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

function reduceMotion() {
  // Use the reduced motion properties
  animation.transitionDuration = animation.reducedTransitionDuration;
  animation.transitionTimingFunction = animation.reducedTransitionTimingFunction;

  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
}

reduceMotionBtn.addEventListener('click', reduceMotion);

window.addEventListener('scroll', reveal);
//end of reducemotion


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 