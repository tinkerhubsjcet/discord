const scriptURL =
  "https://script.google.com/macros/s/AKfycbydUKGQkSrOGU8Tv94wxySX0qogya0ERd8ek10up3QThDlvkXz2kPV43WUjUgTzXNu-Bg/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //loader();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //successGreen();
      //setTimeout(initialButtonState, 3000);
      console.log("Success");
    })
    .catch((error) => {
      console.log(error);
      //failedBlack();
      //setTimeout(initialButtonState, 3000);
    });
});
