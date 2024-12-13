document.getElementById('btn1').addEventListener('click', function mostrarMensaje(){
    const container=document.createElement('div');
    const note = document.getElementById('contenedorMensajes').value;
    container.textContent=note;
});
function agregarMensaje() {
    const textarea = document.getElementById('textarea');
    const div = document.createElement('div');
    div.textContent = textarea.value;
    div.classList.add('mensaje');
    document.getElementById('contenedorMensajes').insertBefore(div, document.getElementById('contenedorMensajes').firstChild);
    textarea.value = '';
}
function ocultarMensaje(){
    document.getElementById("btn2").addEventListener('click');
    contenedorMensajes.classList.add("oculto");
}
function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}
