    'use strict'

    function curry_1 ( n, fn ) {
        switch ( n ) {
            case 0: return function f ( ) { return fn.apply( this, arguments ); };
            case 1: return function f1 ( n1 ) { return fn.apply( this, arguments ); };
            case 2: return function f2 ( n1, n2 ) { return fn.apply( this, arguments ); };
            case 3: return function f3 ( n1, n2, n3 ) { return fn.apply( this, arguments ); };
            case 4: return function f4 ( n1, n2, n3, n4 ) { return fn.apply( this, arguments ); };
            case 5: return function f5 ( n1, n2, n3, n4, n5 ) { return fn.apply( this, arguments ); };
            case 6: return function f6 ( n1, n2, n3, n4, n5, n6 ) { return fn.apply( this, arguments ); };
            default: throw new Error( 'El primer argumento para curry_1 debe ser un número entero no negativo no mayor que ceis' );
        }
    }

    function curry_2 ( cb ) {
        let arrArgValue = [];
        let returCb = true;
        // Esta funcion es pribada
        function _curry ( ) { 
            if ( arguments.length > cb.length ) throw new Error( `Se esperaban ${ cb.length } argumentos` );
            // Cada ves qe llamemos por primeraves la funcion _currys devolvemos la una nueva funcion.
            if ( returCb ) { returCb = false;   return curry_1( cb.length, _curry ) } 
            else {
                    // Si la funcion _currys no se le pasa ningun parametro entoces devolvemos una nueva funcion.
                    if ( arguments.length === 0 ) return curry_1( arguments.length, _curry );
                    // Si los parametros cuya longitud es igual a la longitud del collback pasado de imediato ejecutamos el collback pasado.
                    else if ( arguments.length === cb.length ) { 
                        let value = cb.apply( null, arguments );
                            arrArgValue = [];
                            return value;
                    }
                    else {
                        arrArgValue.push( ...arguments );
                        // Si la longitud del array arrArgValue es igual a la longitud del collback pasado de imediato ejecutamos el collback pasado.
                        if ( arrArgValue.length === cb.length ) {
                            let value = cb.apply( null, arrArgValue );
                                arrArgValue = [];
                                return value;
                        }
                        else{
                            return curry_1( cb.length - arrArgValue.length, _curry );
                        }
                    }
            }
        }
        return _curry.call( this, cb.length )
    }

    function curry ( cb ) {
        return curry_2( cb );
    }


    function _verificarItemArray ( array, collback ){
        let boolean;
        boolean= array.every( collback );
        return boolean;
    }

     function pipe ( ...cb ) { 
        let _pipe;
        try {
            _pipe = ( arg ) => {
                let arrCb;
                    // Verificando que los item del array todos sean funciones.
                    if( _verificarItemArray( cb, ( value ) => typeof value  === 'function' ) ) {
                        // Ejecutando cada una de las funcion pasada.
                        arrCb = cb.reduce( ( input, funt ) => funt( input ), arg );
                    }  else  throw new Error( `Estas intentando pasar un parametro como funcion.` );
                return arrCb; 
            }; return _pipe;
        } catch ( error ) { console.error( error.message ); }
    }

    module.exports = { curry, pipe }
