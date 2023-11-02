/* 
NEOCARIDINA MEMORY
Singleton class that serves as a shared resource
for accessing neocaridina-js memory and processes
*/

export class NEOMEM {
    static __neomemInstance;
    static __memoryInstance;

    static instance() {
        if (!this.__neomemInstance) this.__neomemInstance = new this();
        return this.__neomemInstance;
    }


    get call() { return this.__memoryInstance }
}