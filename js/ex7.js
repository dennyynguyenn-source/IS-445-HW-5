const content = document.getElementById("content");

const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:");

const num1 = Number(input1);
const num2 = Number(input2);

const isValidInteger = (value) => {
  return value !== null && value.trim() !== "" && !isNaN(value) && Number.isInteger(Number(value));
};

if (isValidInteger(input1) && isValidInteger(input2)) {
  const sum = num1 + num2;
  content.innerHTML = `The sum is <span class="sum-text">${sum}</span>`;
} else {
  content.innerHTML = `<span class="error-text">Error: You must enter two integers. You entered "${input1}" and "${input2}".</span>`;
}