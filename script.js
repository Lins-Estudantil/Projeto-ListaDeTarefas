const inputTarefa = document.getElementById("input-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const lista = document.getElementById("lista");
const vazio = document.getElementById("vazio");

function atualizarMensagemVazia() {
    // Mostra a mensagem só quando a lista não tem nenhuma tarefa
    vazio.classList.toggle("oculto", lista.children.length > 0);
}

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
        inputTarefa.focus();
        return;
    }

    // 1. Criar os elementos
    const item = document.createElement("li");
    const span = document.createElement("span");
    const btnRemover = document.createElement("button");

    span.textContent = texto;
    btnRemover.textContent = "✕";
    btnRemover.setAttribute("aria-label", "Remover tarefa");

    // 2. Clicar no texto marca/desmarca como concluída (classe CSS)
    span.addEventListener("click", function () {
        item.classList.toggle("concluida");
    });

    // 3. Clicar no ✕ remove o elemento do HTML
    btnRemover.addEventListener("click", function () {
        item.remove();
        atualizarMensagemVazia();
    });

    // 4. Montar e colocar na página
    item.appendChild(span);
    item.appendChild(btnRemover);
    lista.appendChild(item);

    inputTarefa.value = "";
    inputTarefa.focus();
    atualizarMensagemVazia();
}

btnAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});

atualizarMensagemVazia();
