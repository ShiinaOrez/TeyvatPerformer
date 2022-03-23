const fs = require('fs')
const zenzenzense = require('./gakufu/zenzenzense')
const yellow = require('./gakufu/yellow')
const odori = require('./gakufu/odori')
const twoTigers = require('./gakufu/twoTigersLoveDancing')

const perform = require('./key_map')

const allGakufu = {
    'zenzenzense': zenzenzense,
    'yellow': yellow,
    'odori': odori,
    'twoTigers': twoTigers
}

function main(songName) {
    const vbsContent = perform.perform(allGakufu[songName]);

    try {
        fs.writeFileSync('.\\script.vbs', vbsContent)
    } catch (err) {
        console.error(err)
    }

    const spawn = require( 'child_process' ).spawnSync;
    spawn( 'cscript.exe', [ '.\\script.vbs'] );
}

main('twoTigers');