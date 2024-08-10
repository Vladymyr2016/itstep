const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballsize = 10;

field.addEventListener('click', (event) => {
  const fieldRect = field.getBoundingClientRect();
  let newX = event.clientX - fieldRect.left - ballsize / 2;
  let newY = event.clientY - fieldRect.top - ballsize / 2;

  // Обмеження для переміщення м'яча всередині поля
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > fieldRect.width - ballsize) newX = fieldRect.width - ballsize;
  if (newY > fieldRect.height - ballsize) newY = fieldRect.height - ballsize;

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;
});
