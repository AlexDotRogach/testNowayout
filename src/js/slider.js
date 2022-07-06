function slider() {
    let sliderCards = document.querySelector(".games-main__cards-wrapper");
    let sliderWrapper = document.querySelector(".games-main__cards");
    let sliderElements = document.querySelectorAll(".games-main__card");
    let btnForward = document.querySelector(".games-main__forward-btn");
    let btnBack = document.querySelector(".games-main__back-btn");
    let offset = 0;
    let widthCard = "";
    let widthWrap = "";
    let widthBlind = "";
    let sumWidth = 0;
    const screenWidth = window.screen.width;

    // size of slider
    for(let i = 0; sliderElements.length > i; i++) {
        widthCard = window.getComputedStyle(sliderElements[i], null).getPropertyValue("width")
        sumWidth += +widthCard.substring(0, widthCard.length - 2) + 10; // sum all of elements
    }

    sliderWrapper.style.width = sumWidth + "px"
    
    // size of wrap
    widthWrap = window.getComputedStyle(sliderCards, null).getPropertyValue("width")
    widthWrap = widthWrap.substring(0, widthWrap.length - 2);

    // size of blind zone
    widthBlind = sumWidth - widthWrap;

    // if elements less than need for slider we hide btn
    if(sumWidth < widthWrap) {
        btnForward.style.opacity = 0
        btnBack.style.opacity = 0
    }

    btnForward.addEventListener("click", () => {
        offset -= 338

        if(Math.abs(offset) + +widthWrap > sumWidth) {
            offset = 0
        }

        sliderWrapper.style.left = offset + "px"
    });

    btnBack.addEventListener("click", () => {
        offset += 338

        if(offset > 0) {
            offset = -widthBlind
        }

        sliderWrapper.style.left = offset + "px"
    });

    if(screenWidth < 600) {
        // for mobile i add heigh for main block
        let gamesSection = document.querySelector(".games");
        let countElement = 0;
        let offsetElement = 50;

        for(let i = 0; sliderElements.length > i; i++) {
            countElement++;
        }

        offsetElement *= countElement

        gamesSection.style.height = countElement * 781 + offsetElement + "px";
    }
}
export default slider;