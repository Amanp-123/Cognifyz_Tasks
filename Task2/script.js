
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function () {
  colorBtn.style.backgroundColor = "orange";

});

// 2. Greeting Alert
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", function () {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  alert(greeting);
});

// 3. Basic Calculator
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const sum = num1 + num2;

  document.getElementById("result").textContent = "Result: " + sum;
});
