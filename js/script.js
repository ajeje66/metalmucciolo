/*====================================================
    METAL MUCCIOLO
    SCRIPT.JS
====================================================*/


/*=================================
HEADER SCROLL
=================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});


/*=================================
MENU MOBILE
=================================*/

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuButton){

    menuButton.addEventListener("click",()=>{

        nav.classList.toggle("active");

        menuButton.classList.toggle("open");

    });

}


/*=================================
ANIMAZIONE SCROLL
=================================*/

const elements = document.querySelectorAll(
    ".about, .service-card, .gallery-grid img, .contact"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elements.forEach(el=>observer.observe(el));


/*=================================
LIGHTBOX GALLERIA
=================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img=document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


/*=================================
TORNA SU
=================================*/

const topButton=document.createElement("button");

topButton.id="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});