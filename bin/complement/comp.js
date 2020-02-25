    'use strict'
        
    //manejo de cadenas funcionalmente
    //functionally chain handling
    
    const { 
        errorArgumentString,
        valideString 
    } = require( '../validete/vt' );

    function addPuntoLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `.${ string }`
    }

    function addPuntoRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string }.`
    }

    function addPuntoSuspensivoLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `...${ string }`
    }

    function addPuntoSuspensivoRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string }...`
    }

    function addLLavesLeftRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `{ ${ string } }`
    }

    function addLLavesteLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `{ ${ string }`
    }

    function addLLavesRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string } }`
    }

    function addCorchetesLeftRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `[ ${ string } ]`
    }

    function addCorchetesLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `[ ${ string }`
    }

    function addCorchetesRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string } ]`
    }

    function addQuestionMarkLeftRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `¿ ${ string } ?`
    }

    function addQuestionMarkLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `¿ ${ string }`
    }

    function addQuestionMarkRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string } ?`
    }

    function addExclamationMarkLeftRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `¡ ${ string } !`
    }

    function addExclamationMarkLeft ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `¡ ${ string }`
    }

    function addExclamationMarkRight ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return `${ string } !`
    }

    module.exports = {
        addPuntoLeft,
        addPuntoRight,
        addPuntoSuspensivoLeft,
        addPuntoSuspensivoRight,
        addLLavesLeftRight,
        addLLavesteLeft,
        addLLavesRight,
        addCorchetesLeftRight,
        addCorchetesLeft,
        addCorchetesRight,
        addQuestionMarkLeftRight,
        addQuestionMarkLeft,
        addQuestionMarkRight,
        addExclamationMarkLeftRight,
        addExclamationMarkLeft,
        addExclamationMarkRight,
    }