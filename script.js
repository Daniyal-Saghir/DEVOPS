document.addEventListener('DOMContentLoaded', () => {
    const colorBtn = document.getElementById('colorBtn');
    
    if (colorBtn) {
        colorBtn.addEventListener('click', () => {
            alert('Interactive script working successfully! Welcome to your DevOps deployment.');
        });
    }
});