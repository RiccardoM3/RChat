import '../css/Message.css'

const Message = ({time, sender, message}) => {
    return (
        <article className="message">
            <div className="message-title"><strong>{sender}</strong> | {time.toLocaleString('en-au')}</div>
            <section className="message-container">
                <p className="message-text">{message}</p>
            </section>
        </article>
    );
}

export default Message;