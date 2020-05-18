const accordMenu = () => {
    let activePanel = document.querySelector('.questions').querySelector('.panel-default');
    const panelGroup = document.querySelector('.questions').querySelector('.panel-group');
    panelGroup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName == 'a') {
            event.preventDefault()
        }
        target = event.target.closest(".panel-default");
        target.querySelector('.panel-collapse').classList.toggle('in');
        activePanel.querySelector('.panel-collapse').classList.toggle('in');
        activePanel = target;
    })
}

// accordMenu();
export default accordMenu;