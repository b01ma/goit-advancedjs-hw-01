// Simple form handling placeholder
const form = document.getElementById('demoForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
  });
  console.log('Form handler attached');
}
