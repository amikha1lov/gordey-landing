document.addEventListener("DOMContentLoaded", () => {

    const pay_modal_run = document.querySelector('.pay_modal_run');
    const modal_utm = document.querySelector('.modal_utm');
    const modal_method = document.querySelector('.modal_method');
    const modal_amount = document.querySelector('.modal_amount');
    const modal_type = document.querySelector('.modal_type');
    const main_pay_form = document.querySelector('.main_pay_form');
    const modal_to_pay = document.querySelector('.modal_to_pay');
    const modal_pay_form = document.querySelector('.modal_pay_form');
    const menu_open = document.querySelector('.menu_open');
    const menu_block = document.querySelector('.menu_block');


    menu_open.addEventListener('click', e => {
        menu_block.classList.toggle('mobile:block');
    });

    let swiper_about = new Swiper(".slider_about", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    let swiper_kids = new Swiper(".slider_kids", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    MicroModal.init({
        openTrigger: 'data-custom-open',
        closeTrigger: 'data-custom-close',
        disableScroll: true,
        disableFocus: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });

    pay_modal_run.addEventListener('click', e => {
       let params = (new URL(document.location)).searchParams;
       modal_utm.value = params.get("utm_source");
       modal_type.value = e.currentTarget.closest('.main_pay_form').querySelector('input[name="pay_type"]:checked').value;
       modal_method.value = e.currentTarget.closest('.main_pay_form').querySelector('input[name="pay_method"]:checked').value;
       modal_amount.value = e.currentTarget.closest('.main_pay_form').querySelector('input[name="pay_amount"]:checked').value;
    });

    modal_to_pay.addEventListener('click', e => {
       e.preventDefault();

       let data = new FormData(modal_pay_form);

        $.ajax({
            type: "POST",
            url: '/local/ajax/pay.php',
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            dataType : 'json',
            success: function(msg){
                if (msg.error == '') {
                    console.log(msg);
                } else {
                    console.log(msg);
                }
            }
        });


    });





});