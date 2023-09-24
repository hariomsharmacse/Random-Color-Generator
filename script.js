const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.background = randomCode;
  document.getElementById("color-code").innerText = randomCode;
  document.getElementById("container").style.background = randomCode;

};

// event call
document.getElementById("btn").addEventListener("click", getColor);


