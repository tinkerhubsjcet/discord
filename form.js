const discordInviteURL = "https://discord.gg/Pv36mtZD";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbydUKGQkSrOGU8Tv94wxySX0qogya0ERd8ek10up3QThDlvkXz2kPV43WUjUgTzXNu-Bg/exec";

const form = document.forms["submit-to-google-sheet"];

function gId(id) {
  return document.getElementById(id);
}

function changeBg(id, color) {
  gId(id).style.backgroundColor = color;
}

// Style changers
function successGreen() {
  changeBg("submit-btn", "rgb(0, 189, 0)");
  gId("submit-btn").innerHTML = "Yay!";
  gId("redir").innerHTML = "Redirecting to Discord ...";
}

function failedBlack() {
  changeBg("submit-btn", "black");
  gId("submit-btn").innerHTML = "Please try again :(";
}

function loader() {
  changeBg("submit-btn", "cornflowerblue");
  gId("submit-btn").innerHTML =
    '<img src="resources/loader.svg" id="loader" style="height: 15px;"></img>';
  gId("loader").classList.add("loader-spin");
}
function initialButtonState() {
  //gId("submit-btn").classList.add("msg-btn");

  //gId("submit-btn").onmouseenter.style.backgroundColor = "#000099";

  gId("submit-btn").innerHTML =
    'Let&apos;s go&nbsp;<img src="resources/arrow.svg" style="height: 15px;"></img>';

  changeBg("submit-btn", "#0000c5");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loader();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successGreen();
      //setTimeout(initialButtonState, 3000);
      console.log("Success");
      setTimeout(window.location.replace(discordInviteURL), 1000);
    })
    .catch((error) => {
      console.log(error);
      failedBlack();
      setTimeout(initialButtonState, 4000);
    });
});
