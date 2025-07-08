document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Flash messages
    const flashContainer = document.getElementById('flash-container');
    if (flashContainer) {
        const flashes = document.querySelectorAll('.flash-message');
        flashes.forEach(flash => {
            flashContainer.appendChild(flash);
        });
    }

    // Seat selection
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (!this.classList.contains('booked')) {
                this.classList.toggle('selected');
                const selectedSeatInput = document.getElementById('selected-seat');
                if (selectedSeatInput) {
                    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
                        .map(s => s.textContent)
                        .join(', ');
                    selectedSeatInput.value = selectedSeats;
                }
            }
        });
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
});

function showBookingForm(movieTitle) {
    document.getElementById('booking-movie').value = movieTitle;
    // In a real app, you would navigate to the booking form page with the movie title
    console.log(`Booking ${movieTitle}`);
}
