
(function ($) {
  'use strict';

  $(document).ready(function () {
      $('.table-filter').on('input', function () {
          var value = $(this).val().toLowerCase();

          var found = false;
          $('.filtered-table tbody tr').filter(function () {
              var match = $(this).text().toLowerCase().indexOf(value) > -1;
              $(this).toggle(match);
              if (match) found = true;
          });

          // Show/hide the "not-found" element based on search result
          $('.not-found').toggleClass('d-none', found);
          $('.hukuman').toggleClass('d-none', !found);
      });
  });
})(window.jQuery);

// Function to show the alert
function showAlert() {
  document.getElementById('alertOverlay').style.display = 'flex';
}

// Function to hide the alert
function hideAlert() {
  document.getElementById('alertOverlay').style.display = 'none';
}

// Delay in milliseconds (e.g., 3000ms = 3 seconds)
const delayInMilliseconds = 5000; // 5 seconds

// Set the timeout to trigger the showAlert function
setTimeout(showAlert, delayInMilliseconds);



console.log ("𓁹‿𓁹 What You Doing Huh?");