function recursion(input) {
    const N = BigInt(input);
    const memo = new Map();

    function f(k) {
        
        if(k === 0n) return 1n;

        if(memo.has(k)) return memo.get(k);

        let result = f(k/2n) + f(k/3n);

        memo.set(k, result);

        return result;
    }

    console.log(f(N).toString());
    
}

recursion(4646646464);
//console.log(recursion(100));
