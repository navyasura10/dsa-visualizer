const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function insertion(array, setItems, speed = 1000) {
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];

            setItems(
                arr.map((v, idx) => ({
                    value: v,
                    kind: "bar",
                    state: idx === j || idx === j + 1 ? "comparing" : "",
                    isCurrent: idx == i
                }))
            );

            await sleep(speed);
            j--;
        }

        arr[j + 1] = key;

        setItems(
            arr.map((v, idx) => ({
                value: v,
                kind: "bar",
                state: idx === j + 1 ? "swapping" : "",
                isCurrent: idx === j + 1
            }))
        );

        await sleep(speed);
    }

    setItems(
        arr.map(v => ({
            value: v,
            kind: "bar",
            state: "sorted",
            isCurrent: false
        }))
    );
    await sleep(speed);
}
