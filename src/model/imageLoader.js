
const genImages = async (numberOfImages) => {
  const response = await fetch(`http://localhost:3030/images?numberOfImages=${numberOfImages}`);
  const data = await response.json();
  return data;
}

export default genImages;