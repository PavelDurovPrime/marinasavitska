/* ─────────────────────────────────────────────
   forms.js — Shared Formspree form handler
   Handles async submission for all contact/booking
   forms on the site.
───────────────────────────────────────────── */

(function () {
  /**
   * Initialises a Formspree-powered form with async submit.
   * @param {string} formId      - id of the <form> element
   * @param {string} successId   - id of the success message element
   */
  function initFormspreeForm(formId, successId) {
    var form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      var originalText = btn.textContent;
      btn.textContent = 'Надсилання\u2026';
      btn.disabled = true;

      try {
        var res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.style.display = 'none';
          var successEl = document.getElementById(successId);
          if (successEl) successEl.style.display = 'block';
        } else {
          btn.textContent = 'Помилка \u2014 спробуйте ще раз';
          btn.disabled = false;
        }
      } catch (err) {
        btn.textContent = 'Помилка з\u2019єднання';
        btn.disabled = false;
      }
    });
  }

  /* Initialise all forms present on this page */
  initFormspreeForm('contact-form',  'form-success');
  initFormspreeForm('booking-form',  'booking-success');
})();
