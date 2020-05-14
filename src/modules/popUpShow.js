const popUpShow = () => {
    const callBtns = document.querySelectorAll('a.call-btn'); // получаем кнопки
    const discountBtns = document.querySelectorAll('.discount-btn');
    const consultBtns = document.querySelectorAll('.director-btn');
    const callPopUp = document.querySelector('.popup-call'); // получаем формыы
    const discountPopUp = document.querySelector('.popup-discount');
    const consultPopUp = document.querySelector('.popup-consultation');

    const popUpList = [callBtns, discountBtns];
    const popUps = [callPopUp, discountPopUp];

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
        if (elem == callPopUp) {
            togglePopUp(callPopUp);
        } else {
            togglePopUp(discountPopUp);
    }
    }

    const bind = () => {
        popUpList.forEach((elem) => {
        elem.forEach((btn) => {
            btn.addEventListener('click', () => checkPopUp(elem))
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