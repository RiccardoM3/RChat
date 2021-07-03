import '../css/App.css';
import Message from './Message'

//import {useState} from 'react'
//const [text, setText] = useState('my text');

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
