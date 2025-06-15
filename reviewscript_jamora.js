document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ratingForm');
  const commentDisplay = document.getElementById('commentDisplay');
  const modal = document.getElementById('thankYouModal');
  const closeBtn = document.querySelector('.modal-close');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const rating = form.rating.value;
    const comment = document.getElementById('comment').value;

    if (!rating || !comment.trim()) {
      alert('Please select a rating and enter a comment.');
      return;
    }

    commentDisplay.innerHTML = `
      <div class="comment">
        <em>Your rating will be added shortly.</em>
      </div>
    `;

    modal.style.display = 'block';

    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
