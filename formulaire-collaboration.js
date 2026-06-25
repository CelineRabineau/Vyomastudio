const form = document.getElementById('collabForm');
const successMessage = document.getElementById('collabSuccess');

if (form && successMessage) {
    form.addEventListener('submit', async function (e) {
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
}