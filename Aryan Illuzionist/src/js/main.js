import * as scriptModule from "/js/script.js";

import { galleryPictures } from "./data.js";

export function main() {

    //------------------------------------------------------------------------------- Header Section

    const hambiButton = document.getElementById('header__hambi-menu');
    const navbarList = document.getElementById('navbar-list');

    //------------------------------------------------------------------------------- Program Section

    const programPanelsContainer = document.getElementById('program-section__panels-container');
    const programPanels = document.getElementsByClassName('program-section__panel');
    const programServices = document.getElementsByClassName('program-service');

    //------------------------------------------------------------------------------- Gallery Section

    const galleryDiv = document.querySelector('.gallery-section__gallery-div');
    const slides = document.getElementsByClassName('gallery-section__gallery-card');
    const galleryButtonLeft = document.getElementById('gallery-section__prev-button');
    const galleryButtonRight = document.getElementById('gallery-section__next-button');

    //-------------------------------------------------------------------------------

    scriptModule.hambiMenuActive(hambiButton, navbarList);
    scriptModule.showProgramContent(programServices, programPanels, programPanelsContainer);
    scriptModule.createGallery(galleryDiv, galleryPictures)

    let slideIndex = 1;
    scriptModule.showSlides(slideIndex, slides, slideIndex);

    galleryButtonLeft.addEventListener('click', () => {
        scriptModule.plusSlides(-1, slides);
    })
    ;
    galleryButtonRight.addEventListener('click', () => {
        scriptModule.plusSlides(1, slides);
    });


    const comebackButton = document.getElementById('comeback-button');

    window.addEventListener('scroll', () => {
        scriptModule.showComebackButton(comebackButton);
    });

    scriptModule.backToTop(comebackButton);    

}