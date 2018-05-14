function loadHello() {
    const xhr = new XMLHttpRequest();
    const main = document.getElementById('main');

    xhr.open('GET', 'api/hello');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        console.log(xhr);
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                main.innerHTML = response.text;
            } else {
                main.innerHTML = 'An error occurred during your request: ' +
                    xhr.status + ' ' + xhr.statusText;
            }
        }
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
    loadHello();
});