const getRandomFood = (foods) => {
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
};

export default getRandomFood;
