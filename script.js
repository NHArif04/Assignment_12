const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.querySelector('.bmi-value');
const needle = document.querySelector('.needle');

calculateBtn.addEventListener('click', () => {
  const weightInput = document.getElementById('weightInput');
  const weightUnit = document.getElementById('weightUnit').value;
  const heightInput = document.getElementById('heightInput');
  const heightUnit = document.getElementById('heightUnit').value;

  let weight = weightInput.value;
  let height = heightInput.value;

  if (weightUnit === 'lb') {
    weight = weight * 0.453592;
  }

  if (heightUnit === 'ft') {
    const heightArray = height.split('.');
    height = (parseInt(heightArray[0]) * 0.3048) + (parseInt(heightArray[1]) * 0.0254);
  }

  const bmi = (weight / Math.pow(height, 2)).toFixed(2);
  bmiValue.textContent = `Your BMI is ${bmi}`;

  if (bmi < 16) {
    needle.style.transform = 'rotate(-45deg)';
    bmiValue.classList.add('red');
    bmiValue.classList.remove('orange', 'yellow', 'light-green', 'green');
  } else if (
