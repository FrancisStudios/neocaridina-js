/*
HANDLES HEADER COMMANDS
# as h1
## as h2
### as h3 
and so on...
*/

import { NEOMEM } from "../util/runtime-memory-handler";

export function neoHeader(instruction) {
    const numberOfHashmarks = (instruction.split('#')).length - 1;
    const textValue = (instruction.split('#'))[(instruction.split('#')).length - 1].trim();
    const HTML = `<h${numberOfHashmarks}>${textValue}</h${numberOfHashmarks}>`;

    const NEOMEMInstance = NEOMEM;
    console.log(NEOMEMInstance.pokeHTML(HTML))
    console.log(NEOMEM.__memoryInstance)

}