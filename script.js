// Selecting elements from the DOM
const logo = document.querySelector(".logo");
const animatedBtn = document.querySelector(".animated-btn");
const backgroundContainer = document.querySelector(".background-container");
const formContainer = document.querySelector(".user-form-container");
const closeFormContainer = document.querySelector(".top-right");
const donateBtn = document.querySelectorAll(".donate-btn");

// Event listener to close the form container when the close button is clicked
closeFormContainer.addEventListener("click", ()=>{
    formContainer.style.display = "none";
})

// Function to animate the logo text
const logoAnime = () =>{
    const logotxt = "ARYA Funds"
    logo.innerText = "";
    let index = 0;
    
  function appendNextCharacter() {
    if (index < logotxt.length) {
      logo.append(logotxt.charAt(index));
      index++;
      setTimeout(appendNextCharacter, 300); // Calls itself after 300ms
    }
  }

  appendNextCharacter();// Initiates the logo animation
}
logoAnime(); // Calls the logo animation function


// Function to change text on button click
function changeText(){
    animatedBtn.innerText ="FEEL GOOD TO DONATE";
}

// Function to reset text on button click
function resetText(){
    animatedBtn.innerText = "CLICK HERE";
}

// Event listener for a button click to generate heart animation
animatedBtn.addEventListener("click",()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = '❤️';
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
  
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
  
    backgroundContainer.appendChild(heart);
    // Removes the heart element after 2 seconds
    setTimeout(()=>{
        heart.remove();

    }, 2000);
});

// Event listeners for donate buttons to display the form container
donateBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        formContainer.style.display = "flex";
    })
})