import pLimit from "p-limit";

export async function foo(nums: Array<number>): Promise<Array<number>> {
    const limit = pLimit(3);

    const promises = nums.map((num) => limit(async () => {
        return await bar(num);
    }));

    return await Promise.all(promises);
}

async function bar(num: number): Promise<number> {
    return num + 1;
}
