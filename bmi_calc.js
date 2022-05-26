// calculate dog BMI from user imput

let button = document.getElementById("btn");

button.addEventListener('click', () => {
  const w = parseInt(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("output");
  const bmi = w / (h**2) ;
  result.innerHTML = 'Your dogs bmi is' + " " + bmi;
  console.log(w)
});


// api url

const breedURL = "https://api.thedogapi.com/v1/breeds?api_key=e3776e60-173a-4b6b-88cb-8e88737323b1"


// get request on api gives all the dog breeds

const dog_breeds = document.getElementById("dog_breeds")

fetch(breedURL)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
        const dog = `<li>
          <p>${result.name}</p>
        </li>`
        dog_breeds.insertAdjacentHTML("beforeend", dog)
      })
  });


// get the dog breeds json into a dropdown list

const selector = document.getElementById('selector')

fetch(breedURL)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
        const dog = `<option>
          ${result.name}
        </option>`
        selector.insertAdjacentHTML("beforeend", dog)
      })
  });


// on submit use the value of the dropdown to make get request on api with the value interpolated => print it's bmi onto page




// compared selected dog bmi to your dog bmi, conditional with 3 types of advice



// display dog image
