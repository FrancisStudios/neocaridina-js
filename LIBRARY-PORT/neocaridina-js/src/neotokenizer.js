/* 
NEOTOKENIZER
This part breaks up file into macro tokens (lines) and 
sends them to the correct instruction file for further
processing (micro token processing)
*/

import TokenRules from "./util/rules";
import { neoHeader } from "./token-definitions/header.command";

export function NEOTokenizer(file) {
    const instructionList = file.split('\n');

    for (let instruction of instructionList) {
        let cleanInstruction = instruction.trim();

        if(TokenRules.HEADER_RULE(cleanInstruction)) neoHeader(cleanInstruction);
    }

    return file;
}
