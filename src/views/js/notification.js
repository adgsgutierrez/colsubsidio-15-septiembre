import { getUrlVars } from "./utils.js";

export const validateNotification = () => {
    const message = getUrlVars().message || '';
    if(message == ''){
        return;
    }
    if(message == 'created'){
        document.getElementById('notification').classList.add('success');
        document.getElementById('notification').innerHTML = 'Tarea creada correctamente';
    }
    if(message == 'error_created'){
        document.getElementById('notification').classList.add('error');
        document.getElementById('notification').innerHTML = 'Error al crear la tarea';
    }
    if(message == 'blank'){
        document.getElementById('notification').classList.add('warning');
        document.getElementById('notification').innerHTML = 'Debe completar todos los campos';
    }
    setTimeout(() => {
        document.getElementById('notification').innerHTML = '';
        document.getElementById('notification').classList.remove('success');
        document.getElementById('notification').classList.remove('error');
        document.getElementById('notification').classList.remove('warning');
    }, 3000);
};
