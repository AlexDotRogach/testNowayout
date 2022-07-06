document.addEventListener("DOMContentLoaded", function() {
    const burger = require('./burger').default;
    const floating = require('./floating').default;
    const card = require('./card').default;
    const slider = require('./slider').default;
    const city = require('./city').default;
    const media = require('./media').default;
    
    floating();
    burger();
    card();
    slider();
    city();
    media();

    //footer scroll top
    let topBtn = document.querySelector(".footer-right__wrapper-btn");
    let header = document.querySelector("#header");

    topBtn.addEventListener("click", (e) => {
        e.preventDefault()
        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
});