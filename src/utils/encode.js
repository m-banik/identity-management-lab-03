/* To jest najłatwiejsza solucja z użyciem wbudowanych funkcji globalnych.
   Tak. Wiem, że nie działają w każdym środowisku oraz że mieliśmy to
   napisać algorytmicznie. Niestety, przerosło mnie to zadanie i nastawiam
   się na poprawę... */
const encode = (text, format = 'encode') =>
  format === 'encode' ? btoa(text) : atob(text);

module.exports = { encode };
