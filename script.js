const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw1qLtxhlqNpKo8baGtrIm1BEp0sfi7ex9ENFU3aj3DDB1qQcybOkVpew5SSYMWaAb2/exec', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Failed to submit the form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    }
});

