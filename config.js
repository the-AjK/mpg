/************************************************************************************************\
|	
|	config.js
|	configuration file for mpg (Maaperture Parser Generator)
|
|	Copyright (c) 2014, Alberto Garbui (aka JK) www.ajk.altervista.com
|	All rights reserved.
|
|  	Version: 1.0.1
|
\************************************************************************************************/
'use strict';

var config = {
	pegjs: {
	
		//[cache] If true, makes the parser cache results, avoiding exponential parsing time in pathological
		//cases but making the parser slower (default: false).
		cache: 'false',
		
		//[allowedStartRules] Rules the parser will be allowed to start parsing from 
		//(default: the first rule in the grammar).
		allowedStartRules: '',
		
		//[output] If set to "parser", the method will return generated parser object; if set to "source", 
		//it will return parser source code as a string (default: "parser").
		output: 'source',
		
		//[optimize] Selects between optimizing the generated parser for parsing speed ("speed") 
		//or code size ("size") (default: "speed").		
		optimize: 'speed',
		
		//[plugins] Plugins to use
		plugins: ''
		
	}
};

exports.config = config;
