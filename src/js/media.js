function media() {
    const screenWidth = window.screen.width;

    // startPage

    const btnText = document.querySelector(".start-page__btn");
    const textEscape = document.querySelector(".start-page__main-text");

    if(screenWidth < 765) {
        btnText.textContent = "Start your game";
        textEscape.innerHTML = `
        №1<br> Escape <br>rooms<br> in Vienna
        `
    }

    if(screenWidth < 600) {
        let burgerWrapper = document.querySelector(".header-item__burger-wrapper");
        let mobileWrap = document.querySelector(".header-item__list_mb");
    
        burgerWrapper.addEventListener("click", () => {
            mobileWrap.classList.toggle("header-item__list_active_mb");
            burgerWrapper.style.pointerEvents = "none";
            
            //if we don`t do it we will get bags with menu
            setTimeout(() => {
                burgerWrapper.style.pointerEvents = "";
            }, 1500);
        });
    }
}

export default media;