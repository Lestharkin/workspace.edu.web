const form = document.querySelector('#form-1')

const formElements = {
    name: document.querySelector('#name'),
    lastname: document.querySelector('#lastname'),
    email: document.querySelector('#email'),
    password: document.querySelector('#passwd'),
    password2: document.querySelector('#repasswd'),
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let successful = true;
    const formGroup = document.querySelectorAll('.form-group')
    console.log(formElements.name.value);
    
    if(!validateName(formElements.name.value)) {
        formGroup[0].appendChild(error('El nombre no es válido'))
        successful = false
    }


    if (successful) {
        form.submit()
    }
})

const error = (msg) => {
    const small = document.createElement('small')
    small.textContent = msg
    small.classList.add('form-text')
    small.classList.add('text-danger')
    const div = document.createElement('div')
    div.appendChild(small)
    return div
}

const errorTemplate = (msg) => {
    return `
    <div class="text-end p-2">
        <small class="form-text text-danger">${msg}</small>
    </div>
    `
}

const validateName = (name) => {    
    if (name.length === 0) {
        return false
    }
    const r = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/
    return r.test(name)
}

