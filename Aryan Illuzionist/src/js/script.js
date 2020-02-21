export function hambiMenuActive(button, navbarList) {

    button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
            button.classList.toggle('active');
            navbarList.classList.toggle('visible');
        } else {
            button.classList.toggle('active');
            navbarList.classList.toggle('visible');
        }
    })
}

export function showComebackButton(comebackButton) {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        comebackButton.classList.remove('button-invisible');
    } else {
        comebackButton.classList.add('button-invisible');
    }
}

export function backToTop(comebackButton) {

    comebackButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

export function showProgramContent(programServices, programPanels, programPanelsContainer) {

    for (let i = 0; i < programServices.length; i++) {
        programPanelsContainer.style.display = 'none';
        programPanels[i].style.display = 'none';

        programServices[i].addEventListener('click', () => {

            programPanelsContainer.style.display = 'flex';

            for (const content of programPanels) {
                content.style.display = 'none';
                programPanels[i].style.display = 'flex';
                programPanels[i].classList.add('content-visible');    
            }
            
            for (const service of programServices) {
                service.classList.remove('service-active');
            }

            programServices[i].classList.add('service-active');
            
        })
    }
}

export const createGallery = (galleryDiv, pictures) => {

    for (const picture of pictures) {
        const pictureDiv = document.createElement('div');
        const image = document.createElement('img');
        pictureDiv.className = 'gallery-section__gallery-card';
        galleryDiv.appendChild(pictureDiv);
        pictureDiv.appendChild(image);
        image.src = `/data/pictures/gallery/${picture.title}`
    }
}

let slideIndex = 1;

export function plusSlides(n, slides) {

    showSlides(slideIndex += n, slides);
}

export function showSlides(n, slides) {
    
    let i;
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    
    slides[slideIndex-1].style.display = "flex";  
    slides[slideIndex-1].style.justifyContent = "center";  
}