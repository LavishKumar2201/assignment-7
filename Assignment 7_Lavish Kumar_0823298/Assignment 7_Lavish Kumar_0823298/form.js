let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: "required",
            gender: "required"
        },
        messages: {
            name: "Please enter your name",
            gender: "Please select your gender"
        }
    });

    $("#contactForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: "required",
            address: "required"
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: "Please enter a valid phone number",
            address: "Please enter your address"
        }
    });

    $("#paymentForm").validate({
        rules: {
            creditcard: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            expiration: "required",
            cvv: {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 3
            }
        },
        messages: {
            creditcard: {
                required: "Please enter a 10-digit credit card number",
                digits: "Please enter digits only",
                minlength: "Credit card number must be 10 digits",
                maxlength: "Credit card number must be 10 digits"
            },
            expiration: "Please enter the expiration date",
            cvv: {
                required: "Please enter a 3-digit CVV",
                digits: "Please enter digits only",
                minlength: "CVV must be 3 digits",
                maxlength: "CVV must be 3 digits"
            }
        }
    });
});
