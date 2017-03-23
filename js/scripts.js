var a = prompt('Pole trójkąta o podstawie "a": '),
  h =  prompt('... i wysokości "h": '),
  triangleArea;

if (!isNaN(Number(a)) && !isNaN(Number(h))) {
  triangleArea = a*h/2;
  console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
} else {
  console.log('Złe dane. Wprowadź cyfry.');
}
