const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        test = document.querySelector('.popup-call').querySelector('.capture-form');
document.querySelector('.popup-call').style.display = 'block';
    const bindingForm = (form) => {
        const inputs = form.querySelectorAll('input');
        const btn = form.querySelector('button');
        const telInput = form.querySelector('input[name="user_phone"]');
        btn.setAttribute('disabled', 'true');
        inputs.forEach((elem) => {
            elem.addEventListener('change', () => {
                if (elem.value === '') {
                    btn.setAttribute('disabled', 'true');
                } else {
                    if ((telInput.value.length >= 8) &&(telInput.value.length <= 20)){
                        btn.removeAttribute('disabled');
                    } else {
                        btn.setAttribute('disabled', 'true');
                    }
                }
            })
        });

    //     const statusMessage = document.createElement('div');
    //     form.addEventListener('submit', (event) =>  {
    //         event.preventDefault();
    //         form.appendChild(statusMessage);
    //         statusMessage.textContent = loadMessage;
    //         const formData = new FormData(form);
    //             let body = {};
    //             formData.forEach((val, key) => {
    //                 body[key] = val;
    //             });
    //             if (form == document.querySelector('.capture-form')) {
    //                 body[queation] = document.querySelector('input[name="user_quest"]').vaue;
    //             }
    //             postData(body)
    //                 .then((response) => {
    //                     if (response.status != 200) {
    //                         throw new Error('network status is not 200');
    //                     }
    //                     statusMessage.textContent = sucsessMessage;
    //                     setTimeout(() => form.removeChild(statusMessage), 10000)
                        
    //                 })
    //                 .catch(error => {
    //                     console.error(error);
    //                     statusMessage.textContent = errorMessage;
    //                     setTimeout(() => form.removeChild(statusMessage), 10000)
    //                 });
    //     });
        
    //     const postData = (body) => {
    //         return fetch('server.php', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                     },
    //             body: JSON.stringify(body)
    //         });
    // }
    }
    bindingForm(test)