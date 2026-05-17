// Generated from Agenda.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import AgendaListener from './AgendaListener.js';
import AgendaVisitor from './AgendaVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000b0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0002\u0002+\u0002\f\u0003\u0002\u0002",
    "\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002",
    "\u0002\b\'\u0003\u0002\u0002\u0002\n-\u0003\u0002\u0002\u0002\f\r\u0007",
    "\u0003\u0002\u0002\r\u0011\u0007\u0004\u0002\u0002\u000e\u0010\u0005",
    "\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u0014\u0003\u0002\u0002\u0002\u0013\u0011\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0007\u0005\u0002\u0002\u0015\u0003\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0005\u0006\u0004\u0002\u0017\u0018\u0005",
    "\b\u0005\u0002\u0018\u0019\u0007\u0006\u0002\u0002\u0019\u001a\u0005",
    "\n\u0006\u0002\u001a\u001b\u0007\u0007\u0002\u0002\u001b\u0005\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0007\t\u0002\u0002\u001d\u001e\u0007",
    "\t\u0002\u0002\u001e\u001f\u0007\b\u0002\u0002\u001f \u0007\t\u0002",
    "\u0002 !\u0007\t\u0002\u0002!\"\u0007\b\u0002\u0002\"#\u0007\t\u0002",
    "\u0002#$\u0007\t\u0002\u0002$%\u0007\t\u0002\u0002%&\u0007\t\u0002\u0002",
    "&\u0007\u0003\u0002\u0002\u0002\'(\u0007\t\u0002\u0002()\u0007\t\u0002",
    "\u0002)*\u0007\u0006\u0002\u0002*+\u0007\t\u0002\u0002+,\u0007\t\u0002",
    "\u0002,\t\u0003\u0002\u0002\u0002-.\u0007\n\u0002\u0002.\u000b\u0003",
    "\u0002\u0002\u0002\u0003\u0011"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class AgendaParser extends antlr4.Parser {

    static grammarFileName = "Agenda.g4";
    static literalNames = [ null, "'agenda'", "'{'", "'}'", "':'", "';'", 
                            "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "DIG", 
                             "STRING", "WS" ];
    static ruleNames = [ "agenda", "evento", "fecha", "hora", "descripcion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AgendaParser.ruleNames;
        this.literalNames = AgendaParser.literalNames;
        this.symbolicNames = AgendaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	agenda() {
	    let localctx = new AgendaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AgendaParser.RULE_agenda);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(AgendaParser.T__0);
	        this.state = 11;
	        this.match(AgendaParser.T__1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===AgendaParser.DIG) {
	            this.state = 12;
	            this.evento();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(AgendaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	evento() {
	    let localctx = new EventoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AgendaParser.RULE_evento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.fecha();
	        this.state = 21;
	        this.hora();
	        this.state = 22;
	        this.match(AgendaParser.T__3);
	        this.state = 23;
	        this.descripcion();
	        this.state = 24;
	        this.match(AgendaParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AgendaParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(AgendaParser.DIG);
	        this.state = 27;
	        this.match(AgendaParser.DIG);
	        this.state = 28;
	        this.match(AgendaParser.T__5);
	        this.state = 29;
	        this.match(AgendaParser.DIG);
	        this.state = 30;
	        this.match(AgendaParser.DIG);
	        this.state = 31;
	        this.match(AgendaParser.T__5);
	        this.state = 32;
	        this.match(AgendaParser.DIG);
	        this.state = 33;
	        this.match(AgendaParser.DIG);
	        this.state = 34;
	        this.match(AgendaParser.DIG);
	        this.state = 35;
	        this.match(AgendaParser.DIG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AgendaParser.RULE_hora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(AgendaParser.DIG);
	        this.state = 38;
	        this.match(AgendaParser.DIG);
	        this.state = 39;
	        this.match(AgendaParser.T__3);
	        this.state = 40;
	        this.match(AgendaParser.DIG);
	        this.state = 41;
	        this.match(AgendaParser.DIG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	descripcion() {
	    let localctx = new DescripcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AgendaParser.RULE_descripcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(AgendaParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AgendaParser.EOF = antlr4.Token.EOF;
AgendaParser.T__0 = 1;
AgendaParser.T__1 = 2;
AgendaParser.T__2 = 3;
AgendaParser.T__3 = 4;
AgendaParser.T__4 = 5;
AgendaParser.T__5 = 6;
AgendaParser.DIG = 7;
AgendaParser.STRING = 8;
AgendaParser.WS = 9;

AgendaParser.RULE_agenda = 0;
AgendaParser.RULE_evento = 1;
AgendaParser.RULE_fecha = 2;
AgendaParser.RULE_hora = 3;
AgendaParser.RULE_descripcion = 4;

class AgendaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_agenda;
    }

	evento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventoContext);
	    } else {
	        return this.getTypedRuleContext(EventoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterAgenda(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitAgenda(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitAgenda(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EventoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_evento;
    }

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	descripcion() {
	    return this.getTypedRuleContext(DescripcionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterEvento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitEvento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitEvento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_fecha;
    }

	DIG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AgendaParser.DIG);
	    } else {
	        return this.getToken(AgendaParser.DIG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_hora;
    }

	DIG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AgendaParser.DIG);
	    } else {
	        return this.getToken(AgendaParser.DIG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DescripcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_descripcion;
    }

	STRING() {
	    return this.getToken(AgendaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterDescripcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitDescripcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitDescripcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AgendaParser.AgendaContext = AgendaContext; 
AgendaParser.EventoContext = EventoContext; 
AgendaParser.FechaContext = FechaContext; 
AgendaParser.HoraContext = HoraContext; 
AgendaParser.DescripcionContext = DescripcionContext; 
