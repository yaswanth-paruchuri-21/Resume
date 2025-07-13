
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.onclick = () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌗 Dark Mode';
    };
  