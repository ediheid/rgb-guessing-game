// Random RGB Color Generator

const generateRandomColor = () => {
  let rgbColor = Math.floor(Math.random() * 255) + 1;
  return rgbColor;
};

const colorGenerator = () => {
  let red = generateRandomColor();
  let green = generateRandomColor();
  let blue = generateRandomColor();

  let newColor = `rgb(${red},${green},${blue})`;
  return newColor;
};

export default colorGenerator;
