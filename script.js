// Debounce function to limit the rate of execution of a function
function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
  }
  
  // Add class 'scrolled' to nav when scrolling
  window.addEventListener('scroll', debounce(function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
  }, 10));
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  