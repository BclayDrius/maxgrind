// Training Pages Shared JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize program selection buttons
    const programButtons = document.querySelectorAll('.program-card .btn');
    
    programButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get program details
            const programCard = this.closest('.program-card');
            const programName = programCard.querySelector('h3').textContent;
            const programDescription = programCard.querySelector('p').textContent;
            
            // Check if user is logged in
            const isLoggedIn = checkUserLoginStatus();
            
            if (!isLoggedIn) {
                // Redirect to login page with return URL
                const currentPage = window.location.pathname;
                window.location.href = `login.html?returnTo=${encodeURIComponent(currentPage)}`;
                return;
            }
            
            // If logged in, handle program selection
            handleProgramSelection(programName, programDescription);
        });
    });
    
    // Initialize resource cards
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        card.addEventListener('click', function() {
            const resourceName = this.querySelector('h3').textContent;
            const resourceDescription = this.querySelector('p').textContent;
            
            // Handle resource selection
            handleResourceSelection(resourceName, resourceDescription);
        });
    });
    
    // Animación para las tarjetas al hacer hover
    const cards = document.querySelectorAll('.program-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Check if user is logged in
function checkUserLoginStatus() {
    // This is a placeholder - implement actual login check logic
    return localStorage.getItem('userLoggedIn') === 'true';
}

// Handle program selection
function handleProgramSelection(programName, programDescription) {
    // Store selected program in localStorage
    localStorage.setItem('selectedProgram', JSON.stringify({
        name: programName,
        description: programDescription,
        selectedAt: new Date().toISOString()
    }));
    
    // Show success message
    showNotification(`Programa "${programName}" seleccionado con éxito.`);
    
    // Redirect to program details page
    // window.location.href = `program-details.html?program=${encodeURIComponent(programName)}`;
}

// Handle resource selection
function handleResourceSelection(resourceName, resourceDescription) {
    // Store selected resource in localStorage
    localStorage.setItem('selectedResource', JSON.stringify({
        name: resourceName,
        description: resourceDescription,
        selectedAt: new Date().toISOString()
    }));
    
    // Show success message
    showNotification(`Recurso "${resourceName}" seleccionado con éxito.`);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#007bff';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 