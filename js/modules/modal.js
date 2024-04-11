export default function initModal() {
  var modal = document.querySelector('.modal-container');
  var openModalButton = document.getElementById('openModal');
  var closeModalButton = document.querySelector('[data-modal="fechar"]');
  
  openModalButton.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('ativo');
  });

  closeModalButton.addEventListener('click', function () {
      modal.classList.remove('ativo');
  });

  var emailForm = document.querySelector('.modal form');

  emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(emailForm);

      fetch(emailForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json', // Indicates you expect a JSON response
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Process the JSON response
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        console.log(data); // Inspect the data for success or message
        alert('Email sent successfully!');
        modal.classList.remove('ativo');
        emailForm.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
    
  });
}
