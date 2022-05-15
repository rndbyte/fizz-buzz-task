// Shortcut for console.log
const msg = m => {
    console.log(m);
};

// V1
for (let i = 1; i <= 100; i++) {
    if(i%3===0) msg('Fizz');
    if(i%5===0) msg('Buzz');
    if(i%3!==0 && i%5!==0) msg(i);
}

// V2
for (let i = 1; i <= 100; i++) {
    let str = '';
    if(i%3===0) str = 'Fizz';
    if(i%5===0) str += 'Buzz';
    msg(str || i);
}

// V3
for (let i = 1; i <= 100; i++) {
    let n = i, f = 'Fizz', b = 'Buzz';
    if(i%3 !== 0) f = ''; else n = '';
    if(i%5 !== 0) b = ''; else n = '';
    msg(n+f+b);
}

// V4
for (let i = 1; i <= 100; i++) {
    let s = '';
    msg(((s = ((i%3 === 0) ? 'Fizz' : '') + ((i%5 === 0) ? 'Buzz' : '')) === '') ? i : s);
}

// V5
// Tag game. One tag includes a repeating series of multiples of 3, 5 and 15.
let arr = [null, null, 'Fizz', null, 'Buzz', 'Fizz', null, null, 'Fizz', 'Buzz', null, 'Fizz', null, null, 'FizzBuzz'];

for (let i = 1; i <= 100; i++) {
    msg((arr[(i - 1) % 15] ? arr[(i - 1) % 15] : i) + ' ');
}