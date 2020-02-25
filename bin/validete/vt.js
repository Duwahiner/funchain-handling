    'use strict'

    function  _error ( message ) {
        try {
             throw new Error( message ) ;
        } catch ( error ) { console.error( `Error: ${ error.message } → parametro invalido no es un string.`, error ) }
    }

    function  _errorArray ( message ) {
        try {
             throw new Error( message ) ;
        } catch ( error ) { console.error( `Error: ${ error.message } → parametro invalido no es un array.`, error ) }
    }

    function errorArgumentString ( string ) {
        let string2 = valideString( string ) ? string : _error( string );
            return string2;
    }

    function valideString ( string ) { 
        let boolean = true || false;
            boolean = typeof string === 'string' ? true : false;
            return boolean;
    }

    module.exports = {
        _error,
        _errorArray,
        errorArgumentString,
        valideString,
    }