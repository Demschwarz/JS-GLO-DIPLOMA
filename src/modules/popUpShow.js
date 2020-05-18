const popUpShow = () => {
    const callBtns = document.querySelectorAll('a.call-btn'), // получаем кнопки
        discountBtns = document.querySelectorAll('.discount-btn'),
        consultBtns = document.querySelectorAll('.director-btn'),
        checkBtns = document.querySelectorAll('.check-btn'),
        constructBtns = document.querySelectorAll('button.construct-btn'),
        callPopUp = document.querySelector('.popup-call'), // получаем формыы
        discountPopUp = document.querySelector('.popup-discount'),
        consultPopUp = document.querySelector('.popup-consultation'),
        checkingPopUp = document.querySelector('.popup-check');

    const popUpList = [callBtns, discountBtns, consultBtns, checkBtns, constructBtns];
    const popUps = [callPopUp, discountPopUp, consultPopUp, checkingPopUp];

    const togglePopUp = (smth) => {
        smth.style.display = 'block'
    }

    const closePopUp = (elem) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            elem.style.display = 'none';
        } else {
        target = target.closest('.popup-content');
        if (!target) {
            elem.style.display = 'none';
        }}
    }
    const checkPopUp = (elem) =>{
        if (elem == callBtns) {
            togglePopUp(callPopUp);
        } else {
            if (elem == discountBtns || elem == constructBtns) {
                togglePopUp(discountPopUp);
            } else {
                if (elem == consultBtns) {
                    togglePopUp(consultPopUp)
                } else {
                    togglePopUp(checkingPopUp)
                }
            }
    }
    }

    const bind = () => {
        popUpList.forEach((elem) => {
            elem.forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    checkPopUp(elem)
                })
            });
            popUps.forEach((elem) => {
                elem.addEventListener('click',(event) => closePopUp(elem))
            })
    })}
    bind()
    console.log(1);
};

popUpShow(); // удали строчку, когда будешь раскомментировать следующую
// export default popUpShow;