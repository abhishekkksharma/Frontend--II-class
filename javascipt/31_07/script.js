function getData() {
  const inputBox = document.getElementById('number_input');
  const ip = inputBox.value;

  if (!ip) return;

  const date = new Date(ip);
  const month = date.getMonth() + 1; 
  const day = date.getDate();

  const url = `http://numbersapi.com/${month}/${day}/date`;

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const para = document.getElementById('para');
      para.textContent = data;
    });
}
