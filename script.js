const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz0lpvSnVNFWn1YyyFo71bHF9z7mM8GleMTsA6x3EC3KNi9TGzL-6o3KxCJvOcJUoLJ/exec', {
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

