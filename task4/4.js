const lamp = document.querySelectorAll('.normal');
let currentIndex = 0;
const btn = document.querySelector('button').addEventListener('click', () => {
  lamp.forEach((lamp) => lamp.classList.remove('active'));

  lamp[currentIndex].classList.add('active');

  currentIndex = (currentIndex + 1) % lamp.length;
});
