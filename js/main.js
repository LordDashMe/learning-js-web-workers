let worker;

function testWorker() {
    if (typeof(Worker) !== 'undefined') {
        if (typeof(worker) == 'undefined') {
            worker = new Worker('js/worker.js');
        }
        worker.onmessage = function(event) {
            document.getElementById('workerOutput').innerHTML = event.data;
        };
    } else {
        document.getElementById('workerOutput').innerHTML = 'Web Workers are not supported in your browser';
    }
}

function terminateWorker() { 
    worker.terminate();
    worker = undefined;
}

function testMainThread() {
    let i;
    for (i = 0; i < 200000; i++) { 
        document.getElementById('mainThreadOutput').innerHTML = 'Main Thread Counter: ' + i;
    }
    console.log('Main Thread is done! ' + i)
}
