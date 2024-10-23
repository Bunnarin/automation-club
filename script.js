document.addEventListener('DOMContentLoaded', function() {
    // Add a simple animation to the header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        header.style.opacity = '1';
    }, 500);

    // Add a click event to the profile image
    const profileImage = document.getElementById('profile-image');
    profileImage.addEventListener('click', function() {
        alert('Thanks for viewing my portfolio!');
    });
});
//hi
