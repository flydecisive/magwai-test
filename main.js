const burgerElems = document.querySelectorAll(".burger");

if (burgerElems) {
  burgerElems.forEach((elem) =>
    elem.addEventListener("click", (e) => {
      handleEvent(e);
    })
  );
}

function handleEvent(e) {
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
