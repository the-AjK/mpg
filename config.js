/************************************************************************************************\
|	
|	config.js
|	configuration file for mpg (Maaperture Parser Generator)
|
|	Copyright (c) 2014, Alberto Garbui (aka JK) www.ajk.altervista.com
|	All rights reserved.
|
|  	Version: 1.0.0
|
\************************************************************************************************/
'use strict';

var config = {
	pegjs: {
		output: "source",
		optimize: "speed"  //speed or size
	}
};

module.exports.config = config;