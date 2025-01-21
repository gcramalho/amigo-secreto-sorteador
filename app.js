let arrayNomes = [];

// Atualizar lista na tela
function atualizarListaVisual(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // percorre o array e adiciona cada nome a lista
    arrayNomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });

    // mostrar/esconder botão "Limpar Lista"
    const limparBtn = document.getElementById("limparBtn");
    if(arrayNomes.length > 0){
        limparBtn.style.display = "inline-block";
    } else {
        limparBtn.style.display = "none";
    }
}

// Adicionar nome ao array
function adicionarAmigo(){
    const amigoInput = document.getElementById("amigo").value;
    
    // valida campo de entrada
    if(amigoInput.trim() === ""){
        alert("Por favor, digite um nome válido.");
        return;
    }

    // add o nome ao array e atualiza lista visual
    arrayNomes.push(amigoInput);
    atualizarListaVisual();
    document.getElementById("amigo").value = "";
}

// Sortea um amigo aleatoriamente
function sortearAmigo(){

    // valida se há nomes na lista
    if(arrayNomes.length === 0){
        alert("Para realizar o sorteio é necessário adicionar amigos.");
        return;
    }

    // seleciona aleatoriamente um nome
    const sorteado = arrayNomes[Math.floor(Math.random() * arrayNomes.length)];
    document.getElementById("resultado").textContent = `O amigo secreto sorteado foi ${sorteado}`
}

// Limpar lista de nomes na tela
function limparLista(){
    // esvazia array e atualiza lista
    arrayNomes = [];
    atualizarListaVisual();
    document.getElementById("listaAmigos").textContent = "";
    document.getElementById("resultado").textContent = "";
}

// Permite adicionar um nome ao pressionar 'enter'
document.getElementById("amigo").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        adicionarAmigo();
    }
})