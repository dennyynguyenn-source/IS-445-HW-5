const content = document.getElementById("content");

const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:");

if (!isNaN(input1) && !isNaN(input2) &&
    Number.isInteger(Number(input1)) &&
    Number.isInteger(Number(input2))) {

  const sum = Number(input1) + Number(input2);

  const span = document.createElement("span");
  span.textContent = sum;
  span.style.color = "red";
  span.style.fontWeight = "bold";

  content.append("The sum is ");
  content.appendChild(span);
} else {
  const span = document.createElement("span");
  span.textContent = `Error: You must enter two integers. You entered "${input1}" and "${input2}".`;
  span.style.color = "red";
  span.style.fontWeight = "bold";
  content.appendChild(span);
}