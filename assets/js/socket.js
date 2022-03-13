const socket = io('http://localhost:8080');

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
        sendMessage();
    }
})
socket.on('connection');
socket.on('message', (data) => {
    let list = $("#chat-messages-list")
    list.append('<li class="other-message float-left clear-both bg-white text-black px-5 py-3 my-2 rounded-md"><span id="other-message-receive">' + data + '</span></li>')
})
const sendMessage = () => {
    let send_message = document.getElementById('chat-message-input');
    let list = $("#chat-messages-list")
    if (send_message.value === "") {
        return;
    }
    list.append('<li class="self-message float-right clear-both bg-zinc-900 text-white px-5 py-3 my-2 rounded-md"><span id="my-message-receive">' + send_message.value + '</span></li>')
    socket.emit('message', send_message.value);
    send_message.value = "";
}