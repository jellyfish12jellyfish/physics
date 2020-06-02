mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 700; // For Safari
    document.documentElement.scrollTop = 700; // For Chrome, Firefox, IE and Opera
}



function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });



{
    window.addEventListener("DOMContentLoaded", function () {

        // get the form elements defined in your form HTML above

        var form = document.getElementById("my-form");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("my-form-status");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            button.style = "display: none ";
            status.innerHTML = "Thanks!";
        }

        function error() {
            status.innerHTML = "Oops! There was a problem.";
        }

        // handle the form submission event

        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
}