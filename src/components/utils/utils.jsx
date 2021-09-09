export const GetCounter = () => {
  let i = 1;

  return function () {
    return i++;
  };
};

export const GetId = () => {
  return Math.ceil(Math.random() * 1000000);
};
