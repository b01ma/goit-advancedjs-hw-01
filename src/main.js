import renderGallery from './js/1-gallery.js';
import renderForm from './js/2-form.js';

// Initialize gallery
const galleryContainer = document.querySelector('.gallery');
renderGallery(galleryContainer);

// Initialize feedback form
const feedbackForm = document.querySelector('.feedback-form');
renderForm(feedbackForm);
