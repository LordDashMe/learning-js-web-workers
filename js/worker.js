let i = 0;

while (i < 200000) {
    postMessage('Web Worker Counter: ' + i);
    i++;
}

console.log('Web Worker is done! do not confuse with the delay UI. ' + i);
