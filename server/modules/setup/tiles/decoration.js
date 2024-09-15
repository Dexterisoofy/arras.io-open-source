let makeDecoration = defs => new Tile({
    color: "white",
    data: {
        allowMazeWallSpawn: false,
        foodSpawnCooldown: 0, foodCount: 0
    },
    init: tile => {
        for (let [def, amount] of defs) {
            def = ensureIsClass(def);
            let checkRadius = 10 + def.SIZE;
            for (; amount; amount--) {
                let i = 200, position = {};
                do {
                    position = tile.randomInside();
                } while (i-- && dirtyCheck(position, checkRadius));
                let o = new Entity(position);
                o.team = TEAM_ROOM;
                o.facing = ran.randomAngle();
                o.define(def);
                o.protect();
                o.life();
            }
        }
    }
});

module.exports = {
    rock: makeDecoration([['rock', 0], ['gravel', 2]]),
    roid: makeDecoration([['rock', 1], ['gravel', 1]])
};