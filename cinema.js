(function () {
  "use strict";

  var trailerIds = [
    "vmH2CnyH5So",
    "zAOCPdgariU",
    "cAMWZfdwZI4",
    "gRNIJr4RLpo",
    "HL1LuxOWQNk",
    "ufAO7o1D8Fg",
    "Gy0e0BQOXA0",
    "IyoUhF039nM",
    "SVb1iCZu_bU",
    "pLoVQ1VmDMs",
    "ShKaC4oHKKI",
    "HDXgvoXBcOw"
  ];
  var preShowTrailerCount = 2;
  var featureId = "yRLnEJWYXfc";
  var featureUrl = "https://www.youtube.com/watch?v=" + featureId;
  var startButton = document.getElementById("cinemaStart");
  var player;
  var playerReady = false;
  var phase = "idle";
  var trailerQueue = [];

  function chooseTrailers(count) {
    var pool = trailerIds.slice();

    for (var index = pool.length - 1; index > 0; index -= 1) {
      var randomIndex = Math.floor(Math.random() * (index + 1));
      var selectedId = pool[index];
      pool[index] = pool[randomIndex];
      pool[randomIndex] = selectedId;
    }

    return pool.slice(0, Math.min(count, pool.length));
  }

  function hideStartButton() {
    startButton.hidden = true;
  }

  function showStartButton(label, title) {
    startButton.disabled = false;
    startButton.hidden = false;
    startButton.setAttribute("aria-label", label);
    startButton.setAttribute("title", title);
  }

  function loadFeature() {
    phase = "feature";
    hideStartButton();
    player.loadVideoById(featureId);
  }

  function loadNextTrailer() {
    if (trailerQueue.length === 0) {
      loadFeature();
      return;
    }

    phase = "trailer";
    hideStartButton();
    player.loadVideoById(trailerQueue.shift());
  }

  function handlePlayerReady() {
    playerReady = true;
    startButton.disabled = false;
    startButton.removeAttribute("aria-busy");
  }

  function handlePlayerStateChange(event) {
    if (phase === "trailer" && event.data === YT.PlayerState.ENDED) {
      loadNextTrailer();
    }
  }

  function handlePlayerError() {
    if (phase === "trailer") {
      loadNextTrailer();
      return;
    }

    phase = "feature-error";
    showStartButton("Open the feature on YouTube", "Open the feature on YouTube");
  }

  function handleAutoplayBlocked() {
    if (phase !== "idle") {
      showStartButton("Continue the show", "Continue the show");
    }
  }

  startButton.addEventListener("click", function () {
    if (!playerReady) {
      return;
    }

    if (phase === "feature-error") {
      window.open(featureUrl, "_blank", "noopener,noreferrer");
      return;
    }

    hideStartButton();

    if (phase === "idle") {
      trailerQueue = chooseTrailers(preShowTrailerCount);
      loadNextTrailer();
      return;
    }

    player.playVideo();
  });

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("cinemaPlayer", {
      events: {
        onReady: handlePlayerReady,
        onStateChange: handlePlayerStateChange,
        onError: handlePlayerError,
        onAutoplayBlocked: handleAutoplayBlocked
      }
    });
  };
})();
