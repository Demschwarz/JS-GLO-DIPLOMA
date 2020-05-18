const calc = () => {
    const switchCam = document.querySelector('.onoffswitch-label.label-type'),
        switchBottom = document.querySelector('.onoffswitch-label.label-bottom'),
        switchCamInput = document.querySelector('.onoffswitch-checkbox.input-type'),
        switchBottomInput = document.querySelector('.onoffswitch-checkbox.input-bottom'),
        collapseOne = document.getElementById('collapseOne'),
        collapseTwo = document.getElementById('collapseTwo'),
        collapseThree = document.getElementById('collapseThree'),
        collapseFour = document.getElementById('collapseFour'),
        calcResult = document.getElementById('calc-result'),
        second = document.querySelector('.second'),
        first = document.querySelector('.first'),
        selects = document.querySelector('.constructor').querySelectorAll('select'),
        inputs = document.querySelector('.constructor').querySelectorAll('input');
    const collapses = [collapseOne, collapseTwo, collapseThree, collapseFour];
    second.style.display = 'none'
    // collapseTwo.classList.toggle('in');
    // collapseThree.classList.toggle('in');
    // collapseFour.classList.toggle('in');
    let flag = true;
    let flag2 = true;
    const recount = () => {
        let basicPrice = 10000;
        if (!flag) {
            basicPrice = 15000;
        }
        let counter = basicPrice;
        counter += basicPrice * (first.querySelector('.diam').value == '2' ? 0.2 : 0);
        if (first.querySelector('.count').value == '2') {
            counter += basicPrice * 0.3;
        } else{
            if (first.querySelector('.count').value == '3') {
                counter += basicPrice * 0.5;
            }
        }
        if (!flag) {
            counter += basicPrice * (second.querySelector('.diam').value == '2' ? 0.2 : 0);
            if (second.querySelector('.count').value == '2') {
                counter +=basicPrice * 0.3;
            } else{
                if (second.querySelector('.count').value == '3') {
                    counter +=basicPrice * 0.5;
                }
            }
        }
        if (flag2) {
            if (flag2 && !flag) {
                counter += 1000;
            }
            counter += 1000;
        }
        calcResult.value = counter;
    };
    switchCam.addEventListener('click', () => {
        if (flag) {
            flag = false;
            second.style.display = 'block';
            recount();
        } else {
            flag = true;
            second.style.display = 'none';
            recount();
        }
    })
    switchBottom.addEventListener('click', () => {
        if (flag2) {
            flag2 = false;
            recount();
        } else {
            flag2 = true;
            recount()
        }
    })
    recount();
    selects.forEach((elem) => {
        elem.addEventListener('change', recount)
    }); // для инпутов запуск функции работает при их изменении, смотри выше

    document.querySelector('.constructor').querySelector('.panel-group').addEventListener('click', (event) => {
        if ((event.target.tagName == 'A' && event.target.classList.contains('construct-btn')) || event.target.classList.contains('constructor-span')) {
            const target = event.target.closest('.panel-collapse');
            let flag = false;
            collapses.forEach((elem) => {
                if (elem == target) {
                    flag = true;
                    elem.classList.toggle('in')
                } else {
                    if (flag) {
                        elem.classList.toggle('in');
                        flag = false
                    }
                }
            })
        } else {
            let target = event.target.closest('.panel-default').querySelector('.panel-collapse');
            event.preventDefault()
            collapses.forEach((elem) => {
                if (elem !== target) {
                    if (elem.classList.contains('in')) {
                        elem.classList.toggle('in');
                    }
                } else {
                    if (!elem.classList.contains('in')) {
                        elem.classList.toggle('in');
                    }
                }
            })
        }
    })
}
calc();