const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        callForm = document.querySelector('.popup-call').querySelector('.capture-form'),
        discountForm = document.querySelector('.popup-discount').querySelector('.capture-form'),
        consultForm = document.querySelector('.popup-consultation').querySelector('.capture-form'),
        mainForm = document.querySelector('.main-form'),
        sectionForm = document.querySelector('.section-form').querySelector('.capture-form'),
        checkingForm = document.querySelector('.popup-check').querySelector('.capture-form'),
        forms = [callForm, discountForm, consultForm, mainForm, sectionForm, checkingForm];
// document.querySelector('.popup-call').style.display = 'block';
    const bindingForm = (form) => {
        const statusMessage = document.createElement('div');
        form.addEventListener('submit', (event) =>  {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            const inputs = form.querySelectorAll('input');
            inputs.forEach(elem => elem.value = '');
            if (form === consultForm){
                body['qst'] = document.querySelector('input[name="user_quest"]').value;
                document.querySelector('input[name="user_quest"]').value = '';
            }
            if (form == discountForm) {
                if (document.getElementById('inputLen').value !== '') {
                    body['diamFirst'] = document.querySelector('.first').querySelector('.diam').value;
                    body['countFirst'] = document.querySelector('.first').querySelector('.count').value;
                    if (document.querySelector('.second').style.display == 'block') {
                        body['diamSecond'] = document.querySelector('.second').querySelector('.diam').value;
                        body['countSecond'] = document.querySelector('.second').querySelector('.count').value;
                    }
                    if (document.querySelector('input[name="onoffswitch-two"]').hasAttribute('sas')) {
                        body['bottom'] = 'true';
                    } else {
                        body['bottom'] = 'false';
                    }
                    body['rasst'] = document.getElementById('inputLen').value;
                }
            }
            postData(body)
                .then((response) => {
                    if (response.status != 200) {
                        throw new Error('network status is not 200');
                    }
                    statusMessage.textContent = sucsessMessage;
                    setTimeout(() => form.removeChild(statusMessage), 10000)
                    
                })
                .catch(error => {
                    console.error(error);
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => form.removeChild(statusMessage), 10000)
                });
        });
        
        const postData = (body) => {
            return fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                        },
                body: JSON.stringify(body)
            });
    }
    }
    forms.forEach(elem => bindingForm(elem));
    const setReg = () => {
        const nameForms = document.querySelectorAll('[name="user_name"]');
        const telForms = document.querySelectorAll('[name="user_phone"]');
        const questForms = document.querySelectorAll('[name="user_quest"]');
        nameForms.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^А-яа-я ]/g, '');
            })
        });
        telForms.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^+0-9]/g, '');
            })
        });
        questForms.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^А-Яа-я.,:?()"! ]/g, '');
            })
        });
    }
    setReg();
}
sendForm()