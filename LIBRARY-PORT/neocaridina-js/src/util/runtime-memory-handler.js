/* 
NEOCARIDINA MEMORY
Singleton class that serves as a shared resource
for accessing neocaridina-js memory and processes
*/

let __selfInstance;
class NEOMEMClass {

    __DEFAULT_MEM_INSTANCE = {
        renderable: [],
        ready: false
    };

    __memoryInstance = this.__DEFAULT_MEM_INSTANCE;

    constructor() {
        if (__selfInstance) throw new Error("Already instantiated");
        __selfInstance = this;
    }

    pokeHTML(HTML) { this.__memoryInstance.renderable.push(HTML); }

    dumpMemory() { this.__memoryInstance = this.__DEFAULT_MEM_INSTANCE; }
}

//const NEOMEM = Object.freeze(new NEOMEMClass());
const NEOMEM = new NEOMEMClass();

module.exports = {
    NEOMEM
}