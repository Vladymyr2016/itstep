document.querySelectorAll('#directory-tree li').forEach((item) => {
  item.addEventListener('click', function () {
    const sublist = item.querySelector('ul');
    if (sublist) {
      sublist.classList.toggle('hidden');
      event.stopPropagation();
    }
  });
});
