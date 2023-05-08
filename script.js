const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.querySelector('.bmi-value');
const needle = document.querySelector('.needle');

calculateBtn.addEventListener('click', () => {
  let weight = document.getElementById('weight').value;
  const weightUnit = 'kg';
  let height = document.getElementById('height').value;
  const heightUnit = 'm';

  if (weight && height) {
    if (weightUnit === 'lb') {
      weight /= 2.205;
    }
    if (heightUnit === 'in') {
      height /= 39.37;
    }

    const bmi = weight / (height * height);

    bmiValue.textContent = bmi.toFixed(1);

    if (bmi < 18.5) {
      bmiValue.classList.add('red');
      needle.style.transform = 'rotate(-22.5deg)';
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiValue.classList.add('light-green');
      needle.style.transform = 'rotate(0deg)';
    } else if (bmi >= 25 && bmi < 30) {
      bmiValue.classList.add('yellow');
      needle.style.transform = 'rotate(22.5deg)';
    } else if (bmi >= 30 && bmi < 35) {
      bmiValue.classList.add('orange');
      needle.style.transform = 'rotate(45deg)';
    } else if (bmi >= 35 && bmi < 40) {
      bmiValue.classList.add('orange');
      needle.style.transform = 'rotate(67.5deg)';
    } else {
      bmiValue.classList.add('red');
      needle.style.transform = 'rotate(90deg)';
    }
  } else {
    alert('Please enter your weight and height.');
  }
});
