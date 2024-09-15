let { portal: port } = require('../tiles/portal.js'),
    { rock, roid } = require('../tiles/decoration.js'),
    { bossSpawn: boss, atmg, outside: out_ } = require('../tiles/siege.js'),
    { wall, normal: ____, nest, nestNoBoss: nost } = require('../tiles/misc.js'),
    {
        dominatorBlue: dBlu,
        dominatorGreen: dGrn,
        dominatorContested: dCon,
        sanctuaryBlue: sBlu,
        sanctuaryGreen: sGrn,
        sanctuaryContested: sCon
    } = require('../tiles/dominators.js'),
    {
        base1: b1np, base1protected: b1hp,
        base2: b2np, base2protected: b2hp,
        base3: b3np, base3protected: b3hp,
        base4: b4np, base4protected: b4hp,
        base5: b5np, base5protected: b5hp,
        base6: b6np, base6protected: b6hp,
        base7: b7np, base7protected: b7hp,
        base8: b8np, base8protected: b8hp
    } = require('../tiles/tdm.js'),

room = [
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,out_,out_,out_,wall,____,b1hp,b1np],
    [____,sBlu,____,wall,____,sGrn,____,wall,____,sCon,____,wall,out_,out_,atmg,wall,____,wall,wall],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,out_,wall,wall,wall,____,b2hp,b2np],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,out_,out_,out_,wall,____,wall,wall],
    [____,dBlu,____,wall,____,dGrn,____,wall,____,dCon,____,wall,out_,____,boss,wall,____,b3hp,b3np],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,out_,____,____,wall,____,wall,wall],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,wall,wall,____,wall,____,b4hp,b4np],
    [____,dBlu,____,wall,____,dGrn,____,wall,____,dCon,____,wall,____,____,____,wall,____,wall,wall],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,____,wall,wall,wall,____,b5hp,b5np],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,____,____,____,wall,____,wall,wall],
    [____,port,____,wall,____,port,____,wall,____,port,____,wall,____,port,____,wall,____,b6hp,b6np],
    [____,____,____,wall,____,____,____,wall,____,____,____,wall,____,____,____,wall,____,wall,wall],
    [rock,rock,rock,rock,roid,roid,roid,roid,nest,nest,nest,nest,nost,nost,nost,nost,____,b7hp,b7np],
    [rock,rock,rock,rock,roid,roid,roid,roid,nest,nest,nest,nest,nost,nost,nost,nost,____,wall,wall],
    [rock,rock,rock,rock,roid,roid,roid,roid,nest,nest,nest,nest,nost,nost,nost,nost,____,b8hp,b8np]
];

module.exports = room;