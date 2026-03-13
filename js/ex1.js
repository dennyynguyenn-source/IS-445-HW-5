const bodyNodes = () => {
  const output = document.getElementById("output");
  let result = "";

  document.body.childNodes.forEach(node => {
    result += node.nodeName + ": " + node.textContent.trim() + "\n";
  });

  output.textContent = result;
};

bodyNodes();