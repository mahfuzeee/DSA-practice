/*function eraseDuplicate(input) {
    const data = input.split('');

    for(let i = 0; i < data.length; i++) {
        let l = i + 1;
        let r = data.length;

        while(l < r) {
            if(data[i] === data[l]) {
                data.splice(l, 1);
            }
            l++;
        }
        //console.log(data);
    }
    console.log(data.join(''));
    
}

eraseDuplicate('awrrlttss');
*/

function eraseDuplicate(input) {
   const seen = new Set();
    let result = "";

    for(let char of input) {
        if(!seen.has(char)) {
            seen.add(char);
            result += char;
    }
   }
   console.log(result);
   
}

eraseDuplicate('awrrldtdtrsshds');