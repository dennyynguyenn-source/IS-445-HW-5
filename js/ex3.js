const styleParagraphs = () => {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(p => {
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "yellow";
  });
};

styleParagraphs();