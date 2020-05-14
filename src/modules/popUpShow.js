const popUpShow = () => {
    const call = document.querySelectorAll('a.call-btn');
    const popUp = document.querySelector('.popup-call');
    const togglePopUp = () => {
        popUp.style.display = 'block'
    }
    call.forEach((elem) => {
        elem.addEventListener('click', togglePopUp)
    })
    const closePopup = () => {
        popUp.style.display = 'none';
    }
    popUp.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
        } else {
        target = target.closest('.popup-content');
        if (!target) {
            popUp.style.display = 'none';
        }}
    })
    
};

export default popUpShow;