// Fonctionnalité 1
document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("footer");
  let count = 0;
  
  footer.addEventListener("click", function() {
    count++;
    console.log("clic numéro " + count);
  });
});

// Fonctionnalité 2
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerBtn = document.querySelector(".navbar-toggler");
  const navbarHeader = document.querySelector("#navbarHeader");
  
  hamburgerBtn.addEventListener("click", function() {
    navbarHeader.classList.toggle("collapse");
  });
});

// Fonctionnalité 3
document.addEventListener("DOMContentLoaded", function() {
  const firstCard = document.querySelector(".card");
  console.log(firstCard);
  
  const editButton = firstCard.querySelector(".btn-outline-secondary");
  console.log(editButton);
  
  editButton.addEventListener("click", function() {
    const cardText = firstCard.querySelector(".card-text");
    cardText.style.color = "red";
  });
});

// Fonctionnalité 4
document.addEventListener("DOMContentLoaded", function() {
  const secondCard = document.querySelectorAll(".card")[1];
  console.log(secondCard);
  
  const editButton = secondCard.querySelector(".btn-outline-secondary");
  console.log(editButton);
  
  editButton.addEventListener("click", function() {
    const cardText = secondCard.querySelector(".card-text");
    
    if (cardText.style.color === "green") {
      cardText.style.color = "";
    } else {
      cardText.style.color = "green";
    }
  });
});

// Fonctionnalité 5
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector("header");

  navbar.addEventListener("dblclick", function() {
    const link = document.querySelector("link[href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css']");
    
    if (link.disabled) {
      link.disabled = false;
    } else {
      link.disabled = true;
    }
  });
});

// Fonctionnalité 6
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    const viewButton = card.querySelector(".btn-success");
    const cardImage = card.querySelector(".card-img-top");

    viewButton.addEventListener("mouseover", function() {
      cardImage.style.transform = "scale(0.8)";
      cardImage.style.transition = "transform 0.3s ease";
      cardImage.style.width = "20%";
      cardImage.style.objectFit = "cover";
      cardImage.style.overflow = "hidden";
      cardImage.style.margin = "0 auto";
    });

    viewButton.addEventListener("mouseout", function() {
      cardImage.style.transform = "";
      cardImage.style.transition = "";
      cardImage.style.width = "";
      cardImage.style.objectFit = "";
      cardImage.style.overflow = "";
      cardImage.style.margin = "";
    });
  });
});

// Fonctionnalité 7 et 8
document.addEventListener("DOMContentLoaded", function() {
  const nextButton = document.querySelector(".btn-secondary");
  const cardsContainer = document.querySelector(".album .row");

  nextButton.addEventListener("click", function() {
    const firstCard = cardsContainer.firstElementChild;
    cardsContainer.appendChild(firstCard);
  });

  const previousButton = document.querySelector(".btn-primary");

  previousButton.addEventListener("click", function(event) {
    event.preventDefault();
    const lastCard = cardsContainer.lastElementChild;
    cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
  });
});

// Fonctionnalité 9
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector(".navbar-brand");

  logo.addEventListener("keypress", function(event) {
    const body = document.querySelector("body");
    const key = event.key;

    body.classList.remove("col-4", "offset-md-4", "offset-md-8");

    if (key === "a") {
      body.classList.add("col-4");
      body.classList.add("offset-md-0");
    } else if (key === "y") {
      body.classList.add("col-4");
      body.classList.add("offset-md-4");
    } else if (key === "p") {
      body.classList.add("col-4");
      body.classList.add("offset-md-8");
    } else if (key === "b") {
      // Do nothing, keep the default layout
    }
  });
});

