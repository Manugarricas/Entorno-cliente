const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const dateOfBirthEl = document.querySelector('#fechaNacimiento');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const seePassword = document.getElementById('seePassword');
const form = document.querySelector('#signup');
const urlApi = "http://localhost:3000/"

const isRequired = value => value == '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0-9]1,3\.[0-9]1,3\.[0-9]1,3\.[0-9]1,3)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // Obtener el elemento form-field
    const formField = input.parentElement;
    // Agregar la clase de error
    formField.classList.remove('success');
    formField.classList.add('error');
    // Mostrar el mensaje de error
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // Obtener el elemento form-field
    const formField = input.parentElement;
    // Eliminar la clase de error
    formField.classList.remove('error');
    formField.classList.add('success');
    // Ocultar el mensaje de error
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
      showError(usernameEl, 'El nombre de usuario no puede estar en blanco.');
    } else if (!isBetween(username.length, min, max)) {
      showError(usernameEl, `El nombre de usuario debe tener entre ${min} y ${max} caracteres.`);
    } else {
      showSuccess(usernameEl);
      valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
      showError(emailEl, `El email no puede estar en blanco.`);
    }
    if (!isEmailValid(email)) {
      showError(emailEl, `El email tiene un formato invalido.`);
    }
    else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

function validarFecha() {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  let fechaActual = hoy.toISOString().substring(0,10);
  dateOfBirthEl.setAttribute('max', fechaActual);
}
validarFecha();

function isAdult(date) {
  isValid = false;
  let daysUser = date.split('-');
  daysUser = parseInt(daysUser[0])*365+parseInt(daysUser[1])*30+parseInt(daysUser[2]);
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  let fechaActual = hoy.toISOString().substring(0,10).split('-');
  fechaActualToDays = parseInt(fechaActual[0])*365+parseInt(fechaActual[1])*30+parseInt(fechaActual[2]);
  let mayorDeEdad = fechaActualToDays-6570;
  if (daysUser <= mayorDeEdad) {
    valid = true;
  }
  return valid;
}

const checkDateOfBirth = () => {
  let valid = false;
  const dateOfBirth = dateOfBirthEl.value.trim();
  if (!isRequired(dateOfBirth)) {
    showError(dateOfBirthEl, `La fecha de nacimiento no puede estar en blanco.`);
  }
  else if (!isAdult(dateOfBirth)) {
    showError(dateOfBirthEl, `Debes ser mayor de edad para crear una cuenta.`)
  }
  else {
    showSuccess(dateOfBirthEl);
    valid = true;
  }
  return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
      showError(passwordEl, 'La contraseña no puede estar en blanco.');
    } else if (!isPasswordSecure(password)) {
      showError(passwordEl, 'La contraseña debe tener al menos 8 caracteres que incluyan al menos 1 carácter en minúsculas, 1 carácter en mayúsculas, 1 número y 1 carácter especial en (!@#\$%\^&*).');
    } else {
      showSuccess(passwordEl);
      valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // Verificar la contraseña de confirmación
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
      showError(confirmPasswordEl, 'Por favor, ingrese la contraseña nuevamente.');
    } else if (password !== confirmPassword) {
      showError(confirmPasswordEl, 'La contraseña de confirmación no coincide.');
    } else {
      showSuccess(confirmPasswordEl);
      valid = true;
    }
    return valid;
};

let isVisible = false;
seePassword.addEventListener('click', () => {
  if (!isVisible) {
    passwordEl.setAttribute('type', 'text');
    confirmPasswordEl.setAttribute('type', 'text');
    isVisible = true;
    seePassword.textContent = "Hide password";
  }
  else {
    passwordEl.setAttribute('type', 'password');
    confirmPasswordEl.setAttribute('type', 'password');
    isVisible = false;
    seePassword.textContent = "See password";
  }
})

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // Cancelar el temporizador anterior si existe
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Configurar un nuevo temporizador
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

form.addEventListener('input', debounce((event) => {
    // Prevenir el envío del formulario
    event.preventDefault();
    switch (event.target.id) {
      case 'username':
        checkUsername();
        break;
      case 'email':
        checkEmail();
        break;
      case 'fechaNacimiento':
        checkDateOfBirth();
        break;
      case 'password':
        checkPassword();
        break;
      case 'confirm-password':
        checkConfirmPassword();
        break;
    }
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword() && checkDateOfBirth()) {
    const user = {
      "name": usernameEl.value.trim(),
      "email": emailEl.value.trim(),
      "password": passwordEl.value.trim(),
      "dateOfBirth": dateOfBirthEl.value.trim()
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', urlApi + "users", false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(user));
    xhr.addEventListener('load', () => {
      console.log(user);
    })
    location.href = "./index.html";
  }
})