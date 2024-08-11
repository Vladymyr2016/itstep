const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballsize = 100;

field.addEventListener('click', (event) => {
  const fieldPlace = field.getBoundingClientRect();

  let newX = event.clientX - fieldPlace.left - ballsize / 2;
  let newY = event.clientY - fieldPlace.top - ballsize / 2;

  newX = Math.max(
    ballsize / 2,
    Math.min(newX, fieldPlace.width - ballsize / 2)
  );
  newY = Math.max(
    ballsize / 2,
    Math.min(newY, fieldPlace.height - ballsize / 2)
  );

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;
});
