/*
RENDERER
This function should render out the renderable from NEOMEM
and assemble a final HTML (and might include the logic)
this is a further TODO item
*/

import { NEOMEM } from "./runtime-memory-handler";

export function NEORenderer() {
    let __renderObject = '<div class="neocaridina-block">';

    for(let renderable of NEOMEM.__memoryInstance.renderable){
        __renderObject+= renderable;
    }

    __renderObject += '</div>';

    return __renderObject;
}