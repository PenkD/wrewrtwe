
document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById('darkToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }


  function updateIcon() {
    if (!darkToggle) return;
    darkToggle.innerHTML = body.classList.contains('dark') 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
  }

  updateIcon();


  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      updateIcon();
    });
  }
});
