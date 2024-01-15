const inputs = document.getElementsByClassName("cart__quantity");
const button = document.querySelector(".cart__btn-calculate");
const price = document.querySelector(".cart__total-price");

const getSum = (arr) => {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const getPrice = () => {
  const quantity = [...inputs];
  const allMulti = [];
  quantity.forEach((input) => {
    const data = input.dataset.price;
    const value = input.value;
    if (value > 0) {
      let multi = data * value;
      allMulti.push(multi);
    }
  });

  return getSum(allMulti);
};

const showPrice = () => {
  price.innerText = "";
  price.innerText = getPrice();
};

button.addEventListener("click", showPrice);
