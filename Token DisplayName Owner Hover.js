// Change any selected tokens to show names on owner hover.

let selectedTokens = Object.values(canvas.activeLayer._controlled);

selectedTokens.forEach(t => t.update({ "displayName": TOKEN_DISPLAY_MODES.OWNER_HOVER }));