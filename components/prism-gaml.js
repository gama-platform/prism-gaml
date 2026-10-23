
const gamlDefinition = {
	'comment': [
		{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, 
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }],
	'string': 
		{ pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
	'number': [
		{
			pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
		},
		{
			pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
		}],
	'type_statement': /\b(?:string\s)(?!(\(|\_))/i,
	'boolean': /\b(?:false|true)\b/i,
	'statement': /\b(?:model|import)\b/i,
	'facet': /\b(?:name):/i,
	'operator': /\b(?:-)\b/i,

	'keyword':/\b(?:nil|each|self|myself)\b/,
	'constant':/#[A-Za-z]+/i,
	'punctuation': /\.\.?|[,;():]/,
	'variableDefinition': /\b(?<=string)\s*[a-z]\w*/i,	
	'variable': /\b[a-z](?:\w)*\b/i
};

if (typeof Prism !== 'undefined') {
	Prism.languages.gaml = gamlDefinition;
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = gamlDefinition;
}
