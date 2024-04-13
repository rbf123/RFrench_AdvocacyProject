// Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");


// toggle DarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

};


// Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);


/* test
// Query for button with an id "sign-now-button"
const signNowButton = document.getElementById('sign-now-button');
let count = 3; // Initial count of signatures



// Function to add a signature
const addSignature = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');

  const signatureElement = document.createElement('p');
  signatureElement.classList.add('signature');

  const signatureText = `🖊️ ${nameInput.value} from ${hometownInput.value} supports this.`;
  signatureElement.textContent = signatureText;

  const signaturesContainer = document.querySelector('.signatures');
  signaturesContainer.appendChild(signatureElement);

  // Update the signature count
  const counterElement = document.getElementById('counter');
  counterElement.remove(); // Remove the old counter

  count++; // Increment the count
  const newCounterElement = document.createElement('p');
  newCounterElement.id = 'counter';
  newCounterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesContainer.appendChild(newCounterElement);

  
  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
  commentsInput.value = '';
};

//removing this because of validation signNowButton.addEventListener('click', addSignature); 



 // Function to validate the form
  const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  const email = document.getElementById('email'); // Define the email variable
  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // Validate the value of each input
      if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }

    // Step 5: Add specific validation for the email address input if it does not contain a .com address.

  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  } else {
    email.classList.remove('error');
    }
  
  if (!containsErrors) {
    // If no errors, add the signature
  addSignature();
    // Loop through all input elements again to clear the form
  //for (let i = 0; i < petitionInputs.length; i++) {
   // petitionInputs[i].value = ""; // Clear each input field
    //}
  }
};
    // Reset the containsErrors boolean for the next form submission
   // containsErrors = false;
  //}

// Attach the event listener to the form's submit event
signNowButton.addEventListener('click', validateForm); 

*/
/*
// Query for button with a class "submit-btn"
const signNowButton = document.querySelector('.submit-btn');
let count = 3; // Initial count of signatures

// Function to add a signature
const addSignature = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');

  const signatureElement = document.createElement('p');
  signatureElement.classList.add('signature');

  const signatureText = `🖊️ ${nameInput.value} from ${hometownInput.value} supports this.`;
  signatureElement.textContent = signatureText;

  const signaturesContainer = document.querySelector('.signatures');
  signaturesContainer.appendChild(signatureElement);

  // Update the signature count
  const counterElement = document.getElementById('counter');
  counterElement.remove(); // Remove the old counter

  count++; // Increment the count
  const newCounterElement = document.createElement('p');
  newCounterElement.id = 'counter';
  newCounterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesContainer.appendChild(newCounterElement);

  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
  commentsInput.value = '';
};

// Function to validate the form
const validateForm = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  const email = document.getElementById('email');

  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Add specific validation for the email address input if it does not contain a .com address
  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  } else {
    email.classList.remove('error');
  }

  if (!containsErrors) {
    // If no errors, add the signature
    addSignature(event);
  }
};

// Attach the event listener to the form's submit event
signNowButton.addEventListener('click', validateForm);
*/

// Query for button with a class "submit-btn"
const signNowButton = document.querySelector('.submit-btn');
let count = 3; // Initial count of signatures

// Function to validate the form and add a signature if validation passes
const validateAndAddSignature = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById("sign-petition");
  const nameInput = form.elements['name'];
  const hometownInput = form.elements['hometown'];
  const emailInput = form.elements['email'];
  const commentsInput = form.elements['comments'];
  let containsErrors = false;

  // Validate each input field
  [nameInput, hometownInput, emailInput, commentsInput].forEach(input => {
    if (input.value.length < 2 || (input === emailInput && !input.value.includes('.com'))) {
      input.classList.add('error');
      containsErrors = true;
    } else {
      input.classList.remove('error');
    }
  });

  if (!containsErrors) {
    // Add the signature
    const signatureElement = document.createElement('p');
    signatureElement.classList.add('signature');
    signatureElement.textContent = `🖊️ ${nameInput.value} from ${hometownInput.value} supports this.`;

    const signaturesContainer = document.querySelector('.signatures');
    signaturesContainer.appendChild(signatureElement);

    // Update the signature count
    count++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Reset form fields
    form.reset();
  }
};

// Attach the event listener to the button's click event
signNowButton.addEventListener('click', validateAndAddSignature);


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
