(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      startBtn = $('start-btn'),
      music = $('bg-music'),
      timer = null;

  // Play / Pause toggle for music
  startBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (music.paused) {
      music.play();
      startBtn.innerText = "Pause Music ⏸️";
    } else {
      music.pause();
      startBtn.innerText = "Play Music 🎶";
    }
  });

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();
