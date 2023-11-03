const TokenRules = {
    HEADER_RULE : (instruction) => { return instruction.substring(0, 1) === "#"}
}

export default TokenRules;