// Basic gallery example placeholder
const gallery = document.getElementById('gallery');
if (gallery) {
  const items = ['One', 'Two', 'Three'];
  gallery.innerHTML = items.map((t) => `<li>${t}</li>`).join('');
  console.log('Gallery initialized');
}
