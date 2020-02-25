    'use strict'

    //manejo de cadenas funcionalmente 
    //functionally chain handling

    const { pipe } = require( '../extrac/pf' );
    const cpt = require( '../complement/comp' );
    const { 
        _error,
        _errorArray,
        errorArgumentString,
        valideString 
    } = require( '../validete/vt' );

    function convertToTitle ( string ) {
        let titulo;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            titulo = pipe( 
                            takeTheFirstLetter, 
                            toUpperCase, 
                            concatRight( removeTheFirstLetter( string ) ) 
                    ) ( string );
            return titulo;
    }

    function concat ( string1 ) {
        if ( ! valideString( string1 ) ) return errorArgumentString( string11 );
        return ( string2 ) => { 
            if ( ! valideString( string2 ) ) return errorArgumentString( string2 );
            return string1.concat( string2 ); 
        } 
    }

    function concatAll ( string1 ) {
        if ( ! valideString( string1 ) ) return errorArgumentString( string1 );
        return ( ...string2 ) => { 
            let boolean = string2.every( ( strg ) => typeof strg === 'string' );
                return boolean ? string1.concat( ...string2 ) : _error( string2 );  
        }
    }

    function concatRight ( string1 ) {
        if ( ! valideString( string1 ) ) return errorArgumentString( string1 );
        return ( string2 ) => { 
            if ( ! valideString( string2 ) ) return errorArgumentString( string2 );
            return string2.concat( string1 ); 
        } 
    }

    function concatRightAll ( ...string1 ) {
        let boolean = string1.every( ( strg ) => typeof strg === 'string' );
        return ( string2 ) => { 
            if ( ! valideString( string2 ) ) return errorArgumentString( string2 );
            return boolean ? string2.concat( ...string1 ) : _error( string2 );  
        }
    }

    function disengageStringInLyrics ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return string.split( '' ); 
    }

    function disengageStringInWords ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return string.split( ' ' );
    }

    function endPoindString ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /\.$/g.test( string );
            return boolean;
    }

    function endPuntoSuspensivoString ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /\.{3}$/g.test( string );
            return boolean;
    }

    function extract ( array ) {
        let [ ...newArray ] = array;
            if ( ! Array.isArray( array ) ) return _errorArray( array );
            else return ! newArray.every( ( value ) => typeof value === 'string' ) ? 
                _error( array ) : newArray.join( ' ' );
    }

    function firstLastUpperCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /^([A-Z])+.+([A-Z])$/g.test( string );
            return boolean;
    }

    function firstLastLowerCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /^([a-z])+.+([a-z])$/g.test( string );
            return boolean;
    }

    function find ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            return ( string2 ) => {
                if ( ! valideString( string2 ) ) return errorArgumentString( string2 );
                boolean = new RegExp( `${string}`, 'g' ).test( string2 );
                return boolean;
            } 
    }

    function filter ( fn ) {
            if ( ! typeof fn === 'function' ) return _error( fn );
            return ( string ) => {
                if ( ! valideString( string ) ) return errorArgumentString( string );
                return string.split( ' ' ).filter( fn )
            }
    }
    
    function filterToString ( fn ) {
           if( ! typeof fn === 'function' ) return _error( fn );
            return ( string ) => {
                if ( ! valideString( string ) ) return errorArgumentString( string );
                return string.split( ' ' ).filter( fn ).join( ' ' );
            }
    }

    function findUpperCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /^([A-Z])/g.test( string );
            return boolean;
    }

    function findLowerCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /^([a-z])/g.test( string );
            return boolean;
    }

    function findLastUpperCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([A-Z])$/g.test( string );
            return boolean;
    }

    function findLastLowerCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([a-z])$/g.test( string );
            return boolean;
    }

    function flatExtract ( number ) {
        let boolean = typeof number === 'number';
        const _flatExtract = ( array ) => {
            if ( ! boolean ) return console.log( new Error( 'Parametro invalio, se esperaba un numero' ) );
            else {
                let [ ...newArray ] = array.flat( number );
                    if ( ! Array.isArray( array ) ) return _errorArray( array );
                    else 
                        return newArray.every( ( value ) => typeof value === 'string' ) ? 
                        newArray.join( ' ' ) : _error( array ) ;
            }
        }
        return _flatExtract;
    }

    function isToUpperCase ( string ) {
        let string2 = string, string3;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            string3 = string.match( /([^a-z])+/g ).join( ' ' );
            return string2 === string3;
    }

    function isToLowerCase ( string ) {
        let string2 = string, string3;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            string3 = string.match( /([^A-Z])+/g ).join( ' ' );
            return string2 === string3;
    }

    function isLetterUpperCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([A-Z])/g.test( string );
            return boolean;
    }

    function isLetterLowerCase ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([a-z])/g.test( string );
            return boolean;
    }

    function isOnlyString ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([^A-Za-z ])/g.test( string );
            return ! boolean;
    }

    function join ( separador ) {
        if ( ! valideString( separador ) ) return errorArgumentString( separador );
        return ( string ) => { 
            if ( ! valideString( string ) ) return errorArgumentString( string );
            let string2 = string.split( ' ' ).join( `${ separador }` );
                return string2;
        }
    }

    function map ( fn ) {
        typeof fn === 'function' ? fn : _error( fn );
        return ( string ) => {
            if ( ! valideString( string ) ) return errorArgumentString( string );
            return string.split( ' ' ).map( fn );
        }
    }

    function mapToString ( fn ) {
            typeof fn === 'function' ? fn : _error( fn );
            return ( string ) => {
                if ( ! valideString( string ) ) return errorArgumentString( string );
                return string.split( ' ' ).map( fn ).join( ' ' );
            }
    }

    function passToArray ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return string.split( 1 );
    }

    
    function reduce ( fn ) {
        typeof fn === 'function' ? fn : _error( fn );
        return ( string ) => {
            if ( ! valideString( string ) ) return errorArgumentString( string );
            return string.split( ' ' ).reduce( fn )
        }
    }

    function removeTheFirstLetter ( string ) {
        let frase = '';
            if ( ! valideString( string ) ) return errorArgumentString( string );
            frase = string.slice( 1 );
            return frase;
    }

    function removeTheLastLetter ( string ) {
        let frase = '';
            if ( ! valideString( string ) ) return errorArgumentString( string );
            frase = string.slice( 0, string.length - 1 );
            return frase;
    } 

    function reverse ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return pipe( disengageStringInLyrics ) ( string ).reverse().join( '' );
    }
    
    function specialCharacters ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([^a-z A-Z0-9.,;:¡¿?\\/!|+*(){}\[\]\-_])+/g.test( string );
            return boolean;
    }

    function string ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return string;
    } 

    function searchNumber ( string ) {
        let boolean;
            if ( ! valideString( string ) ) return errorArgumentString( string );
            boolean = /([0-9])+/g.test( string );
            return boolean;
    }

    function toLowerCase ( string ) {
        if ( ! valideString( string ) ) return errorArgumentString( string );
        return string.toLowerCase();
    }

    function toUpperCase ( string ) {
            if ( ! valideString( string ) ) return errorArgumentString( string );
            return string.toUpperCase();
    }

    function takeTheFirstLetter ( string ) {
        let letra = '';
            if ( ! valideString( string ) ) return errorArgumentString( string );
            letra = string.slice( 0, 1 );
            return letra;
    }

    function takeTheLastLetter ( string ) {
        let letra = '';
            if ( ! valideString( string ) ) return errorArgumentString( string );
            letra = string.slice( string.length - 1, string.length );
            return letra;
    }

    module.exports = {
        extract,
        flatExtract,
        convertToTitle,
        concat,
        concatAll,
        concatRight,
        concatRightAll,
        disengageStringInLyrics,
        disengageStringInWords,
        endPoindString,
        endPuntoSuspensivoString,
        filter,
        filterToString,
        find,
        findLowerCase,
        findUpperCase,
        findLastUpperCase,
        findLastLowerCase,
        firstLastLowerCase,
        firstLastUpperCase,
        flatExtract,
        isLetterUpperCase,
        isLetterLowerCase,
        isToLowerCase,
        isOnlyString,
        isToUpperCase,
        join,
        map,
        mapToString,
        passToArray,
        reduce,
        removeTheFirstLetter,
        removeTheLastLetter,
        reverse,
        specialCharacters,
        searchNumber,
        string,
        toLowerCase,
        toUpperCase,
        takeTheFirstLetter,
        takeTheLastLetter,
        complement: { ...cpt }
    }
