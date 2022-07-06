function burger() {
    const screenWidth = window.screen.width;

    if(screenWidth > 600) {
        let burgerWrapper = document.querySelector(".header-item__burger-wrapper");
        let listMenu = document.querySelector(".header-item__list");
    
        burgerWrapper.addEventListener("click", () => {
            listMenu.classList.toggle("header-item__list_active");
            burgerWrapper.style.pointerEvents = "none";
            
            //if we don`t do it we will get bags with menu
            setTimeout(() => {
                burgerWrapper.style.pointerEvents = "";
            }, 1500);
        });
    }
}

export default burger;