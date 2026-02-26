import React, { useState } from "react";
import "../cssfiles/Visualizer.css";

function Visualizer({ items, selectedAlgo, treeLevels }) {

    const [showHelp, setShowHelp] = useState(false);

    const complexity = {
        bubble: {
            time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
            space: "O(1)",
            link: "https://takeuforward.org/data-structure/bubble-sort-algorithm/"
        },
        insertion: {
            time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
            space: "O(1)",
            link: "https://takeuforward.org/data-structure/insertion-sort-algorithm/"
        },
        selection: {
            time: "O(n²)",
            space: "O(1)",
            link: "https://takeuforward.org/data-structure/selection-sort-algorithm/"
        },
        merge: {
            time: "O(n log n)",
            space: "O(n)",
            link: "https://takeuforward.org/data-structure/merge-sort-algorithm/"
        },
        quick: {
            time: "Best/Avg: O(n log n) | Worst: O(n²)",
            space: "O(log n)",
            link: "https://takeuforward.org/data-structure/quick-sort-algorithm/"
        }
    };

    return (
        <div className="visualizercontainer">

            {/* 🔹 Help Button */}
            {selectedAlgo && (
                <div
                    className="help-icon"
                    onClick={() => setShowHelp(!showHelp)}
                >
                    ?
                </div>
            )}

            {/* 🔹 Bars / Tree */}
            <div className="bars-section">

                {selectedAlgo === "merge" ? (
                    treeLevels && treeLevels.length > 0 ? (
                        treeLevels.map((level, i) => (
                            <div className="tree-row" key={i}>
                                {level.map((node, j) => (
                                    <div
                                        key={j}
                                        className={`tree-node ${node.state || ""}`}
                                        style={{ transform: `scale(${1 - i * 0.05})` }}
                                    >
                                        [{node.value.join(", ")}]
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p className="placeholder-text">
                            Enter numbers and start Merge Sort
                        </p>
                    )
                ) : (
                    items && items.length > 0 ? (
                        <div className="bar-wrapper">
                            {items.map((item, index) => {

                                const maxValue = Math.max(...items.map(i => i.value));
                                const height = (item.value / maxValue) * 70;

                                return (
                                    <div
                                        key={index}
                                        className={`visual-item ${item.kind} ${item.state} ${item.isCurrent ? "current" : ""}`}
                                        style={{ height: `${height}%` }}
                                    >
                                        {item.value}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="placeholder-text">
                            Enter numbers and choose an algorithm
                        </p>
                    )
                )}
            </div>

            {/* 🔹 Help Modal */}
            {showHelp && selectedAlgo && complexity[selectedAlgo] && (
                <div className="help-modal">
                    <h4>{selectedAlgo.toUpperCase()} Sort</h4>
                    <p><strong>Time:</strong> {complexity[selectedAlgo].time}</p>
                    <p><strong>Space:</strong> {complexity[selectedAlgo].space}</p>
                    <a
                        href={complexity[selectedAlgo].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read Striver Article
                    </a>
                </div>
            )}

        </div>
    );
}

export default Visualizer;