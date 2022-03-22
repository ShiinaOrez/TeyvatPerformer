// Type "Hello World" then press enter.
var robot = require("robotjs");

const gakufuMap = {
    11: 'a',
    12: 's',
    13: 'd',
    14: 'f',
    15: 'g',
    16: 'h',
    17: 'j',

    1: 'z',
    2: 'x',
    3: 'c',
    4: 'v',
    5: 'b',
    6: 'n',
    7: 'm',

    21: 'q',
    22: 'w',
    23: 'e',
    24: 'r',
    25: 't',
    26: 'y',
    27: 'u'
}

const zenzenzenseGakufu = [
    5, 11, 12, 11, 0, 0, 15, 14, 13, 13, 12, 11
]

const zenzenzenseGakufuBpm = 190

async function main() {
    for (const simpleValue of zenzenzenseGakufu) {
        if (simpleValue == 0) {
            // do nothing
        } else {
            robot.keyTap(gakufuMap[simpleValue]);
        }
        await new Promise(r => setTimeout(r, (60 / zenzenzenseGakufuBpm)));
    }
}