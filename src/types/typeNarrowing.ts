export let get = (response: unknown) => response;

const  logFixed = (v: number) => {
    console.log(v.toFixed());
}

logFixed(2.1);
let value = get(2.1);
if(typeof value === 'number') {
    logFixed(value);
}