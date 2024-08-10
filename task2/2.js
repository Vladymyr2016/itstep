const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const btnClose = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
};
btnClose.onclick = function () {
  modal.style.display = 'none';
};
