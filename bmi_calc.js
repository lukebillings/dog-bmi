// api url

const breedsURL = "https://api.thedogapi.com/v1/breeds?api_key=e3776e60-173a-4b6b-88cb-8e88737323b1"

// get the dog breeds json into a dropdown list

const selector = document.getElementById('selector')

fetch(breedsURL)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
        const dog = `<option value=${result.name}>${result.name} </option>`
        selector.insertAdjacentHTML("beforeend", dog)
      })
  });

// calculate your dog BMI from user imput

let button = document.getElementById("btn");

button.addEventListener('click', () => {
  const w = parseInt(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("output");
  const bmi = w / (h**2) ;
  result.innerHTML = 'Your dog bmi is' + " " + bmi;
});


// search for a dog

const searchForm = document.querySelector("#search-form")

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyword = document.getElementById("keyword").value;
  const searchBreed = (keyword) => {
  fetch(`https://api.thedogapi.com/v1/breeds/search?q=${keyword}`)
    .then(response => response.json())
    .then((data) => {
      const myBreedName = data[0].name;
      const myBreedWeight = data[0].weight;
      const myBreedHeight = data[0].height;
      console.log(myBreedName);
      console.log(myBreedWeight);
      console.log(myBreedHeight);
    })
  }
  searchBreed(keyword);
});

