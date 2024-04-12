const submitButton = document.getElementById("submitBtn");

const submit = (event) => {
  event.preventDefault();
  const inputbx = document.getElementsByClassName("inputbx");

  if (
    inputbx[0].value != "" &&
    inputbx[1].value != "" &&
    inputbx[2].value != "" &&
    inputbx[3].value != ""
  ) {
    const fname = inputbx[0].value;
    const desc = inputbx[1].value;
    const url = inputbx[2].value;
    const rank = inputbx[3].value;

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

    const btn = card.querySelector('.delete-btn'); 
    btn.addEventListener("click", function(event) {
      alert('One food deleted');
      card.remove(); 
    });

    styleImage(card.querySelector('img'));
    
  } else {
    alert("Please fill out all inputs");
    return;
  }
};

submitButton.addEventListener("click", submit);

function styleImage(img) {
  img.style.height = '50px';
  img.style.width = '50px';
}

const container = document.querySelector('.container');

container.style.margin = 'auto';
container.style.width = '50%';
container.style.border = '3px solid green';
container.style.padding = '10px';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.style.width = '100%';
});
