function afficherMessage() {

    let presentation = document.querySelector("#presentation");
    let message = document.createElement("p");
    message.innerText = "Salut mon gars !";
    presentation.appendChild(message); 
}