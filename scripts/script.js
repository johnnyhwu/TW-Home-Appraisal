document.addEventListener('DOMContentLoaded', function() {
    let divs = document.querySelectorAll('.middle-side > div');
    divs.forEach(function(div) {
      div.style.display = 'none';
    });

    let firstButton = document.querySelector('.button');
    firstButton.click();
});