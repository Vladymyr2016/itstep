const resizableBlock = document.getElementById('resizable-block');
const resizer = document.getElementById('resizer');

resizer.addEventListener('mousedown', initResize);

function initResize(e) {
  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', stopResize);
}

function resize(e) {
  resizableBlock.style.width = e.clientX - resizableBlock.offsetLeft + 'px';
  resizableBlock.style.height = e.clientY - resizableBlock.offsetTop + 'px';
}

function stopResize() {
  window.removeEventListener('mousemove', resize);
  window.removeEventListener('mouseup', stopResize);
}
