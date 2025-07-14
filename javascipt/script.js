function greetUser() {
  const name = document.getElementById("name").value;
  document.getElementById("greet").textContent = `Hello, ${name}!`;
}


function selectColor(select) {
  document.querySelector("section:nth-of-type(2) div").textContent = `You selected ${select.value}`;
}


function toggleParagraph() {
  const p = document.querySelector("section:nth-of-type(3) p");
  p.style.display = p.style.display === "none" ? "block" : "none";
}


function checkVoting() {
  const age = document.getElementById("age").value;
  document.querySelector("section:nth-of-type(4) p").textContent = age >= 18 ? "Eligible to vote" : "Not eligible";
}


function addMessage() {
  const val = document.querySelector("section:nth-of-type(5) input").value;
  const p = document.createElement("p");
  p.textContent = val;
  document.querySelector("section:nth-of-type(5)").appendChild(p);
}


function boldText() {
  document.getElementById("info").style.fontWeight = "bold";
}


function showSum() {
  const n1 = +document.getElementById("n1").value;
  const n2 = +document.getElementById("n2").value;
  document.querySelector("section:nth-of-type(7) p").textContent = n1 + n2;
}


function setHeading(input) {
  document.getElementById("title").textContent = input.value;
}


let count = 0;
function incrementCount() {
  count++;
  document.getElementById("count").textContent = count;
}


function clearInput() {
  document.querySelector("section:nth-of-type(10) input").value = "";
}

function changeBackgroundByAge() {
  const age = +document.getElementById("bgAge").value;
  if (age < 18) {
    document.body.style.backgroundColor = "red";
  } else if (age <= 60) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}

//Traffic Signal Simulation Dropdown has "red" , "yellow" , "green" . Show correct message: “Stop”, “Ready”, “Go” inside a div.

function changeTrafficSignal() {
  const signal = document.getElementById('signalName');
  const signal_change = document.getElementById('changeSignal')
  if(signal.value == "red"){
    signal_change.textContent = "Red"
  }
  else if(signal.value == "green"){
    signal_change.textContent = "Green"
  }
  else if(signal.value == "yellow"){
    signal_change.textContent = "Yellow"
  }
  
}

//13. Greet Multiple Times Read a number n and a name, then display “Hello, Name” n times using a loop.
  function displayName() {
    const n = +document.getElementById('greetTimes').value;
    const name = document.getElementById('greetName').value;
    const container = document.getElementById('greetOutput');
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const p = document.createElement('p');
      p.textContent = `Hello, ${name}`;
      container.appendChild(p);
    }
  }

  //20. Detect Even or Odd Read a number and show “Even” or “Odd” in result div using if-else
function CheckOddEven() {
  const number = document.getElementById('evenOddInput').value;
  const displayOddEven = document.getElementById('Even_Odd');

  if (number%2==0) {
    displayOddEven.textContent = "Even";
  }
  else{
    displayOddEven.textContent = "Odd";
  }
}

//21. Multiplication Table Generator Read a number → generate table from 1 to 10 using loop and add each as a <p>
