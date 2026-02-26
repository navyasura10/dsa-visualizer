import React from "react";
import "../cssfiles/Card.css";
function Card(props) {
    const { currentValue, setCurrentValue, setSelectedAlgo, startSorting, isSorting, selectedAlgo } = props;
    return (
        <div className="container">
            <form onSubmit={startSorting}>
                <div className="buttons">
                    <button type="button"
                        className={`method ${selectedAlgo === "insertion" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("insertion")}
                        disabled={isSorting}>Insertion Sort</button>

                    <button type="button"
                        className={`method ${selectedAlgo === "bubble" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("bubble")}
                        disabled={isSorting}>Bubble Sort</button>

                    <button type="button"
                        className={`method ${selectedAlgo === "selection" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("selection")}
                        disabled={isSorting}>Selection Sort</button>
                    <button type="button"
                        className={`method ${selectedAlgo === "merge" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("merge")}
                        disabled={isSorting}>Merge Sort</button>
                    <button type="button"
                        className={`method ${selectedAlgo === "quick" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("quick")}
                        disabled={isSorting}>Quick Sort</button>
                    <button type="button"
                        className={`method ${selectedAlgo === "stack" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("stack")}
                        disabled={isSorting}> Stack</button>
                    <button type="button"
                        className={`method ${selectedAlgo === "queue" ? "active" : ""}`}
                        onClick={() => setSelectedAlgo("queue")}
                        disabled={isSorting}> Queue</button>
                </div>

                <label htmlFor="values">Input :</label><br />

                <input
                    type="text"
                    className="values"
                    id="values"
                    value={currentValue}
                    placeholder="Enter values separate by comma"
                    onChange={(e) => {
                        setCurrentValue(e.target.value);
                        console.log(e.target.value);
                    }} />  <br />

                <button className="submit"
                    type="submit"
                    disabled={isSorting || !selectedAlgo} >
                    Start
                </button>

            </form>
        </div >

    )
}
export default Card;