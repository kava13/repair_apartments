let button = document.querySelector('.button');
let modalDialog = document.querySelector('.modal-dialog');
let modalDialogs = document.querySelectorAll('.modal-dialog');
let modalDialogClose = document.querySelector('.modal-dialog__close');



// Модальное окно


// $(".modal-dialog").each(function () {
//     $(this).wrap('<div class="overlay"></div>')
// });


// $(".button").on('click', function (e) {

//     e.preventDefault();
//     e.stopImmediatePropagation;

//     $('.modal-dialog').parents(".overlay").addClass("open");
//     setTimeout(function () {
//         $('.modal-dialog').addClass("open");
//     }, 350);

//     console.log($(modal).parents());


//     $(document).on('click', function (e) {
//         console.log(e.target);
//         var target = $(e.target);

//         console.log(target);


//         if (target.hasClass("overlay")) {
//             $(target).find(".modal-dialog").each(function () {
//                 $(this).removeClass("open");
//             });
//             setTimeout(function () {
//                 target.removeClass("open");
//             }, 350);
//         }

//     });

// });

$(".modal-dialog__close").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    $('.modal-dialog').removeClass("open");
    setTimeout(function () {
        $('.modal-dialog').parents(".overlay").removeClass("open");
    }, 350);

});



modalDialogs.forEach(function (element) {

    const wrapper = document.createElement('div');
    wrapper.className = 'overlay';
    console.log(element.parentNode);
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

});

button.addEventListener('click', function (event) {

    event.preventDefault();

    modalDialog.parentNode.classList.add('open');
    setTimeout(function () {
        modalDialog.classList.add("open");
    }, 350);

    document.addEventListener('click', function (event) {

        if (event.target.classList.contains('overlay')) {
            modalDialog.classList.remove('open');
            setTimeout(function () {
                event.target.classList.remove("open");
            }, 350);
        }

    })

})

modalDialogClose.addEventListener('click', function (event) {

    event.preventDefault();
    modalDialog.classList.remove('open');
    setTimeout(function () {
        modalDialog.parentNode.classList.remove("open");
    }, 350);


})













$(document).ready(function () {

    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    })

    $('#brif-form').validate({});
    console.log("fff");

});