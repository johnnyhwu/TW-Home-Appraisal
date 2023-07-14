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

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('submitBtn');
    button.addEventListener('click', sendData);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendData() {
    var formData = collectFormData();
    console.log(formData);
    var loader = document.getElementById('loader');
    loader.style.display = 'block';
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.style.display = 'none';

    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'your-server-url', true);
    // xhr.setRequestHeader('Content-Type', 'application/json');

    // xhr.onreadystatechange = function() {
    // if (xhr.readyState === XMLHttpRequest.DONE) {
    //     loader.style.display = 'none';

    //     if (xhr.status === 200) {
    //     // 處理伺服器回傳的資料
    //     var response = JSON.parse(xhr.responseText);
    //     // 處理回傳資料的其他操作
    //     } else {
    //     // 處理請求失敗的情況
    //     console.error('Request failed. Status: ' + xhr.status);
    //     }
    // }
    // xhr.send(JSON.stringify(formData));

    
    await sleep(5000);
    loader.style.display = 'none';
    submitBtn.style.display = 'block';

}


function collectFormData() {
    // determine the building type
    var buttons = document.getElementsByClassName('button');
    var building_type;
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].classList.contains('active')) {
            building_type = buttons[i].innerHTML.toLowerCase();
        }
    }

    // collect data from specific building type
    var divEmt = document.getElementById(building_type)
    var inputEmts = divEmt.getElementsByTagName('input');
    if(building_type == "building") {
        return {
            'addr': inputEmts[0].value,
            'age': inputEmts[1].value,
            'area': inputEmts[2].value
        }
    } else if(building_type == "house") {
        return {
            'addr': inputEmts[0].value,
            'age': inputEmts[1].value,
            'floor': inputEmts[2].value,
            'car': inputEmts[3].value
        }
    } else {
        return {
            'addr': inputEmts[0].value,
            'age': inputEmts[1].value,
            'floor': inputEmts[2].value,
            'trans1': inputEmts[3].value,
            'trans2': inputEmts[4].value,
        }
    }
}