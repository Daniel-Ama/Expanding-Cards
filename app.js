alert(`You're Welcome Here! 😃`);

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', function () {
    removerActiveClasses();
    panel.classList.add('active');
  });
});

function removerActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
