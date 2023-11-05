const imagesSrc = {
  0: "./img/cards/1.png",
  1: "./img/cards/2.png",
  2: "./img/cards/3.png",
  3: "./img/cards/4.png",
  4: "./img/cards/5.png",
};

getPosts();

const burgerElems = document.querySelectorAll(".burger");
const cardsContainer = document.querySelector(".content__cards");
const contentButton = document.querySelector(".content__button");

if (burgerElems) {
  burgerElems.forEach((elem) =>
    elem.addEventListener("click", (e) => {
      handleBurgerClick(e);
    })
  );
}

function handleBurgerClick(e) {
  const target = e.target.parentElement;

  if (target.classList.contains("burger-mobile")) {
    const mobileNavElement = document.querySelector(".nav-mobile");
    if (mobileNavElement.classList.contains("hidden")) {
      mobileNavElement.classList.remove("hidden");
    } else {
      mobileNavElement.classList.add("hidden");
    }
  }

  if (target.classList.contains("burger-tablet")) {
    const tabletNavElement = document.querySelector(".nav-tablet");
    if (tabletNavElement.classList.contains("hidden")) {
      tabletNavElement.classList.remove("hidden");
    } else {
      tabletNavElement.classList.add("hidden");
    }
  }
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка загрузки постов");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    })
    .then((responseData) => {
      renderCards(responseData);

      contentButton.addEventListener("click", () => {
        renderCards(responseData);
      });
    });
}

function renderCards(cardsData) {
  const maxCount = 30;
  const cardsCount = cardsContainer.childElementCount;
  if (cardsCount < maxCount) {
    let counter = cardsCount + 5;
    const cards = [];
    for (let i = 0; i < counter; i++) {
      let randomImgIndex = Math.floor(Math.random() * 5);
      cards.push(
        `<div class="content__card card">
            <img class="card__img" src="${imagesSrc[randomImgIndex]}" alt="">
            <div class="card__content">
                <h3 class="card__heading">${cardsData[i].title}</h2>
                <h4 class="card__subheading">How to increase your productivity with a Music</h4>
                <p class="card__text">
                    ${cardsData[i].body}
                </p>
                <p class="card__posted_data">Posted by <span class="card__posted_data-bold">Eugenia</span>, on July  24, 2019</p>
                <div class="card__button">Continue reading</div>
            </div>
        </div>`
      );
    }

    cardsContainer.innerHTML = cards.join("");
  } else {
    contentButton.classList.add("hidden");
  }
}
