// Glitch effect for text
ocument.addEventListener('DOMContentLoaded', () => {
   const glitchText = document.querySelector('.glitch');
   
   // Ensure data-text attribute matches the content
   glitchText.setAttribute('data-text', glitchText.textContent);
   
   function intensifyGlitch() {
       if (Math.random() < 0.2) { // Increased probability
           // Create more intense glitch
           const xShift = Math.random() * 20 - 10; // Increased range
           const yShift = Math.random() * 10 - 5;  // Added vertical shift
           
           glitchText.style.transform = `translate(${xShift}px, ${yShift}px)`;
           glitchText.style.textShadow = `
               ${Math.random() * 10 - 5}px 0 var(--neon-pink),
               ${Math.random() * -10 + 5}px 0 var(--neon-blue)
           `;
           
           // Random color flicker
           if (Math.random() < 0.3) {
               glitchText.style.color = 'var(--neon-pink)';
           }
           
           // Reset after short delay
           setTimeout(() => {
               glitchText.style.transform = 'translate(0, 0)';
               glitchText.style.textShadow = '0 0 10px var(--neon-blue)';
               glitchText.style.color = 'var(--neon-blue)';
           }, 50);
       }
   }

   // Run the effect more frequently
   setInterval(intensifyGlitch, 50);
    // Smooth scrolling for navigation
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
    // Form submission handler
   const contactForm = document.getElementById('contactForm');
   if(contactForm) {
       contactForm.addEventListener('submit', (e) => {
           e.preventDefault();
           // Add your form submission logic here
           alert('Message sent successfully!');
           contactForm.reset();
       });
   }
});
