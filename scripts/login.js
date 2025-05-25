document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Aquí iría la lógica de autenticación
        console.log('Login attempt:', { email, password });
        
        // Por ahora solo redirigimos al index
        window.location.href = '../index.html';
    });
}); 