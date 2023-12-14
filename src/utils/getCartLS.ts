
export const getCartLS = () => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}
// export const getCartLSCatalog = () => {
//   const data = localStorage.getItem('catalog');
//   // console.log(JSON.parse(data));
//   return data ? JSON.parse(data) : [];
// }