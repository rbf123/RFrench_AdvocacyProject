/* // beginning of javascript for my interactive map showing info when hovering 
// Get the SVG map and the info box element
const svgMap = document.getElementById('usa-map');
const infoBox = document.getElementById('info-box');

// Add event listeners to the state paths
const statePaths = svgMap.querySelectorAll('path');
statePaths.forEach((path) => {
  path.addEventListener('mouseover', (event) => {
    const stateName = event.target.dataset.name;
    updateInfoBox(stateName);
    infoBox.style.display = 'block';
  });

  path.addEventListener('mouseout', () => {
    infoBox.style.display = 'none';
  });
});

// Function to update the content of the info box
function updateInfoBox(stateName) {
  // Add actual state information
  const stateInfo = {
    Texas: 'Texas is the second-largest state in the United States by both area and population.',
    California: 'California is the most populous state in the United States and the third-largest by area.',
    // Add information for other states
  };

  infoBox.innerHTML = stateInfo[stateName] || 'No information available for this state.';
}
 //end of javascript for interactive map showing info when hovering */

//beginning of javascript for interactive map to show info but box always visible
// Function to update the info box with state information
function updateInfoBox(stateName) {
  const infoBox = document.getElementById('info-box');
  infoBox.textContent = stateName;
}

// Function to clear the info box
function clearInfoBox() {
  const infoBox = document.getElementById('info-box');
  infoBox.textContent = '';
}

// Add event listeners to each state path in the SVG
document.querySelectorAll('#usa-map path').forEach(function(path) {
  // When mouse enters a state path
  path.addEventListener('mouseenter', function() {
    // Get the state name from the data-name attribute
    const stateName = this.getAttribute('data-name');
    updateInfoBox(stateName);
  });

  // When mouse leaves a state path
  path.addEventListener('mouseleave', function() {
    clearInfoBox();
  });
});
//end of javascript for interactive map to show info but box always visible 