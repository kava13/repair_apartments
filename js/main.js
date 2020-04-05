console.log("Hello world");
let button = document.querySelector('#top-button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');


button.addEventListener('click', function () {
    modal.classList.add('modal_active');
    setTimeout(closeModal, 5000);
});

close.addEventListener('click', function () {
    modal.classList.remove('modal_active')
});

function closeModal() {
    modal.classList.remove('modal_active')
}

