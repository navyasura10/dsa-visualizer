const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function quick(array, setItems, speed = 1200) {
    let arr = [...array];

    async function quickSort(low, high) {
        if (low < high) {
            let pi = await partition(low, high);
            await quickSort(low, pi - 1);
            await quickSort(pi + 1, high);
        }
    }

    async function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {

            // Show pivot + comparing
            setItems(
                arr.map((v, idx) => ({
                    value: v,
                    kind: "bar",
                    state:
                        idx === high
                            ? "pivot"
                            : idx === j
                                ? "comparing"
                                : "",
                    isCurrent: false
                }))
            );

            await sleep(speed);

            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];

                // Show swapping
                setItems(
                    arr.map((v, idx) => ({
                        value: v,
                        kind: "bar",
                        state:
                            idx === i || idx === j
                                ? "swapping"
                                : idx === high
                                    ? "pivot"
                                    : "",
                        isCurrent: false
                    }))
                );

                await sleep(speed);
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

        return i + 1;
    }

    await quickSort(0, arr.length - 1);

    // Final sorted state
    setItems(
        arr.map((v) => ({
            value: v,
            kind: "bar",
            state: "sorted",
            isCurrent: false
        }))
    );
}
export default quick;