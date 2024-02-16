// Open and close Submenu Access

function closeOpenMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    let closeButton = document.querySelector('.close-menu');
    let openButton = document.querySelector('.open-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        closeButton.classList.add('hidden-menu');
        openButton.classList.remove('hidden-menu');
    }
}

function toggleAccessMenu(menuId) {
    let menu = document.getElementById(menuId);
    menu.classList.toggle('show-access-submenu');
    closeOpenMenu();
}

let accessButton = document.getElementById('accessButton');
accessButton.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleAccessMenu('accessMenu');
});

document.addEventListener('click', function (event) {
    let accessMenu = document.getElementById('accessMenu');
    if (!event.target.closest('#accessMenu') && event.target !== accessButton) {
        accessMenu.classList.remove('show-access-submenu');
    }
});

// Open and close Submenu Solution

document.addEventListener('DOMContentLoaded', function () {
    let solutionsButton = document.getElementById('solutionsButton');
    let solutionsMenu = document.getElementById('solutionsMenu');
    let openSvg = document.getElementById('open-solution-svg');
    let closeSvg = document.getElementById('close-solution-svg');

    solutionsButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (solutionsMenu.classList.contains('show-solutions-submenu')) {
            solutionsMenu.classList.remove('show-solutions-submenu');
            openSvg.style.display = 'initial';
            closeSvg.style.display = 'none';
        } else {accessButton
            solutionsMenu.classList.add('show-solutions-submenu');
            openSvg.style.display = 'none';
            closeSvg.style.display = 'initial';
        }
    });

    document.addEventListener('click', function (event) {
        let accessButton = document.getElementById('accessButton');

        if (
            !event.target.closest('#solutionsMenu') &&
            event.target !== accessButton &&
            event.target !== solutionsButton
        ) {
            solutionsMenu.classList.remove('show-solutions-submenu');
            openSvg.style.display = 'initial';
            closeSvg.style.display = 'none';
        }
    });
});

// Open and close mobile Menu

function openMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    let openButton = document.querySelector('.open-menu');
    let closeButton = document.querySelector('.close-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        closeButton.classList.add('hidden-menu');
        openButton.classList.remove('hidden-menu');
        document.body.style.overflow = 'initial';
    } else {
        menuMobile.classList.add('open');
        closeButton.classList.remove('hidden-menu');
        openButton.classList.add('hidden-menu');
        document.body.style.overflow = 'hidden';
    }

    document.addEventListener('click', function (event) {
        let menuMobile = document.querySelector('.mobile-menu');
        let openButton = document.querySelector('.open-menu');
        let closeButton = document.querySelector('.close-menu');
    
        if (
            !event.target.closest('.mobile-menu') &&
            !event.target.closest('.open-menu') &&
            menuMobile.classList.contains('open')
        ) {
            menuMobile.classList.remove('open');
            closeButton.classList.add('hidden-menu');
            openButton.classList.remove('hidden-menu');
            document.body.style.overflow = 'initial';
        }
    });
    
}

// Open and close menu sidebar Tablet and Mobile

document.addEventListener('DOMContentLoaded', function () {
    let solutionsButtonMobile = document.querySelector('.solutionsButtonMobile');
    let solutionsMenuMobile = document.getElementById('solutionsMenumobile');
    let openSvgMobile = document.getElementById('open-solution-svg-mobile');
    let closeSvgMobile = document.getElementById('close-solution-svg-mobile');

    solutionsButtonMobile.addEventListener('click', function (event) {
        event.stopPropagation();
        if (solutionsMenuMobile.classList.contains('show-solutions-submenu')) {
            solutionsMenuMobile.classList.remove('show-solutions-submenu');
            openSvgMobile.style.display = 'initial';
            closeSvgMobile.style.display = 'none';
        } else {
            solutionsMenuMobile.classList.add('show-solutions-submenu');
            openSvgMobile.style.display = 'none';
            closeSvgMobile.style.display = 'initial';
        }
    });

    document.addEventListener('click', function (event) {
        if (
            !event.target.closest('#solutionsMenumobile') &&
            event.target !== solutionsButtonMobile
        ) {
            solutionsMenuMobile.classList.remove('show-solutions-submenu');
            openSvgMobile.style.display = 'initial';
            closeSvgMobile.style.display = 'none';
        }
    });
});
