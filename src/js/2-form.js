export default function renderForm(formEl) {
  console.log('FORM INIT');

  const FEEDBACK_KEY = 'feedback-form-state';
  const formData = { email: '', message: '' };

  if (formEl) {
    // Restore previous data (if any)
    restoreState();

    // Input delegation (single listener for all fields)
    formEl.addEventListener('input', onInput, { passive: true });
    formEl.addEventListener('submit', onSubmit);
  }

  function onInput(e) {
    const { name, value } = e.target;
    if (!(name in formData)) return; // ignore unrelated fields
    formData[name] = value.trimStart(); // preserve trailing typing, trim only leading while editing
    persist();
  }

  function onSubmit(e) {
    e.preventDefault();

    formData.email = formData.email.trim();
    formData.message = formData.message.trim();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log('Submitted form data:', { ...formData });

    localStorage.removeItem(FEEDBACK_KEY);
    formData.email = '';
    formData.message = '';
    formEl.reset();
  }

  function persist() {
    try {
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
    } catch (err) {
      console.log('Failed to persist form state:', err);
    }
  }

  function restoreState() {
    try {
      const raw = localStorage.getItem(FEEDBACK_KEY);
      if (!raw) return;

      const saved = JSON.parse(raw);
      if (typeof saved === 'object') {
        if (typeof saved.email === 'string') formData.email = saved.email;
        if (typeof saved.message === 'string') formData.message = saved.message;

        if (formEl.elements.email) formEl.elements.email.value = formData.email;
        if (formEl.elements.message) formEl.elements.message.value = formData.message;
      }
    } catch (err) {
      console.warn('Failed to restore form state:', err);
    }
  }
}
