const popUpShow = () => {
    const callBtns = document.querySelectorAll('a.call-btn'); // получаем кнопки
    const discountBtns = document.querySelectorAll('.discount-btn');
    const consultBtns = document.querySelectorAll('.director-btn');
    const checkBtns = document.querySelectorAll('.check-btn');
    const callPopUp = document.querySelector('.popup-call'); // получаем формыы
    const discountPopUp = document.querySelector('.popup-discount');
    const consultPopUp = document.querySelector('.popup-consultation');
    const checkingPopUp = document.querySelector('.popup-check')

    const popUpList = [callBtns, discountBtns, consultBtns, checkBtns];
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
            if (elem == discountBtns) {
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