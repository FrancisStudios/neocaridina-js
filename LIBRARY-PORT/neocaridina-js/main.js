/* 
MAIN INTERFACE 
This file serves as a blueplan for the library
and also the main export.
*/

import { NEOTokenizer } from "./src/neotokenizer";
import { NEOMEM } from "./src/util/runtime-memory-handler";

export class NEO {

    memory; /* typeof NEOMEM */

    static run(file) {
        /* INITIATING MEMORY INSTANCE */
        this.memory = NEOMEM.instance();

        /* TOKENIZE FILE AND BUILD MEMORY MAP */
        const tokenizedMemoryMap = NEOTokenizer(file);
        return tokenizedMemoryMap;
    }
}