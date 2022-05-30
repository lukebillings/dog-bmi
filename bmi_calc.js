// breeds api url

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
  fetch(`https://api.thedogapi.com/v1/breeds/search?q=${query}`)
    .then(response => response.json())
    .then((data) => {
      let myBreedName = data[0].name;
      const myBreedWeight = data[0].weight.metric.split(" ");
      const myBreedHeight = data[0].height.metric.split(" ");
      const myBreedBMILow = (parseInt(myBreedWeight[0]) / ((parseFloat(myBreedHeight[0]))/100)**2).toPrecision(3);
      const myBreedBMIHigh = (parseInt(myBreedWeight[2]) / ((parseFloat(myBreedHeight[2]))/100)**2).toPrecision(3);
      let imgID = data[0].reference_image_id;

      fetch(`https://api.thedogapi.com/v1/images/${imgID}`)
        .then(response => response.json())
        .then((image) => {
          const dogImgURL = image.url;
          const imageResult = document.getElementById("dog-image");
          imageResult.innerHTML = `<img src="${dogImgURL}" alt="" height="200" class="rounded">`
        });

      const weight = parseInt(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const result = document.getElementById("output");
      const bmi = (weight / (height**2)).toPrecision(3) ;
      result.innerHTML = `Breed : ${myBreedName} <br />
      Good Range :  ${myBreedBMILow} - ${myBreedBMIHigh} <br />
      Your BMI : ${bmi}`;

      const advice = document.getElementById("advice");
      if (bmi < myBreedBMILow) {
        advice.innerHTML = "Your dog is underweight. Please feed it more treets!";
      } else if (bmi > myBreedBMIHigh) {
        advice.innerHTML = "You dog is overweight. Please feed it less treets!";
      } else if (bmi < myBreedBMIHigh && bmi > myBreedBMILow) {
        advice.innerHTML = "Your dog is healthy! Good job!";
      }

    });
});


