// Change any selected tokens to always show their name, such as after the character's is introduced

// Need to go through the token layer, because other ways to get the tokens dont expose _controlled?
let allTokens = canvas.tokens.children[0].children;
let selected = allTokens.filter(token => token._controlled == true);

selected.forEach(t => t.update({ "displayName": TOKEN_DISPLAY_MODES.ALWAYS }));