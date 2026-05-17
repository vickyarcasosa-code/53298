// Generated from Agenda.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000b8\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0007\t+\n\t\f\t\u000e\t.\u000b\t\u0003\t\u0003\t\u0003\n\u0006\n3",
    "\n\n\r\n\u000e\n4\u0003\n\u0003\n\u0003,\u0002\u000b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0003\u0002\u0004\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u00029\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0003\u0015\u0003\u0002",
    "\u0002\u0002\u0005\u001c\u0003\u0002\u0002\u0002\u0007\u001e\u0003\u0002",
    "\u0002\u0002\t \u0003\u0002\u0002\u0002\u000b\"\u0003\u0002\u0002\u0002",
    "\r$\u0003\u0002\u0002\u0002\u000f&\u0003\u0002\u0002\u0002\u0011(\u0003",
    "\u0002\u0002\u0002\u00132\u0003\u0002\u0002\u0002\u0015\u0016\u0007",
    "c\u0002\u0002\u0016\u0017\u0007i\u0002\u0002\u0017\u0018\u0007g\u0002",
    "\u0002\u0018\u0019\u0007p\u0002\u0002\u0019\u001a\u0007f\u0002\u0002",
    "\u001a\u001b\u0007c\u0002\u0002\u001b\u0004\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0007}\u0002\u0002\u001d\u0006\u0003\u0002\u0002\u0002",
    "\u001e\u001f\u0007\u007f\u0002\u0002\u001f\b\u0003\u0002\u0002\u0002",
    " !\u0007<\u0002\u0002!\n\u0003\u0002\u0002\u0002\"#\u0007=\u0002\u0002",
    "#\f\u0003\u0002\u0002\u0002$%\u00071\u0002\u0002%\u000e\u0003\u0002",
    "\u0002\u0002&\'\t\u0002\u0002\u0002\'\u0010\u0003\u0002\u0002\u0002",
    "(,\u0007$\u0002\u0002)+\u000b\u0002\u0002\u0002*)\u0003\u0002\u0002",
    "\u0002+.\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002,*\u0003\u0002",
    "\u0002\u0002-/\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/0\u0007",
    "$\u0002\u00020\u0012\u0003\u0002\u0002\u000213\t\u0003\u0002\u00022",
    "1\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\b\n\u0002",
    "\u00027\u0014\u0003\u0002\u0002\u0002\u0005\u0002,4\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AgendaLexer extends antlr4.Lexer {

    static grammarFileName = "Agenda.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'agenda'", "'{'", "'}'", "':'", "';'", "'/'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, "DIG", 
                          "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "DIG", 
                      "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

AgendaLexer.EOF = antlr4.Token.EOF;
AgendaLexer.T__0 = 1;
AgendaLexer.T__1 = 2;
AgendaLexer.T__2 = 3;
AgendaLexer.T__3 = 4;
AgendaLexer.T__4 = 5;
AgendaLexer.T__5 = 6;
AgendaLexer.DIG = 7;
AgendaLexer.STRING = 8;
AgendaLexer.WS = 9;



