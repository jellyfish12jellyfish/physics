{
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
            setTimeout(resolve, 200);
        })
    }

    loadData()
        .then(() => {
            let preloaderEl = document.getElementById('preloader');
            preloaderEl.classList.add('hidden');
            preloaderEl.classList.remove('visible');
        });
}

