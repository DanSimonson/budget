const RandomColors = () => {
  let randomColorsArray = [
    "#1e88e5",
    "#3d5afe",
    "#f44336",
    "#01579b",
    "#006064",
    "#f44336",
    "#263238",
    "#2196f3",
    "#795548",
    "#e91e63",
    "#ff5722",
    "#3f51b5",
    "#9c27b0",
    "#e65100",
    "#673ab7",
    "#00838f",
    "#9c27b0",
    "#827717",
    "#0277bd",
    "#e91e63",
    "#00695c",
    "#311b92",
    "#5c6bc0",
    "#651fff",
    "#1976d2",
    "#0d47a1",
    "#7986cb",
    "#ff4081",
    "#880e4f",
    "#e040fb",
  ];
  let foundColorsArray = [""];
  let num = 0;
  let min = 0;
  let max = 25;
  while (num <= randomColorsArray.length - 1) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let randomIndex = Math.floor(step2) + min;
    foundColorsArray.push(randomColorsArray[randomIndex]);
    num++;
  }
  foundColorsArray.shift();

  return foundColorsArray;
};
export default RandomColors;
