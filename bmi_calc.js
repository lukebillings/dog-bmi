// api url

const breedsURL = "https://api.thedogapi.com/v1/breeds?api_key=e3776e60-173a-4b6b-88cb-8e88737323b1"

// get the dog breeds json into a dropdown list

const selectdBreed = document.getElementById('keyword')

fetch(breedsURL)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
        const dog = `<option value=${result.name}>${result.name} </option>`
        keyword.insertAdjacentHTML("beforeend", dog)
      })
  });

// search for a dog

const searchForm = document.querySelector("#search-form")

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("keyword").value;
  console.log(query)
  // const searchBreed = (keyword) => {
  fetch(`https://api.thedogapi.com/v1/breeds/search?q=${query}`)
    .then(response => response.json())
    .then((data) => {
      const myBreedName = data[0].name;
      const myBreedWeight = data[0].weight.metric.split(" ");
      const myBreedHeight = data[0].height.metric.split(" ");
      const myBreedBMILow = parseInt(myBreedWeight[0]) / parseFloat(myBreedHeight[0]**2);
      const myBreedBMIHigh = parseInt(myBreedWeight[2]) / parseFloat(myBreedHeight[2]**2);
      const w = parseInt(document.getElementById("weight").value);
      const h = parseFloat(document.getElementById("height").value);
      const result = document.getElementById("output");
      const bmi = w / (h**2) ;
      result.innerHTML = `Your Dog's Breed : ${myBreedName}. Good Range :  ${myBreedBMILow} - ${myBreedBMIHigh} your BMI is <strong> ${bmi} </strong>`;
    });
  // };
});

