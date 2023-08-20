const form = document.querySelector("form");

//This usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        // console.log(height);
      results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is ${bmi}. You are Underweight`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `Your BMI is ${bmi}. You are Normal`;
        }
        else {
            results.innerHTML = `Your BMI is ${bmi}. You are Overweight`;
        }
    }
});
