import React, { useState } from "react";
import "../cssfiles/Stack.css";

function Stack() {
    const [stack, setStack] = useState([]);
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const MAX_SIZE = 7;

    const pushItem = () => {
        if (!input.trim()) {
            setMessage("Enter a valid value!");
            return;
        }

        if (stack.length >= MAX_SIZE) {
            setMessage("Stack Overflow!");
            return;
        }

        setStack([...stack, input]);
        setMessage(`Pushed ${input}`);
        setInput("");
    };

    const popItem = () => {
        if (stack.length === 0) {
            setMessage("Stack Underflow!");
            return;
        }

        const removed = stack[stack.length - 1];
        setStack(stack.slice(0, -1));
        setMessage(`Popped ${removed}`);
    };

    const topItem = () => {
        if (stack.length === 0) {
            setMessage("Stack is Empty!");
            return;
        }
        setMessage(`Top: ${stack[stack.length - 1]}`);
    };

    const peekItem = () => {
        if (stack.length === 0) {
            setMessage("Stack is Empty!");
            return;
        }
        setMessage(`Peek: ${stack[stack.length - 1]}`);
    };

    return (
        <div className="stack-outer-container">

            {/* Help Icon */}
            <div
                className="help-icon"
                onClick={() => setShowHelp(!showHelp)}
            >
                ?
            </div>

            {/* Help Modal (NOW INSIDE CONTAINER) */}
            {showHelp && (
                <div className="help-modal">

                    <h3>Stack Complexity</h3>

                    <p><strong>Push:</strong> O(1)</p>
                    <p><strong>Pop:</strong> O(1)</p>
                    <p><strong>Peek / Top:</strong> O(1)</p>

                    <hr style={{ margin: "10px 0", borderColor: "#333" }} />

                    <p><strong>Space:</strong> O(n)</p>

                    <a
                        href="https://takeuforward.org/data-structure/implement-stack-using-array"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📖 Read Striver's Stack Article
                    </a>
                </div>
            )}

            {/* LEFT SIDE */}
            <div className="stack-section">
                <div className="stack-box">
                    {stack.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className={`stack-item ${index === stack.length - 1 ? "top" : ""
                                }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <p className="stack-label">Stack</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="control-section">
                <div className="row push-row">
                    <button onClick={pushItem}>Push</button>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="value"
                    />
                </div>

                <div className="row">
                    <button onClick={popItem}>Pop</button>
                </div>

                <div className="row">
                    <button onClick={topItem}>Top</button>
                </div>

                <div className="row">
                    <button onClick={peekItem}>Peek</button>
                </div>

                <div className="message-box">
                    {message}
                </div>
            </div>

        </div>
    );
}

export default Stack;