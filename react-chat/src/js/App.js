import '../css/App.css';
import Message from './Message'
import socketIOClient from "socket.io-client";

//Connect to the socket.io server
var socket = socketIOClient("http://localhost:3001", {
    extraHeaders: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": ["GET", "POST"]
    }
});

//This test function will send a message to the server, which sends the message back to all clients
window.testFunc = () => {
    socket.emit("client_message", "this is the message");
} 

//Print the message to console when a message is received from the server
socket.on("server_message", (message) => {
    console.log(message);
})

//Fake message history until we get other things working:
let messageHistory = [
    {
        id: 1,
        time: new Date(),
        sender: 'Riccardo Menon',
        message: "This is the first message",
    },
    {
        id: 2,
        time: new Date(),
        sender: 'Roshan Venkatesan',
        message: "Stfu hoe",
    }
];

const App = () => {
    return (
        <div className="App">
            <section className="header-section">
                <h1 className="title">RChat</h1>
            </section>
            <section className="body-section">
                {
                    messageHistory.map((message) => {
                        return (
                            <Message key={message.id} {...message}/>
                        )
                    })
                }
            </section>
            <section className="control-section">
                <textarea name="message-input" className="message-input" rows='4' placeholder="Enter your message here"/>
            </section>
        </div>
    );
}

export default App;
