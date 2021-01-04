let terms = document.querySelector(".terms-and-conditions");
let watch = document.querySelector(".watch");
let button = document.querySelector(".accept");

function obsCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing
    obs.unobserve(terms.lastElementChild);
  }
}

let obs = new IntersectionObserver(obsCallback, {
  root: terms,
  threshold: 1,
});

obs.observe(terms.lastElementChild);
