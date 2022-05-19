let button = document.getElementById("btn");

button.addEventListener('click', () => {
  const w = parseInt(document.getElementById("weight").value);
  const h = parseInt(document.getElementById("height").value);
  const result = document.getElementById("output");
  const bmi = (w / h**2);
  result.innerHTML = 'Your dogs bmi is' + " " + bmi;
});
