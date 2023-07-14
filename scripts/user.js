document.addEventListener('DOMContentLoaded', function() {
    let divs = document.querySelectorAll('.middle-side > div');
    divs.forEach(function(div) {
      div.style.display = 'none';
    });

    let firstButton = document.querySelector('.button');
    firstButton.click();
});

function setActiveButton(button) {
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');
    showInputField(button.innerHTML.toLowerCase());
}

function showInputField(divId) {
    var divs = document.querySelectorAll('.middle-side > div');
    divs.forEach(function(div) {
        div.style.display = 'none';
    });

    var targetDiv = document.getElementById(divId);
    targetDiv.style.display = 'block';
}