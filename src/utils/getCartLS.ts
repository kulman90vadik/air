import { ObjectItem } from "../models";

export const getCartLS = (): ObjectItem[] | [] => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}

export const getCartLSLenght = (): number => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data).length : 0;
}

export const getCartLSTotal = (): number => {
  const data = localStorage.getItem('cart');
  // return data ? JSON.parse(data) : [];
  if(data) {
    let price = JSON.parse(data).reduce((accum: number, obj: ObjectItem) => {
      return accum + obj.price
    }, 0);
    return price
  } else {
    return 0;
  }
}

