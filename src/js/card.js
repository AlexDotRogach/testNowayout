function card() {
    class CardOfGames {
        constructor(imgPath, type, title, time, lvl, people, describe) {
            this.imgPath = imgPath;
            this.type = type;
            this.title = title;
            this.time = time;
            this.lvl = lvl;
            this.people = people;
            this.describe = describe;
        }

        createCard() {
            let wrapperCards = document.querySelector(".games-main__cards");
            
            wrapperCards.insertAdjacentHTML('beforeend', `
            <div class="games-main__card">
                <img src="${this.imgPath}" class="games-main__card-image" alt="card_image">
                <button class="games-main__card-btn">${this.type}</button>
                <div class="games-main__card-title">${this.title}</div>
                <div class="games-main__info-card">
                    <div class="games-main__card-block">
                        <div class="games-main__card-time"><img src="icons/clock.svg"><span>${this.time}</span></div>
                        <div class="games-main__card-complexity"><img src="icons/key.svg"><span>${this.lvl}</span></div>
                        <div class="games-main__card-people"><img src="icons/people.svg"><span>${this.people}</span></div>
                    </div>
                    <div class="games-main__describe">
                        ${this.describe}
                    </div>
                    <div class="games-main__info-btnWrap">
                        <button class="games-main__info-btn">Select game</button>
                    </div>
                </div>
            </div>
            `);
        }
      }

    let missionBelvedere = new CardOfGames(
        "img/Mask-Group.svg",
        "Adventure/Mystery", 
        "Mission Belvedere",
        "60 min",
        "Difficult",
        "2-6",
        "Nehmt an dem Raub des Jahrhunderts teil! Macht mit und versucht, Gustav Klimts 'Der Kuss aus Österreichs sicherstem Museum zu stehlen.'"
    );

    let schoolOfMagic = new CardOfGames(
        "img/schoolOfMagic.png",
        "Adventure/Fantasy", 
        "School of Magic",
        "60 min",
        "Difficult",
        "2-6",
        "Nehmt an dem Raub des Jahrhunderts teil! Macht mit und versucht, Gustav Klimts 'Der Kuss aus Österreichs sicherstem Museum zu stehlen.'"
    );

    let theUnknown = new CardOfGames(
        "img/TheUnknown.png",
        "Horror with live actor", 
        "The Unknown",
        "60 min",
        "Difficult",
        "2-6",
        "Rette die kleine Sandy, sie wurde von einem Dämon in die Kanalisation der Stadt verschleppt. Werdet zum Helden oder bleibt in der Gewalt des Unbekannten."
    );

    let theNun = new CardOfGames(
        "img/TheNun.png",
        "Horror with live actor", 
        "The Nun",
        "60 min",
        "Difficult",
        "2-6",
        "Rette die kleine Sandy, sie wurde von einem Dämon in die Kanalisation der Stadt verschleppt. Werdet zum Helden oder bleibt in der Gewalt des Unbekannten."
    );

    missionBelvedere.createCard();
    missionBelvedere.createCard();
    schoolOfMagic.createCard();
    theUnknown.createCard();
    theNun.createCard();
    theNun.createCard();
    theNun.createCard();
    theNun.createCard();
    theNun.createCard();
    theNun.createCard();
}

export default card;

// img/Mask-Group.svg