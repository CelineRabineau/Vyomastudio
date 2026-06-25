const form = document.getElementById('sessionForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.style.display = "none";
        successMessage.style.display = "block";
    }
});