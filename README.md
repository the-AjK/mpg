mpg - Maaperture Parser Generator
-------------
Copyright (c) 2014, Alberto Garbui (aka JK) www.ajk.altervista.org

All rights reserved.

Install:

	npm install -g mpg
	
Usage:

	mpg <command> [options]

	Commands:

	generate               generate a parser from a grammar file
	test                   test a parser against a dsl file

	Options:

	-h, --help                    output usage information
	-V, --version                 output the version number
	-G, --grammar <grammar_file>  specify the input grammar
	-P, --parser <parser_file>    specify the parser file to test
	-D, --dsl <dsl_file>          specify the dsl file to test
	-O, --output <output_file>    specify the output file

	Examples:

	$ mpg generate -G maaperture_dsl_grammar.js -O DSLParser.js
	$ mpg test -P DSLParser.js -D example.dsl -O result.json