function changeImage() {
    var imagep = document.getElementById("imagencambiante");
    if (imagep.src.endsWith("assets/images/avatar.png")) {
        imagep.src = "assets/images/avatar2.png"; // Cambia a la segunda imagen
    } else {
        imagep.src = "assets/images/avatar.png"; // Vuelve a la primera imagen
    }
}

const images = document.querySelectorAll('.contefect');
console.log(images);

function triggerAnimation(entries){
    entries.forEach(entry => {
        const imageg = entry.target.querySelector('.card');

        imageg.classList.toggle('unset', entry.isIntersecting);
    });
}

const options={
    root:null,
    rootMargin:"0px",
    threshold:1
}

const observer = new IntersectionObserver(triggerAnimation);

images.forEach(image =>{
    observer.observe(image);
})