document.addEventListener('DOMContentLoaded'), function() {
    const btnFormacion = document.getElementById('btn-formacion');
    const volverBtn = document.querySelector('.volver-btn');
    const aboutSection = document.getElementById('about-me');
    const formacionSection = document.getElementById('formacion');
    
    // Mostrar sección de formación con animación de giro
    btnFormacion.addEventListener('click', function() {
        aboutSection.classList.add('about-girado');
    });
    
    // Volver a la sección about me
    volverBtn.addEventListener('click', function() {
        aboutSection.classList.remove('about-girado');
    });

    setTimeout(animateSkillBars, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    function toggleMenu() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            hamburger.innerHTML = '&times;';
            hamburger.setAttribute('aria-label', 'Cerrar menú');
        } else {
            hamburger.innerHTML = '&#9776;';
            hamburger.setAttribute('aria-label', 'Abrir menú');
        }
    }
    hamburger.addEventListener('click', toggleMenu);
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
            hamburger.setAttribute('aria-label', 'Abrir menú');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    setTimeout(animateSkillBars, 500);
});



// Función para desplazarse a una sección específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateSkillBars, 500);
});


function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const skillPercentage = bar.getAttribute('data-skill');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = skillPercentage + '%';
        }, 200);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateSkillBars, 500);
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

