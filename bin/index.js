    'use strict'
    
    const funtional = require ( './fuct/fn' );
    const funtionalComplement = require ( './complement/comp' );
    const util = require( './util/index' );

    module.exports = {
        ...funtional,
        ...funtionalComplement,
        ...util
    }