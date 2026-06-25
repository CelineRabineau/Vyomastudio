document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // ARTICLES MODAL
    // =====================
const imageItems = document.querySelectorAll('.image-item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

if (modal && modalImg) {

    const closeBtn = modal.querySelector('.image-close');

    imageItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalSrc = item.dataset.modal;
            modalImg.src = modalSrc;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
}


    // =====================
    // GALLERY MODAL
    // =====================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImg');
    const galleryClose = document.querySelector('.gallery-close');

    if (galleryModal && galleryModalImg && galleryClose) {

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                galleryModalImg.src = img.src;
                galleryModal.style.display = 'flex';
            });
        });

        galleryClose.addEventListener('click', () => {
            galleryModal.style.display = 'none';
            galleryModalImg.src = '';
        });

        galleryModal.addEventListener('click', e => {
            if (e.target === galleryModal) {
                galleryModal.style.display = 'none';
                galleryModalImg.src = '';
            }
        });
    }

});

//const carouselTrack = document.querySelector('.carousel-track');
//const nextBtn = document.querySelector('.carousel-next');
//const videoModal = document.getElementById('videoModal');
//const videoIframe = document.getElementById('videoIframe');
//const videoClose = document.querySelector('.video-close');

//prevBtn.addEventListener('click', () => {
    //carouselTrack.scrollBy({ left: -420, behavior: 'smooth' });
//});

//nextBtn.addEventListener('click', () => {
    //carouselTrack.scrollBy({ left: 420, behavior: 'smooth' });
//});

//document.querySelectorAll('.carousel-item').forEach(item => {
    //item.addEventListener('click', () => {
        //videoIframe.src = item.dataset.video + '?autoplay=1';
        //videoModal.style.display = 'flex';
    //});
//});

//videoClose.addEventListener('click', () => {
    //videoModal.style.display = 'none';
    //videoIframe.src = '';
//});

//videoModal.addEventListener('click', e => {
    //if (e.target === videoModal) {
        //videoModal.style.display = 'none';
       //videoIframe.src = '';
    //}
//});
