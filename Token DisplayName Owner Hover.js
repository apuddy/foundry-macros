// Change any selected tokens to show names on owner hover.

// Need to go through the token layer, because other ways to get the tokens dont expose _controlled?
let allTokens = canvas.tokens.children[0].children;
let selected = allTokens.filter(token => token._controlled == true);

selected.forEach(t => t.update({ "displayName": TOKEN_DISPLAY_MODES.OWNER_HOVER }));