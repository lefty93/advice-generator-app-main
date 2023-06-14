const adviceID = document.querySelector(".adviceID");
const adviceText = document.querySelector(".adviceText");
const diceButton = document.getElementById("dice");


const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      // Do something with the data
      console.log(data.slip);
      adviceID.innerText = `ADVICE #${data.slip.id}`;
      adviceText.innerText = `"${data.slip.advice}"`;
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });
}
fetchAdvice();
diceButton.addEventListener("click", fetchAdvice)  