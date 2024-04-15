/*
Ruth Djusthine E. Tenifrancia
UV-3L

a javascript file that utilizes DOM 
functions to make the form functional
*/

//get submit button
const submitButton = document.getElementById("submitBtn");

//function for submit buttin
const submit = (event) => {
  event.preventDefault(); //to prevent refreshing every after submit
  const inputbx = document.getElementsByClassName("inputbx"); //to handle inputboxes

  //validation for empty strings
  if (
    inputbx[0].value != "" &&
    inputbx[1].value != "" &&
    inputbx[2].value != "" &&
    inputbx[3].value != ""
  ) {
    //assigning values to variables
    const fname = inputbx[0].value;
    const desc = inputbx[1].value;
    const url = inputbx[2].value;
    const rank = inputbx[3].value;

    //html for new cards
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.setAttribute("data-rank", rank); 
    card.innerHTML = `
    <img src="${url}" alt="${fname}">
    <h2>${fname}</h2>
    <p>${desc}</p>
    <p class='food-rank'>Rank: ${rank}</p>
    <button class="delete-btn">Delete</button>
    `;
    
    //style card
    card.style.margin = 'auto';
    card.style.width = '50%';
    card.style.border = '3px solid green';
    card.style.padding = '10px';
    
    //arrange cards
    const cards = document.getElementsByClassName("food-card");
    let inserted = false;
    for (let i = 0; i < cards.length; i++) {
      const cardRank = parseInt(cards[i].getAttribute("data-rank"));
      if (parseInt(rank) < cardRank) {
        document.body.insertBefore(card, cards[i]);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      document.body.appendChild(card);
    }    

    //delete btn per card
    const btn = card.querySelector('.delete-btn'); 
    btn.addEventListener("click", function(event) {
      alert('One food deleted');
      card.remove(); 
    });

    //function to change the style for image
    styleImage(card.querySelector('img'));
    
  } else {
    //if did not pass the validation
    alert("Please fill out all inputs");
    return;
  }
};

submitButton.addEventListener("click", submit);

function styleImage(img) {
  //style image size
  // img.style.maxwidth = '100%';
  // img.style.maxheight = '100%';
  img.style.objectFit = 'contain';
}

//css for form
const container = document.querySelector('.container');

//style form
container.style.margin = 'auto';
container.style.width = '50%';
container.style.border = '3px solid green';
container.style.padding = '10px';

//input boxes
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.style.width = '100%';
});
