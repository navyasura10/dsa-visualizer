const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function bubble(array, setItems, speed = 1000) {
    let arr = [...array];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            setItems(
                arr.map((v, idx) => ({
                    value: v,
                    kind: "bar",
                    state: idx === j || idx === j + 1 ? "comparing" : "",
                    isCurrent: idx === i
                }))
            );

            await sleep(speed);

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                setItems(
                    arr.map((v, idx) => ({
                        value: v,
                        kind: "bar",
                        state: idx === j || idx === j + 1 ? "swapping" : "",
                        isCurrent: idx === j
                    }))
                );

                await sleep(speed);
            }
        }
    }


    setItems(
        arr.map(v => ({
            value: v,
            kind: "bar",
            state: "sorted",
            isCurrent: false
        }))
    );
}
