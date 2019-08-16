# Learning JS Web Workers

A simple example to test the Web Workers separation to the main browser window thread.

## Usage

- The JS Web Workers requires to run with a domain or in a http-server, thus this will not work in a ```file://```.

- Open the ```index.html``` file in your preferred browser and you can now check how JS Web Workers separated from the main thread by click the buttons.

- You might wonder why the UI does not change and the worker seems like blocked by the main thread when you start the block thread and prompting an ```alert()```.

- I added a ```console.log()``` inside the ```worker.js```, this can be use to verify the process of the worker is actually done in the background and not blocked by the main thread.

- To check this you need to open your browser developer console tab.

### Restriction

- Web Workers can't access DOM elements from the web page.

- Web Workers can't access global variables and JavaScript functions from the web page.

- Web Workers can't call alert() or confirm() functions.

- Objects such as window, document and parent can't be accessed inside the web worker.

## Reference

- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
