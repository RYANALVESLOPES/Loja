document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navigation = document.getElementById('pag');

    hamburgerButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
    });
});