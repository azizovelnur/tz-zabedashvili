function validatePhone(input) {
    input.value = input.value.replace(/[^0-9+()\-]/g, '');
}

document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone-input');
    const form = document.querySelector('.order-form');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            validatePhone(this);
        });
    }
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const nameInput = this.querySelector('input[name="name"]');
            const phoneInput = this.querySelector('input[name="phone"]');
            
            if (!nameInput.value.trim()) {
                e.preventDefault();
                alert('Proszę podać nazwę');
                return;
            }
            
            if (!phoneInput.value.trim()) {
                e.preventDefault();
                alert('Proszę podać numer telefonu');
                return;
            }
            
            const phoneRegex = /^[0-9+()\-]{5,}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                e.preventDefault();
                alert('Proszę podać poprawny numer telefonu');
                return;
            }
        });
    }
});