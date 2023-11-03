/* 
NEOCARIDINA MEMORY
Singleton class that serves as a shared resource
for accessing neocaridina-js memory and processes
*/

let __selfInstance;
class NEOMEMClass {
    __memoryInstance = {
        renderable: [],
        ready: false
    };

    constructor() {
        if (__selfInstance) throw new Error("Already instantiated");
        __selfInstance = this;
    }

    pokeHTML(HTML) { this.__memoryInstance.renderable.push(HTML) }
}

const NEOMEM = Object.freeze(new NEOMEMClass());

module.exports = {
    NEOMEM
}