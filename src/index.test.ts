import {foo} from "./index";

it('tests', async () => {
    const res = foo([1, 2, 3, 4, 5]);

    console.log(res);
});
