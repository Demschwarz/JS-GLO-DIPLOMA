const calc = () => {
    const switchCam = document.querySelector('.onoffswitch-label'),
        switchInput = document.querySelector('.onoffswitch-checkbox'),
        collapseTwo = document.querySelector('#collapseTwo'),
        collapseThree = document.querySelector('#collapseThree'),
        collapseFour = document.querySelector('#collapseFour'),
        second = document.querySelector('.second');
    second.style.display = 'none'
    collapseTwo.classList.toggle('in');
    collapseThree.classList.toggle('in');
    collapseFour.classList.toggle('in');
    switchCam.addEventListener('click', () => { // если true, то двухкамерный
        if (switchInput.hasAttribute('checked')) {
            switchInput.removeAttribute('checked');
            second.style.display = 'none';
        } else {
            switchInput.setAttribute('checked', true);
            second.style.display = 'block';
        }
    })
}

calc();