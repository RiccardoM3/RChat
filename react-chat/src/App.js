//import logo from './logo.svg';
import './App.css';

const message1 = {
    time: new Date(),
    sender: 'Riccardo Menon',
    message: "This is the first message",
}

const message2 = {
    time: new Date(),
    sender: 'Roshan Venkitasan',
    message: "Stfu hoe",
}

const App = () => {
    return (
        <div className="App">
            <section className="header-section">
                <h1 className="title">RChat</h1>
            </section>
            <section className="body-section">
                <Message 
                    time={message1.time}
                    sender={message1.sender}
                    message={message1.message}
                />
                <Message 
                    time={message2.time}
                    sender={message2.sender}
                    message={message2.message}
                />
            </section>
            <section className="control-section">
                <textarea name="sent-message" className="sent-message" rows='4' placeholder="Enter your message here"/>
            </section>
        </div>
    );
}

const Message = ({time, sender, message}) => {
    return (
        <article className="message">
            <div className="message-title"><strong>{sender}</strong> | {time.toLocaleString('en-au')}</div>
            <section className="message-container">
                <div className="message-text">{message}</div>
            </section>
        </article>
    );
}

export default App;
