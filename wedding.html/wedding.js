document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('rsvpForm');
    const rsvpMessage = document.getElementById('rsvpMessage');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const name = document.getElementById('name').value;
      const attending = document.getElementById('attending').value;
  
      if (name && attending) {
        rsvpMessage.innerHTML = `<p>Thank you, ${name}! Your RSVP for ${attending === 'yes' ? 'attending' : 'not attending'} has been received.</p>`;
        form.reset();
      } else {
        rsvpMessage.innerHTML = '<p>Please fill out all fields.</p>';
      }
    });
  });
  