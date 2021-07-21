const pMoon = 'M15 27.5C15 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15 12.3122 15 27.5Z';
const pSun = 'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';

const darkMode = document.querySelector('#darkMode');
let toggle = false;

// click pada sun
darkMode.addEventListener('click', function () {
  //menggunakan anime.js
  const timeline = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo',
  });
  // atur timeline
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? pSun : pMoon }],
    })
    .add(
      {
        targets: '#darkMode',
        rotate: toggle ? -50 : 320,
      },
      '-= 350'
    )
    .add(
      {
        targets: '.jumbotron',
        backgroundColor: toggle ? 'rgb(178, 210, 210)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 700'
    )
    .add(
      {
        targets: '.wave2',
        fill: toggle ? '#b1d1d1' : '#161616',
        // color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 700'
    )
    .add(
      {
        targets: '#projects',
        backgroundColor: toggle ? 'rgb(178, 210, 210)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 700'
    )
    .add(
      {
        targets: '.wave4',
        fill: toggle ? '#59809b' : '#161616',
        // color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 700'
    )
    .add(
      {
        targets: '.navbar',
        backgroundColor: toggle ? 'rgb(89, 128, 155)' : 'rgb(22,22,22)',
      },
      '-= 800'
    )
    .add(
      {
        targets: '.footer',
        backgroundColor: toggle ? 'rgb(89, 128, 155)' : 'rgb(22,22,22)',
        // color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 800'
    );
  //mengembalikan sun
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});

function scrollAppear() {
  let introText = document.querySelector('.intro-text');
  let introPos = introText.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 2;

  if (introPos < screenPos) {
    introText.classList.add('intro-appear');
  }
}
window.addEventListener('scroll', scrollAppear);
