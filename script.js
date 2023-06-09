// Scroll to section on link click with fading transition
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav.sidebar ul li a');
  for (const link of links) {
    link.addEventListener('click', scrollToSection);
  }
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  // Add fading transition effect
  targetSection.style.opacity = '0';
  targetSection.style.transition = 'opacity 0.5s ease-in-out';

  // Scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth' });

  // Fade in the section after scrolling
  setTimeout(function () {
    targetSection.style.opacity = '1';
  }, 500);
}

// Highlight active section in sidebar with fading transition
window.addEventListener('scroll', highlightActiveSection);

function highlightActiveSection() {
  const sections = document.querySelectorAll('section');
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`nav.sidebar ul li a[href="#${sectionId}"]`);
      removeActiveClass();
      activeLink.classList.add('active');
    }
  }
}

function removeActiveClass() {
  const activeLink = document.querySelector('nav.sidebar ul li a.active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }
}

// Smooth scroll to top on logo click with fading transition
const logo = document.querySelector('header img');
logo.addEventListener('click', function() {
  // Add fading transition effect
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.5s ease-in-out';

  // Scroll to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fade in the page after scrolling
  setTimeout(function () {
    document.documentElement.style.opacity = '1';
  }, 500);
});

// Smooth scroll to section 1 on button click with fading transition
const learnMoreButton = document.querySelector('.section1 .buttons .button:first-child');
learnMoreButton.addEventListener('click', function () {
  const section1 = document.getElementById('section1');

  // Add fading transition effect
  section1.style.opacity = '0';
  section1.style.transition = 'opacity 0.5s ease-in-out';

  // Scroll to section 1
  section1.scrollIntoView({ behavior: 'smooth' });

  // Fade in section 1 after scrolling
  setTimeout(function () {
    section1.style.opacity = '1';
  }, 500);
});

// Add active class to buttons on section 1
const exploreButton = document.querySelector('.section1 .buttons .button:last-child');
exploreButton.addEventListener('click', function () {
  removeActiveClass();
  this.classList.add('active');
});

// Toggle sidebar
const sidebar = document.querySelector('nav.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});

// Fade in and fade out subsections in Section 4
const subsections = document.querySelectorAll('.section4 .subsection');

function fadeInSubsection(index) {
  subsections[index].style.opacity = '0';
  subsections[index].style.transition = 'opacity 0.5s ease-in-out';
  subsections[index].style.zIndex =
    subsections[index].style.zIndex = '1';
setTimeout(function() {
subsections[index].style.opacity = '1';
}, 100);
}

function fadeOutSubsection(index) {
subsections[index].style.opacity = '0';
subsections[index].style.transition = 'opacity 0.5s ease-in-out';
subsections[index].style.zIndex = '-1';
}

let currentSubsectionIndex = 0;

function fadeBetweenSubsections() {
fadeOutSubsection(currentSubsectionIndex);
currentSubsectionIndex = (currentSubsectionIndex + 1) % subsections.length;
fadeInSubsection(currentSubsectionIndex);
}

setInterval(fadeBetweenSubsections, 3000);
});
