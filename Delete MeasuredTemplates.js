// Delete all measured templates from the scene to tidy up during combat

canvas.scene.deleteEmbeddedEntity("MeasuredTemplate", canvas.scene.data.templates.map(t => t._id), {});