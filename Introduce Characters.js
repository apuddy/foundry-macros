// Change any selected tokens to always show their name, such as after the character's is introduced

let selectedTokens = Object.values(canvas.activeLayer._controlled);

selectedTokens.forEach(t => t.update({ "displayName": TOKEN_DISPLAY_MODES.ALWAYS }));