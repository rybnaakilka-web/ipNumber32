$(window).on('load', function () {
    initMobileMenu();
    initScrollUpButton();
    initPopup();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initScrollUpButton() {
    $('#scrollUpArrow').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
}

function initPopup() {
    $('#subscribePopupButton').on('click', function () {
        $('#overlay, #popupWindow').addClass('visible');
    });

    $('#closeButton').on('click', function () {
        $('#overlay, #popupWindow').removeClass('visible');
    });

    $('#popupWindow').on('click', function (event) {
        if (event.target === this) {
            $('#overlay, #popupWindow').removeClass('visible');
        }
    });
}