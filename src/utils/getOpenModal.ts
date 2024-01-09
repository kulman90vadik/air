
export const getOpenModal = (): boolean => {
  const str = localStorage.getItem('open');
  return str ? JSON.parse(str) : true;
}
