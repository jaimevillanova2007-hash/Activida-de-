document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para los contenedores
    const buttons = document.querySelectorAll('button[data-prop]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const prop = btn.getAttribute('data-prop');
            const value = btn.getAttribute('data-value');
            const container = btn.parentElement.nextElementSibling;
            
            container.style[prop] = value;
        });
    });

    // Lógica para los items individuales (Grow, Order, etc)
    const itemButtons = document.querySelectorAll('button[data-item-prop]');
    const specialBox = document.getElementById('special-box');

    itemButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const prop = btn.getAttribute('data-item-prop');
            const value = btn.getAttribute('data-value');
            
            specialBox.style[prop] = value;
        });
    });
});