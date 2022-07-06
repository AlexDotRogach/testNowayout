function city() {
    let yesBtn = document.querySelector(".header-popup__btn-wrap-yes");
    let anotherBtn = document.querySelector(".header-popup__btn-wrap-another");
    let allPopup = document.querySelectorAll(".header-popup");
    let closeBtn = document.querySelector(".header-popup__choose-close");
    let arrowCity = document.querySelector(".header-item__city-arrow");
    let chooseCity = document.querySelectorAll(".header-popup__item-text");
    let city = "";
    let body = document.querySelector("body")
    let startScreen = document.querySelector(".start-page");
    const screenWidth = window.screen.width
    

    // if(screenWidth > 765) {
    //     setTimeout(() => {
    //         allPopup[0].classList.toggle("header-popup_active");
    //     }, 1500);
    // } else {
    //     setTimeout(() => {
    //         allPopup[1].classList.toggle("header-popup_active");
    //         startScreen.style.opacity = '0.6'
    //         body.style.overflowY = "hidden"
    //     }, 1500);
    // }

    yesBtn.addEventListener("click", () => {
        city = "Vienna"
        allPopup[0].classList.toggle("header-popup_active");
    });

    anotherBtn.addEventListener("click", () => {
        allPopup[0].classList.toggle("header-popup_active");
        allPopup[1].classList.toggle("header-popup_active");

        closeBtn.addEventListener("click", () => {
            allPopup[1].classList.toggle("header-popup_active");
        });
    });

    //arrow
    arrowCity.addEventListener("click", () => {
        allPopup[1].classList.toggle("header-popup_active");
    });

    //choose city
    chooseCity.forEach(item => {
        item.addEventListener("click", () => {
            allPopup[1].classList.toggle("header-popup_active");
            city = item.children[1].textContent;
            arrowCity.previousElementSibling.textContent = city;
            startScreen.style.opacity = '1'
            body.style.overflowY = "scroll"
        });
    });
}

export default city;