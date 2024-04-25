// src/utils/auth.js

// Función para verificar si el usuario está autenticado
export function isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;  // Convertir la presencia del token a un valor booleano
}

// Función para guardar el token en localStorage
export function saveToken(token) {
    localStorage.setItem('authToken', token);
}

export function logout() {
    localStorage.removeItem('authToken');  // Eliminar el token de localStorage
    window.location.reload();  // Recargar la página para que el usuario sea redirigido al login
}
