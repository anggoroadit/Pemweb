function openModal(imageSrc) {
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImg');

    modalImg.src = imageSrc;
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('imageModal');

    modal.classList.remove('show'); 
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
}

function openModal(imageSrc) {
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImg');

    modalImg.src = imageSrc;
    modal.classList.add('show'); 
}

function closeModal() {
    let modal = document.getElementById('imageModal');
    modal.classList.remove('show'); 
}

document.addEventListener("DOMContentLoaded", function () {
    let card = document.querySelector(".card");
    let isDragging = false;
    let startX, startY, initialX, initialY, rotation = 0;

    card.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = card.offsetLeft;
        initialY = card.offsetTop;
        card.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        
        let dx = e.clientX - startX;
        let dy = e.clientY - startY;

        card.style.left = `${initialX + dx}px`;
        card.style.top = `${initialY + dy}px`;
        
        rotation = dx / 5;
        card.style.transform = `rotate(${rotation}deg)`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        card.style.cursor = "grab";
    });
});

gsap.registerPlugin(Draggable);

Draggable.create(".card", {
    type: "rotation,x,y",
    inertia: true
});
