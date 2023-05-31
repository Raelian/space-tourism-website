const btn1 = document.querySelector(".btns_btn1");
const btn2 = document.querySelector(".btns_btn2");
const btn3 = document.querySelector(".btns_btn3");
const btn4 = document.querySelector(".btns_btn4");
const commanderImage = document.querySelector(".content_commanderimage");
const missionSpecialist = document.querySelector(".content_missionspecialist");
const pilot = document.querySelector(".content_pilot");
const flightEngineer = document.querySelector(".content_flightengineer");
const title1 = document.querySelector(".buttons_title1");
const title2 = document.querySelector(".buttons_title2");
const title3 = document.querySelector(".buttons_title3");
const title4 = document.querySelector(".buttons_title4");
const subtitle1 = document.querySelector(".buttons_subtitle1");
const subtitle2 = document.querySelector(".buttons_subtitle2");
const subtitle3 = document.querySelector(".buttons_subtitle3");
const subtitle4 = document.querySelector(".buttons_subtitle4");
const paragraph1 = document.querySelector(".buttons_paragraf1");
const paragraph2 = document.querySelector(".buttons_paragraf2");
const paragraph3 = document.querySelector(".buttons_paragraf3");
const paragraph4 = document.querySelector(".buttons_paragraf4");
let number = 1;

const removeActiveBtn = (number) => {
  if (number === 1) {
    btn1.style.backgroundColor = 'transparent';
  } else if (number === 2) {
    btn2.style.backgroundColor = 'transparent';
  } else if (number === 3) {
    btn3.style.backgroundColor = 'transparent';
  } else if (number === 4) {
    btn4.style.backgroundColor = 'transparent';
  }
}

const addActiveBtn = (number) => {
  if (number === 1) {
    btn1.style.backgroundColor = 'white';
  } else if (number === 2) {
    btn2.style.backgroundColor = 'white';
  } else if (number === 3) {
    btn3.style.backgroundColor = 'white';
  } else if (number === 4) {
    btn4.style.backgroundColor = 'white';
  }
}

const hideImage = (number) => {
  if (number === 1) {
    commanderImage.style.display = 'none';
  } else if (number === 2) {
    missionSpecialist.style.display = 'none';
  } else if (number === 3) {
    pilot.style.display = 'none';
  } else if (number === 4) {
    flightEngineer.style.display = 'none';
  }
}

const revealImage = (number) => {
    if(number === 1) {
        commanderImage.style.display = 'block';
    } else if (number === 2) {
        missionSpecialist.style.display = 'block';
    } else if (number === 3) {
        pilot.style.display = 'block';
    } else if (number === 4) {
        flightEngineer.style.display = 'block';
    }
}

window.addEventListener("resize", function () {
  changeImage(number);
});

const pageHideText = () => {
  title2.style.display = 'none';
  subtitle2.style.display = 'none';
  paragraph2.style.display = 'none';
  missionSpecialist.style.display = 'none';
  title3.style.display = 'none';
  subtitle3.style.display = 'none';
  paragraph3.style.display = 'none';
  pilot.style.display = 'none';
  title4.style.display = 'none';
  subtitle4.style.display = 'none';
  paragraph4.style.display = 'none';
  flightEngineer.style.display = 'none';
}

const revealText = (number) => {
  if (number === 1) {
    title1.style.display = 'block';
    subtitle1.style.display = 'block';
    paragraph1.style.display = 'block';
    commanderImage.style.display = 'block';
  } else if (number === 2) {
    title2.style.display = 'block';
    subtitle2.style.display = 'block';
    paragraph2.style.display = 'block';
    missionSpecialist.style.display = 'block';
  } else if (number === 3) {
    title3.style.display = 'block';
    subtitle3.style.display = 'block';
    paragraph3.style.display = 'block';
    pilot.style.display = 'block';
  } else if (number === 4) {
    title4.style.display = 'block';
    subtitle4.style.display = 'block';
    paragraph4.style.display = 'block';
    flightEngineer.style.display = 'block';
  }
}

const hideText = (number) => {
  if (number === 1) {
    title1.style.display = 'none';
    subtitle1.style.display = 'none';
    paragraph1.style.display = 'none';
    commanderImage.style.display = 'none';
  } else if (number === 2) {
    title2.style.display = 'none';
    subtitle2.style.display = 'none';
    paragraph2.style.display = 'none';
    missionSpecialist.style.display = 'none';
  } else if (number === 3) {
    title3.style.display = 'none';
    subtitle3.style.display = 'none';
    paragraph3.style.display = 'none';
    pilot.style.display = 'none';
  } else if (number === 4) {
    title4.style.display = 'none';
    subtitle4.style.display = 'none';
    paragraph4.style.display = 'none';
    flightEngineer.style.display = 'none';
  }
}

const setNumber = (event, number) => {
  if (event.target.matches(".btns_btn1")) number = 1;
  else if (event.target.matches(".btns_btn2")) number = 2;
  else if (event.target.matches(".btns_btn3")) number = 3;
  else if (event.target.matches(".btns_btn4")) number = 4;
  return number;
}

window.addEventListener('click', function (event) {
  removeActiveBtn(number);
  hideText(number);
  hideImage(number);
  number = setNumber(event, number);
  revealText(number);
  addActiveBtn(number);
  revealImage(number);
});

const hideInactive = () => {
  btn2.style.backgroundColor = 'transparent';
  btn3.style.backgroundColor = 'transparent';
  btn4.style.backgroundColor = 'transparent';
}
