const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function selection(array, setItems, speed = 1000) {
    let arr = [...array];

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            setItems(
                arr.map((v, idx) => ({
                    value: v,
                    kind: "bar",
                    state: idx === min || idx === j ? "comparing" : "",
                    isCurrent: idx === i
                }))
            );

            await sleep(speed);

            if (arr[j] < arr[min]) min = j;
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];

        setItems(
            arr.map((v, idx) => ({
                value: v,
                kind: "bar",
                state: idx === i || idx === min ? "swapping" : "",
                isCurrent: idx === i
            }))
        );

        await sleep(speed);
    }

    setItems(
        arr.map(v => ({
            value: v,
            kind: "bar",
            state: "sorted"
        }))
    );
}
