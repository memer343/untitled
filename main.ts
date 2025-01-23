controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.raycastingView)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(mySprite, 60, -250)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.tilemapView)
})
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
game.splash("untitled")
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
game.setGameOverScoringType(game.ScoringType.HighScore)
