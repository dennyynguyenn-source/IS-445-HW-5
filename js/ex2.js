const displayText400 = () => {
  const output = document.getElementById("output");
  const courses400 = document.querySelectorAll(".400level");

  let result = "";
  courses400.forEach(course => {
    result += course.textContent + "<br>";
  });

  output.innerHTML = result;
};

displayText400();