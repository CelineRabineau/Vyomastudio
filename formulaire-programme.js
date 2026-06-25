document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("quickForm");
    const successMessage = document.getElementById("programmeSuccess");

    if (!form || !successMessage) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                form.style.display = "none";
                successMessage.style.display = "block";
            }
        } catch (err) {
            console.error(err);
        }
    });

});