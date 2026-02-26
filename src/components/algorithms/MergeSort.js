const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function merge(array, setTreeLevels, speed = 800) {

    let arr = [...array];

    // clear old tree
    setTreeLevels([]);

    async function sort(l, r, depth = 0) {

        const segment = arr.slice(l, r + 1);

        // Show dividing
        setTreeLevels(prev => {
            const copy = [...prev];
            if (!copy[depth]) copy[depth] = [];
            copy[depth].push({
                value: segment,
                state: "dividing"
            });
            return copy;
        });

        await sleep(speed);

        if (l >= r) return;

        const mid = Math.floor((l + r) / 2);

        await sort(l, mid, depth + 1);
        await sort(mid + 1, r, depth + 1);

        await merge(l, mid, r, depth);
    }

    async function merge(l, m, r, depth) {

        let left = arr.slice(l, m + 1);
        let right = arr.slice(m + 1, r + 1);

        let i = 0, j = 0, k = l;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];

        const mergedSegment = arr.slice(l, r + 1);

        // Show merging
        setTreeLevels(prev => {
            const copy = [...prev];

            if (!copy[depth]) copy[depth] = [];

            copy[depth] = copy[depth].map(node => {
                if (node.value.length === mergedSegment.length) {
                    return {
                        value: mergedSegment,
                        state: "merging"
                    };
                }
                return node;
            });

            return copy;
        });

        await sleep(speed);
    }

    await sort(0, arr.length - 1);

    // Final sorted root
    setTreeLevels(prev => {
        const copy = [...prev];
        copy[0] = [{
            value: arr,
            state: "sorted"
        }];
        return copy;
    });
}
export default merge;