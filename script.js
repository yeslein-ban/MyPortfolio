// Mostrar sección de formación al girar el about
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...
	const aboutSection = document.querySelector('.about');
	const btnFormacion = document.querySelector('.dirformacion');
	const btnVolver = document.querySelector('.volver-btn');
	if (aboutSection && btnFormacion && btnVolver) {
		btnFormacion.addEventListener('click', function() {
			aboutSection.classList.add('about-girado');
		});
		btnVolver.addEventListener('click', function() {
			aboutSection.classList.remove('about-girado');
		});
	}
});
// Scroll a una sección por id
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}
// Envío de formulario con EmailJS y notificación
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...
	if (window.emailjs) {
		emailjs.init('BbpUHCAus9fylf9VQ'); // <-- Reemplaza con tu User ID de EmailJS
	}
	const form = document.getElementById('contactForm');
	const formMsg = document.getElementById('formMsg');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const nombre = form.nombre.value;
			const email = form.email.value;
			const mensaje = form.mensaje.value;
			const btn = form.querySelector('button[type="submit"]');
			if (btn) btn.disabled = true;
			if (formMsg) formMsg.textContent = '';
			// Configura tu servicio y template de EmailJS
			// Asegúrate de que tu template de EmailJS tenga un campo "to_email" y esté configurado para enviar a yeslein.bandera@gmail.com
			emailjs.send('service_y7n9idl', 'template_pp1idng', {
				from_name: nombre,
				from_email: email,
				message: mensaje,
				to_email: 'yeslein.bandera@gmail.com'
			})
			.then(function() {
				if (formMsg) formMsg.textContent = '¡Mensaje enviado exitosamente!';
				if (btn) btn.disabled = false;
				form.reset();
			}, function(error) {
				if (formMsg) formMsg.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
				if (btn) btn.disabled = false;
			});
		});
	}
});
// Animación de barras de skills
function animateSkillBars() {
	const bars = document.querySelectorAll('.progress-bar');
	bars.forEach(bar => {
		const value = bar.getAttribute('data-skill');
		bar.style.width = '0';
		setTimeout(() => {
			bar.style.width = value + '%';
		}, 100); // pequeño delay para asegurar el render
	});
}

// Detectar cuando la sección de skills entra en pantalla
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...
	const skillsSection = document.getElementById('abilites');
	let skillsAnimated = false;
	if (skillsSection) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !skillsAnimated) {
					animateSkillBars();
					skillsAnimated = true;
				}
			});
		}, { threshold: 0.3 });
		observer.observe(skillsSection);
	}
});
// Scroll suave al hacer click en los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
	// ...existing code...
	const navLinks = document.querySelectorAll('.nav-links a');
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			const targetId = this.getAttribute('href');
			if (targetId && targetId.startsWith('#')) {
				e.preventDefault();
				const section = document.querySelector(targetId);
				if (section) {
					section.scrollIntoView({ behavior: 'smooth' });
				}
				// Cierra el menú hamburguesa si está abierto
				const navMenu = document.querySelector('.nav-menu');
				if (navMenu && navMenu.classList.contains('active')) {
					navMenu.classList.remove('active');
				}
			}
		});
	});
});
// Menú hamburguesa: mostrar/ocultar menú
document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu');
	if (hamburger && navMenu) {
		hamburger.addEventListener('click', function() {
			navMenu.classList.toggle('active');
		});
	}
});


