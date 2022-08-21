import Product from "./models/Product";

const products: Product[] = [
  {
    name: "cupcakes",
    price: 4.0,
  },
  {
    name: "pie",
    price: 7.0,
  },
  {
    name: "swiss roll",
    price: 5.0,
  },
];

export const calcAverageProductPrice = (products: Product[]): number => {
  if (products.length) {
    return (
      products.reduce((pv, cv) => {
        return pv + cv.price;
      }, 0) / products.length
    );
  } else {
    return 0;
  }
  // if (products.length) {
  //   let sum: number = 0;
  //   products.forEach((item) => {
  //     sum += item.price;
  //   });
  //   return sum / products.length;
  // } else {
  //   return 0;
  // }
};

const average: number = calcAverageProductPrice(products);
console.log(average);
