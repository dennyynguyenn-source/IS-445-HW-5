const addBusinessLink = () => {
  const linksList = document.getElementById("links");
  const isLink = document.getElementById("is");

  const newLi = document.createElement("li");
  const newA = document.createElement("a");

  newA.href = "https://www.csulb.edu/college-of-business";
  newA.textContent = "College of Business";

  newLi.appendChild(newA);

  linksList.insertBefore(newLi, isLink);
};

addBusinessLink();