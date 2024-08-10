const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballsize = 100;

field.addEventListener('click', (event) => {
  const fieldPlace = field.getBoundingClientRect();
  console.log(fieldPlace);
  let newX = event.clientX - fieldPlace.left - ballsize / 2;

  let newY = event.clientY - fieldPlace.top - ballsize / 2;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > fieldPlace.width + ballsize) newX = fieldPlace.width + ballsize;
  if (newY > fieldPlace.height + ballsize) newY = fieldPlace.height + ballsize;

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;
});
