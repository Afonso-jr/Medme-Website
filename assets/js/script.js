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

// Change border color of select element on Features and its igms

document.addEventListener('DOMContentLoaded', function() {
    const featureInfos = document.querySelectorAll('.features-info');
    const featureImages = document.querySelectorAll('.features-solutions img');

    function changeImageOnScroll() {
        const windowHeight = window.innerHeight;
        featureInfos.forEach(function(info, index) {
            const rect = info.getBoundingClientRect();
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                featureInfos.forEach(function(otherInfo) {
                    otherInfo.classList.remove('features-selected');
                });

                info.classList.add('features-selected');

                featureImages.forEach(function(image) {
                    image.classList.remove('img-selected');
                });

                featureImages[index].classList.add('img-selected');
            }
        });
    }

    changeImageOnScroll();

    document.addEventListener('scroll', throttle(changeImageOnScroll, 500));

    featureInfos.forEach(function(info, index) {
        info.addEventListener('click', function() {
            featureInfos.forEach(function(otherInfo) {
                otherInfo.classList.remove('features-selected');
            });

            this.classList.add('features-selected');

            featureImages.forEach(function(image) {
                image.classList.remove('img-selected');
            });

            featureImages[index].classList.add('img-selected');
        });
    });

    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }
});

// Open and close answer question

document.addEventListener('DOMContentLoaded', function () {
    let facQuestions = document.querySelectorAll('.fac-question');

    facQuestions.forEach(function(facQuestion) {
        let answerPTag = facQuestion.nextElementSibling;
        let openSvg = facQuestion.querySelector('.open-question');
        let closeSvg = facQuestion.querySelector('.close-question');

        facQuestion.addEventListener('click', function (event) {
            event.stopPropagation();
            if (answerPTag.classList.contains('answer-show')) {
                answerPTag.classList.remove('answer-show');
                openSvg.style.display = 'initial';
                closeSvg.style.display = 'none';
            } else {
                answerPTag.classList.add('answer-show');
                openSvg.style.display = 'none';
                closeSvg.style.display = 'initial';
            }
        });
    });
});

// System for both selections of options on Form section

document.addEventListener('DOMContentLoaded', function() {
    var selectedOption = document.querySelector('.selected-option');
    var optionsList = document.querySelector('.options-list');
    var hiddenInput = document.getElementById('iprofile');
    var lastSelectedIcon = null;

    selectedOption.addEventListener('click', function() {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        var isClickInside = selectedOption.contains(event.target) || optionsList.contains(event.target);
        if (!isClickInside) {
            optionsList.style.display = 'none';
        }
    });

    optionsList.addEventListener('click', function(event) {
        var listItem = event.target.closest('li');
        if (listItem) {
            var selectedText = listItem.textContent.trim();
            var atIndex = selectedText.indexOf('@');
            var name = selectedText.substring(0, atIndex).trim();
            var rest = selectedText.substring(atIndex);
            selectedOption.innerHTML = `<strong>${name}</strong> &nbsp;${rest}`;
            selectedOption.classList.add('selected');
            hiddenInput.value = listItem.getAttribute('data-value');
            optionsList.style.display = 'none';
    
            if (lastSelectedIcon) {
                lastSelectedIcon.remove();
            }
    
            var arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            arrowIcon.setAttribute('class', 'arrow-icon');
            arrowIcon.setAttribute('width', '20');
            arrowIcon.setAttribute('height', '20');
            arrowIcon.setAttribute('viewBox', '0 0 20 20');
            arrowIcon.setAttribute('fill', 'none');
            var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arrowPath.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
            arrowPath.setAttribute('stroke', '#667085');
            arrowPath.setAttribute('stroke-width', '1.66667');
            arrowPath.setAttribute('stroke-linecap', 'round');
            arrowPath.setAttribute('stroke-linejoin', 'round');
            arrowIcon.appendChild(arrowPath);
            selectedOption.appendChild(arrowIcon);
    
            var selectedIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            selectedIcon.setAttribute('class', 'selected-icon');
            selectedIcon.setAttribute('width', '20');
            selectedIcon.setAttribute('height', '20');
            selectedIcon.setAttribute('viewBox', '0 0 20 20');
            selectedIcon.setAttribute('fill', 'none');
            var selectedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            selectedPath.setAttribute('d', 'M16.6668 5L7.50016 14.1667L3.3335 10');
            selectedPath.setAttribute('stroke', '#2996CC');
            selectedPath.setAttribute('stroke-width', '1.66667');
            selectedPath.setAttribute('stroke-linecap', 'round');
            selectedPath.setAttribute('stroke-linejoin', 'round');
            selectedIcon.appendChild(selectedPath);
            listItem.appendChild(selectedIcon);
            lastSelectedIcon = selectedIcon;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var selectedOption = document.querySelectorAll('.selected-option')[1];
    var optionsList = document.querySelectorAll('.options-list')[1];
    var hiddenInput = document.getElementById('isubject');
    var lastSelectedIcon = null;

    selectedOption.addEventListener('click', function() {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        var isClickInside = selectedOption.contains(event.target) || optionsList.contains(event.target);
        if (!isClickInside) {
            optionsList.style.display = 'none';
        }
    });

    optionsList.addEventListener('click', function(event) {
        var listItem = event.target.closest('li');
        if (listItem || event.target.tagName === 'STRONG') {
            if (event.target.tagName === 'STRONG') {
                listItem = event.target.parentElement;
            }
            var selectedText = listItem.textContent.trim();
            var atIndex = selectedText.indexOf('@');
            var name = selectedText.substring(0, atIndex).trim();
            var rest = selectedText.substring(atIndex);
            selectedOption.innerHTML = `<strong>${name}</strong> &nbsp;${rest}`; 
            selectedOption.classList.add('selected'); 
            hiddenInput.value = listItem.getAttribute('data-value');
            optionsList.style.display = 'none';

            if (lastSelectedIcon) {
                lastSelectedIcon.remove();
            }

            var arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            arrowIcon.setAttribute('class', 'arrow-icon');
            arrowIcon.setAttribute('width', '20');
            arrowIcon.setAttribute('height', '20');
            arrowIcon.setAttribute('viewBox', '0 0 20 20');
            arrowIcon.setAttribute('fill', 'none');
            var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arrowPath.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
            arrowPath.setAttribute('stroke', '#667085');
            arrowPath.setAttribute('stroke-width', '1.66667');
            arrowPath.setAttribute('stroke-linecap', 'round');
            arrowPath.setAttribute('stroke-linejoin', 'round');
            arrowIcon.appendChild(arrowPath);
            selectedOption.appendChild(arrowIcon);

            var selectedIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            selectedIcon.setAttribute('class', 'selected-icon');
            selectedIcon.setAttribute('width', '20');
            selectedIcon.setAttribute('height', '20');
            selectedIcon.setAttribute('viewBox', '0 0 20 20');
            selectedIcon.setAttribute('fill', 'none');
            var selectedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            selectedPath.setAttribute('d', 'M16.6668 5L7.50016 14.1667L3.3335 10');
            selectedPath.setAttribute('stroke', '#2996CC');
            selectedPath.setAttribute('stroke-width', '1.66667');
            selectedPath.setAttribute('stroke-linecap', 'round');
            selectedPath.setAttribute('stroke-linejoin', 'round');
            selectedIcon.appendChild(selectedPath);
            listItem.appendChild(selectedIcon);
            lastSelectedIcon = selectedIcon; 
        }
    });
});


// Validation and submisstion of form data with captcha and loading button

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    let formArea = document.querySelector('.form-infos');
    let userSubmitResponse = document.querySelector('.form-success-message');
    let loader = document.querySelector('.loader');
    let formButton = document.querySelector('.div-button');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (grecaptcha.getResponse() === '') {
            alert('Por favor, preencha o reCAPTCHA.');
            return;
        }

        loader.style.display = 'inline-block';
        formButton.style.display = 'none';

        $.ajax({
            url: "https://formsubmit.co/ajax/afonso@medmesaude.com.br",
            method: "POST",
            dataType: "json",
            data: {
                name: $('#iname').val(),
                surname: $('#isurname').val(),
                profile: $('#iprofile').val(),
                subject: $('#isubject').val(),
                email: $('#iemail').val(),
                phone: $('#iphone').val(),
                privacyPolicy: $('#iprivacy-policy').val(),
                // 'g-recaptcha-response': grecaptcha.getResponse()
            }
        })
        .done((response) => {
            console.log(response)
            formArea.style.display = 'none';
            userSubmitResponse.classList.add('show');
        })
        .fail(function (response) {
            console.log(response.responseText);
            location.reload();
        })
        .always(function() {
            loader.style.display = 'none';
            formButton.style.display = 'inline-block';
        });
    });
});

// Validate telefone on form 

function formatarTelefone(input) {
    let phoneNumber = input.value.replace(/\D/g, '');

    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.substring(0, 11);
    }

    let formattedPhoneNumber = '(' + phoneNumber.substring(0, 2);

    if (phoneNumber.length > 2) {
        formattedPhoneNumber += ') ' + phoneNumber.substring(2, 7);
    }

    if (phoneNumber.length > 7) {
        formattedPhoneNumber += '-' + phoneNumber.substring(7);
    }

    input.value = formattedPhoneNumber;
}

// Slider section for Even and Odd row

var partnersImg = document.querySelectorAll(".partners-imgs-odd");

partnersImg.forEach(function(partnersImgs) {
    var copy = partnersImgs.cloneNode(true);
    var slider = partnersImgs.closest(".slider");
    slider.insertBefore(copy, partnersImgs.nextSibling);
}
);
