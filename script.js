// Page Management
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
    
    // Update active navigation link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(pageId + '-link').classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize active page on load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-link').classList.add('active');
});

// Add hover effect to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px var(--gold-neon)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
    });
});

// WhatsApp sharing function
function shareOnWhatsApp(productName, imageUrl, price) {
    const message = `I'm interested in purchasing:\n\n*Product:* ${productName}\n*Price:* ${price}\n\nPlease provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919333917019?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("Please attach the product image when sending your message on WhatsApp.");
    }
}