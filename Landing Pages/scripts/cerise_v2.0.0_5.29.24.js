document.addEventListener('DOMContentLoaded', function () {
    const BOOTSTRAP_URL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    const BOOTSTRAP_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    const LOTTIE_SCRIPT_URL = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
  
    function loadCss(url) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }
  
    function loadScript(url) {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }
  
    loadCss(BOOTSTRAP_URL);
    loadScript(BOOTSTRAP_SCRIPT_URL);
    loadScript(LOTTIE_SCRIPT_URL);
});
  
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const video = document.getElementById("video");
        const circlePlayButton = document.getElementById("circle-play-b");
    
        function togglePlay() {
    
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
    
        }
    
        circlePlayButton.addEventListener("click", togglePlay);
        video.addEventListener("playing", function () {
            circlePlayButton.style.opacity = 0;
        });
        video.addEventListener("pause", function () {
            circlePlayButton.style.opacity = 1;
        });
    }, 500);
});
  
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        bodymovin.loadAnimation({
            container: document.getElementById("lottie1"),
            path: 'https://24211329.fs1.hubspotusercontent-na1.net/hubfs/24211329/Textile_Kentico_Section_Embeds/SR2024_New%20Pages/ABOUT%20US/Fast.json'
        });
    }, 500);
  
    setTimeout(function () {
        bodymovin.loadAnimation({
            container: document.getElementById("lottie2"),
            path: 'https://24211329.fs1.hubspotusercontent-na1.net/hubfs/24211329/Textile_Kentico_Section_Embeds/SR2024_New%20Pages/ABOUT%20US/Curated.json'
        });
    }, 500); 
  
    setTimeout(function () {
        bodymovin.loadAnimation({
            container: document.getElementById("lottie3"),
            path: 'https://24211329.fs1.hubspotusercontent-na1.net/hubfs/24211329/Textile_Kentico_Section_Embeds/SR2024_New%20Pages/ABOUT%20US/Completed.json'
        });
    }, 500); 
});

(function () {
    const videoSection = document.querySelector('.quarrix_video_section__video');
    
    if (videoSection) {
        const video = videoSection.querySelector('video');

        videoSection.addEventListener('click', function() {
            if (video) {
                video.play()
                    .then(() => {
                        video.removeAttribute('poster');
                        video.setAttribute('controls', '');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                });
            }
        });
    }
    
    const accordionTitles = document.querySelectorAll('.quarrix_faq_section__item_title_wrapper');

    if (accordionTitles) {
        accordionTitles.forEach(el => {
            el.addEventListener('click', () => {
                el.parentElement.classList.toggle('active');
            });
        });
    }

    const cardsSwiper = document.querySelector('.cards-swiper');

    if (cardsSwiper) {
        let swiper = new Swiper(cardsSwiper, {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            },
        });
    }
})();
