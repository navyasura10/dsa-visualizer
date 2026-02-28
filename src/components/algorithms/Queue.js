import React, { useState } from "react";
import "../cssfiles/Queue.css";

function Queue() {
    const MAX_SIZE = 7;

    const [queue, setQueue] = useState([]);
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const enqueue = () => {
        if (!input.trim()) {
            setMessage("Enter a valid value!");
            return;
        }

        if (queue.length >= MAX_SIZE) {
            setMessage("Queue Overflow!");
            return;
        }

        setQueue([...queue, input]);
        setMessage(`Enqueued ${input}`);
        setInput("");
    };

    const dequeue = () => {
        if (queue.length === 0) {
            setMessage("Queue Underflow!");
            return;
        }

        const removed = queue[0];
        setQueue(queue.slice(1));
        setMessage(`Dequeued ${removed}`);
    };

    const front = () => {
        if (queue.length === 0) {
            setMessage("Queue is Empty!");
            return;
        }
        setMessage(`Front: ${queue[0]}`);
    };

    const rear = () => {
        if (queue.length === 0) {
            setMessage("Queue is Empty!");
            return;
        }
        setMessage(`Rear: ${queue[queue.length - 1]}`);
    };

    return (
        <>
            {/* HELP MODAL */}
            {showHelp && (
                <div className="help-modal-queue">
                    <div className="help-content">
                        <h2>Queue Complexity</h2>

                        <div className="complexity-section">
                            <h3>Time Complexity</h3>
                            <p><strong>Enqueue:</strong> O(1)</p>
                            <p><strong>Dequeue:</strong> O(1)</p>
                            <p><strong>Front:</strong> O(1)</p>
                            <p><strong>Rear:</strong> O(1)</p>
                        </div>
                        <hr style={{ margin: "10px 0", borderColor: "#333" }} />
                        <div className="complexity-section">
                            <h3>Space Complexity</h3>
                            <p><strong>Space:</strong> O(n)</p>
                        </div>
                        <div className="article-link">
                            <a
                                href="https://takeuforward.org/data-structure/queue-data-structure/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📖 Read Striver's Queue Article
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="queue-outer-container">

                {/* HELP ICON */}
                <div
                    className="help-icon"
                    onClick={() => setShowHelp(prev => !prev)}
                >
                    ?
                </div>

                <div className="queue-section">
                    <div className="queue-box">
                        {queue.map((item, index) => (
                            <div
                                key={index}
                                className={`queue-item 
                                    ${index === 0 ? "front" : ""} 
                                    ${index === queue.length - 1 ? "rear" : ""}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="queue-label">
                        Queue ({queue.length}/{MAX_SIZE})
                    </p>
                </div>

                <div className="control-section">

                    <div className="row">
                        <button onClick={enqueue}>Enqueue</button>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="value"
                        />
                    </div>

                    <div className="row">
                        <button onClick={dequeue}>Dequeue</button>
                    </div>

                    <div className="row">
                        <button onClick={front}>Front</button>
                    </div>

                    <div className="row">
                        <button onClick={rear}>Rear</button>
                    </div>

                    <div className="message-box">
                        {message}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Queue;