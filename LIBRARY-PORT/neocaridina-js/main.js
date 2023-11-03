/* 
MAIN INTERFACE 
This file serves as a blueplan for the library
and also the main export.
*/

import { NEOTokenizer } from "./src/neotokenizer";
import { NEORenderer } from "./src/util/renderer";
import { NEOMEM } from "./src/util/runtime-memory-handler";

export class NEO {

    ROMemory; /* typeof NEOMEM */
    previousFile;
    tokenizedMemoryMap;

    static run(file) {
        /* INITIATING MEMORY INSTANCE */
        this.ROMemory = NEOMEM.__memoryInstance;
        if (this.ROMemory !== NEOMEM.__DEFAULT_MEM_INSTANCE) NEOMEM.dumpMemory();

        /* TOKENIZE FILE AND BUILD MEMORY MAP */
        if (!this.previousFile) {
            this.previousFile = file;
            this.tokenizedMemoryMap = NEOTokenizer(file);
        } else {
            switch(this.previousFile === file) {
                case true:
                    //return existing
                    break;

                case false:
                    //update
                    NEOMEM.dumpMemory();
                    this.tokenizedMemoryMap = NEOTokenizer(file);
                    break;
            }
        }


        /* GETTING RENDERABLE */
        const renderable = NEORenderer();
        return renderable;
    }
}