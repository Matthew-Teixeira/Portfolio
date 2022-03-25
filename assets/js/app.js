const welcome = document.querySelector('#welcome-section');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');

welcome.style.opacity = '1'

function fadeHandler() {
    const aboutPos = about.getBoundingClientRect();
    const skillPos = skills.getBoundingClientRect();
    const projPos = projects.getBoundingClientRect();

    if(aboutPos.top < 500) {
		about.style.opacity = '1';
	}

    if(skillPos.top < 500) {
		skills.style.opacity = '1';
	}

    if(projPos.top < 500) {
		projects.style.opacity = '1';
	}
};

window.addEventListener('scroll', fadeHandler);