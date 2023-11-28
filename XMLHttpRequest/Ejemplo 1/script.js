const formulario = document.querySelector('#signup');
const pass = document.querySelector('#password');
const nameUser = document.querySelector('#username');
const email = document.querySelector('#email');
const passRepit = document.querySelector('#confirm-password');
const fecha = document.querySelector('#fecha_nacimiento');
const listUsers = document.getElementById('listUsers');
const buttonRegister = document.getElementById('register');

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

listarUsuarios();

function listarUsuarios() {
    const peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/users');
    peticion.send();
    peticion.addEventListener('load', () => {
        let usuarios = Array.from(JSON.parse(peticion.responseText));
        usuarios.forEach(user => {
            const li = document.createElement('li');
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.setAttribute('class', 'btn-primary');
            li.setAttribute("value",user.id);
            li.textContent = `Nombre: ${user.name}, Email: ${user.email}, Fecha nacimiento: ${user.fecha}`;
            li.setAttribute("class","list-group-item");
            li.appendChild(editBtn);
            listUsers.appendChild(li);
            editBtn.addEventListener('click', async() => {
                let valor = editBtn.parentElement.getAttribute('value');
                const response = await fetch('http://localhost:3000/users/'+valor);
                const data = await response.json();
                nameUser.value = data.name;
                email.value = data.email;
                fecha.value = data.fecha;
                pass.value = data.pass;
                passRepit.value = data.pass;
                buttonRegister.value = 'Edit';
                id = editBtn.parentElement.getAttribute('value');
            })
        })
    });
}

// async function listarUsuarios(){
//   const response = await fetch('http://localhost:3000/users');
//   const data = await response.json();

//   data.forEach(user => {
//     const li = document.createElement('li');
//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Editar';
//     editBtn.setAttribute('class', 'btn-primary');
//     li.setAttribute("value",user.id);
//     li.textContent = `Nombre: ${user.name}, Email: ${user.email}, Fecha nacimiento: ${user.fecha}`;
//     li.setAttribute("class","list-group-item");
//     li.appendChild(editBtn);
//     listUsers.appendChild(li);
//     editBtn.addEventListener('click', async() => {
//         let valor = editBtn.parentElement.getAttribute('value');
//         const response = await fetch('http://localhost:3000/users/'+valor);
//         const data = await response.json();
//         nameUser.value = data.name;
//         email.value = data.email;
//         fecha.value = data.fecha;
//         pass.value = data.pass;
//         passRepit.value = data.pass;
//         buttonRegister.value = 'Edit';
//         id = editBtn.parentElement.getAttribute('value');
//     })
//   });
// }
let id = null;

buttonRegister.addEventListener('click', (event) => {
    event.preventDefault();
    if (id != null) {
        const user = {
            name: nameUser.value,
            email: email.value,
            password: pass.value,
            fecha: fecha.value
        }
        const peticion = new XMLHttpRequest();
        peticion.open('DELETE', 'http://localhost:3000/users/'+id);
        peticion.send();
        buttonRegister.value = 'Registrarse';
    }
})

// buttonRegister.addEventListener('click', async () => {
//     event.preventDefault();
//     if (id != null) {
//         const user = {
//             name: nameUser.value,
//             email: email.value,
//             password: pass.value,
//             fecha: fecha.value
//         }
//         const response = await fetch('http://localhost:3000/users/'+id, {
//             method: 'PUT',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify(user)
//         });
//         buttonRegister.value = 'Registrarse';
//     }
// })

const isEmailValid = (email) => {
    const re = /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0−9]1,3\.[0−9]1,3\.[0−9]1,3\.[0−9]1,3)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*])(?=.{8,})");
    return re.test(password);
};

const isDateValid2 = (date) =>{
  let fechaActual = new Date();
  let vali = false;
  let year = date.split('-');
  if((fechaActual.getFullYear()-year[0])>=18){
    vali=true;
  }
  return vali;
}

const isDateValid = (date)  =>  {
  let fechaActual = new Date();
  let vali = false;
  let year = new Date(date);
  
  if (year > fechaActual) {
    vali = true;
  }

  return vali;
}

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
    const username = nameUser.value.trim();
    if (!isRequired(username)) {
      showError(nameUser, 'El nombre de usuario no puede estar en blanco.');
    } else if (!isBetween(username.length, min, max)) {
      showError(nameUser, `El nombre de usuario debe tener entre ${min} y ${max} caracteres.`);
    } else {
      showSuccess(nameUser);
      valid = true;
    }
    return valid;
  };

const checkEmailExist = async (email)=>{
      
      const response = await fetch(`http://localhost:3000/users?email=${email}`);
      const data = await response.json();
      let vali=false;
      if(data.length==0){
        vali=true;
      }
      return vali;
}

nameUser.addEventListener("change", checkUsername);

const checkEmail = async() => {
    let valid = false;
    const emailV = email.value.trim();
    if (!isRequired(emailV)) {
        showError(email, 'El email no puede estar en blanco.');
    } else if (!isEmailValid(emailV)) {
        showError(email, `El email no es valido.`);
    } else if(!await checkEmailExist(emailV)) {
        showError(email, `El email ya existe en la base de datos.`);
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
  };

email.addEventListener("change", checkEmail);

const checkPassword = () => {
    let valid = false;
    const password = pass.value.trim();
    if (!isRequired(password)) {
      showError(pass, 'La contraseña no puede estar en blanco.');
    } else if (!isPasswordSecure(password)) {
      showError(pass, `La contraseña no es segura.`);
    } else {
      showSuccess(pass);
      valid = true;
    }
    return valid;
  };

  const checkDate = () => {
    let valid = false;
    const fechaa = fecha.value;
    if (!isDateValid(fechaa)) {
      showError(fecha, 'La fecha tiene que ser despues de hoy');
    }else {
      showSuccess(fecha);
      valid = true;
    }
    return valid;
  };

  fecha.addEventListener("change", checkDate);

pass.addEventListener("change", checkPassword);

const checkConfirmPassword = () => {
    let valid = false;
    // Verificar la contraseña de confirmación
    const confirmPassword = passRepit.value.trim();
    const password = passRepit.value.trim();
    if (!isRequired(confirmPassword)) {
      showError(passRepit, 'Por favor, ingrese la contraseña nuevamente.');
    } else if (password !== confirmPassword) {
      showError(passRepit, 'La contraseña de confirmación no coincide.');
    } else {
      showSuccess(passRepit);
      valid = true;
    }
    return valid;
  };

passRepit.addEventListener("change", checkConfirmPassword);

formulario.addEventListener("submit", async (event)=>{

    event.preventDefault();

    const user = {
        name: nameUser.value,
        email: email.value,
        password: pass.value,
        fecha: fecha.value
    }
    if(checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword() && checkDate()){
        const response = await fetch ('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(user)
        })
        if(!response.ok){
            alert("Error al agregar usuario")
        }
        alert('Usuario agregado con exito')
    }else{
        alert("Algun campo del formulario es invalido!")
    }

})