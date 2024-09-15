let { base1:  _1 , base1protected:  p1  } = require('../tiles/tdm.js'),
    { bossSpawn:   b , atmg:  A   } = require('../tiles/siege.js'),
    { wall: WALL, nest:  n , normal:   _  } = require('../tiles/misc.js'),
    { rock:   r  } = require('../tiles/decoration.js'),
    { portal:  P   } = require('../tiles/portal.js'),

// Yes. I am aware that the food distract the ATMGs, but ask trplnr why he put normal's instead of outside's outside the room
room = [
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ , A  ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ , A  ,  _ ,  _ , A  ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ , A  ,  _ ,  _ ,  _ ,  _ ,WALL, P  ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,WALL, A  ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL, A  ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ , A  ,WALL,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  b ,  b ,  b ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r , P  ,  r ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,WALL,WALL,WALL],
    [ P  , A  ,WALL,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  _ , _1 , _1 , _1 ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  n ,WALL],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,  r ,  _ ,  _ , _1 , p1 , _1 ,  _ ,  _ ,  _ , P  ,  _ ,WALL,  _ ,  _ ,WALL,  n ,WALL],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  _ , _1 , _1 , _1 ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ , A  ,WALL, P  ,WALL],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  r ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,  n ,WALL],
    [  _ , A  ,WALL,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,  r ,  r ,WALL,  r ,  n ,  n ,  n ,  r ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  r ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ , A  ,  _ , A  ,  _ ],
    [  _ , A  ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  b ,  _ , P  ,  _ ,  b ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ , A  ,  _ ,  _ ,  _ , A  ,  _ , A  ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ,  _ ,  _ ],
];

module.exports = room;