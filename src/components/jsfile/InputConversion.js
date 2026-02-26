import React, { useState } from "react";
import Card from "./Card";
import Stack from "../algorithms/Stack";
import Queue from "../algorithms/Queue";
import Visualizer from "./Visualizer";
import { algorithms } from "../algorithms/system";
function InputConversion() {
    const [currentValue, setCurrentValue] = useState("");
    const [isSorting, setIsSorting] = useState(false);
    const [selectedAlgo, setSelectedAlgo] = useState(null);
    const [items, setItems] = useState([]);
    const [treeLevels, setTreeLevels] = useState([]);
    const [hasStarted, setHasStarted] = useState(false);



    const startSorting = async (e) => {
        e.preventDefault();
        if (!selectedAlgo || isSorting) return;

        setHasStarted(true);

        if (selectedAlgo === "stack" || selectedAlgo === "queue") {
            setItems([]);
            setTreeLevels([]);
            return;
        }

        const numbers = currentValue.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));

        if (numbers.length === 0) return;

        setItems(
            numbers.map((v, i) => ({
                value: v,
                kind: "bar",
                state: "",
                isCurrent: i === 0
            })));


        setIsSorting(true);
        if (selectedAlgo == 'merge') {
            await algorithms[selectedAlgo](numbers, setTreeLevels);
        } else {
            await algorithms[selectedAlgo](numbers, setItems);
        }

        setIsSorting(false);
    };

    return (
        <>
            <Card
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
                setSelectedAlgo={setSelectedAlgo}
                startSorting={startSorting}
                isSorting={isSorting}
                selectedAlgo={selectedAlgo}
            />

            {hasStarted && selectedAlgo === "stack" ? (<Stack />)
                : selectedAlgo === "queue" ? (<Queue />)
                    : (<Visualizer
                        items={items}
                        selectedAlgo={selectedAlgo}
                        treeLevels={treeLevels} />)}
        </>
    );
}
export default InputConversion;
