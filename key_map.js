const gakufuMap = {
    11: 'A',
    12: 'S',
    13: 'D',
    14: 'F',
    15: 'G',
    16: 'H',
    17: 'J',

    1: 'Z',
    2: 'X',
    3: 'C',
    4: 'V',
    5: 'B',
    6: 'N',
    7: 'M',

    21: 'Q',
    22: 'W',
    23: 'E',
    24: 'R',
    25: 'T',
    26: 'Y',
    27: 'U'
}

var vbsContent = 'Dim WshShell\n' +
        'Set WshShell = CreateObject("Wscript.Shell")\n' +
        'WScript.Sleep(7000)\n';

/**
 * perform simpleValue in beatRange
 * @param {*} simpleValue 
 * @param {*} beatRange 
 */
 function performBeat(simpleValue, beatRange) {
    if (typeof simpleValue === 'number') {
        vbsPerformPitch(simpleValue);
        vbsSleep(beatRange);
    } else if (typeof simpleValue === 'object') {
        const simpleLen = simpleValue.length;
        for (const simple of simpleValue) {
            performBeat(simple, beatRange/simpleLen);
        }
    }
    return vbsContent
}

function vbsPerformPitch(value) {
    if (value === 0) {
        return;
    }
    vbsContent += 'WshShell.SendKeys "' + gakufuMap[value] + '"\n'
}

function vbsSleep(range) {
    vbsContent += 'WScript.Sleep(' + range.toString() + ')\n'
}

function perform(songInfo) {
    for (const simpleValue of songInfo.simple) {
        performBeat(simpleValue, songInfo.beat * (60 / songInfo.bpm * 1000));
    }
    return vbsContent;
}

module.exports = {
    perform
}