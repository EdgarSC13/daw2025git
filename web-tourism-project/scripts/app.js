// This file contains the JavaScript code for the web tourism project.
// It may include functions for interactivity, such as handling user events, fetching data, or manipulating the DOM.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to our web tourism project!';
    document.body.appendChild(welcomeMessage);

    // Example function to handle a button click
    const button = document.createElement('button');
    button.textContent = 'Explore More';
    button.addEventListener('click', () => {
        alert('Exploring more about our tourism services!');
    });
    document.body.appendChild(button);
});