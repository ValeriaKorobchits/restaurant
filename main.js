(function(){
    const header = document.querySelector('.header');
    // const image = document.querySelector('.test');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            // image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/7728/7728306.png');
        } else {
            header.classList.remove('header_active');
            // image.setAttribute('src', 'img/logo2.png');
        }
    }



    const slides = document.querySelectorAll('.slide');
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}
())




