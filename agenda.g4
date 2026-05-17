grammar Agenda;

agenda: 'agenda' '{' evento* '}' ;

evento: fecha hora ':' descripcion ';' ;

fecha: DIG DIG '/' DIG DIG '/' DIG DIG DIG DIG ;

hora: DIG DIG ':' DIG DIG ;

descripcion: STRING ;

DIG: [0-9];

STRING: '"' .*? '"' ;

WS: [ \t\r\n]+ -> skip;