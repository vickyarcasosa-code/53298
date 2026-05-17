import antlr4 from 'antlr4';
import fs from 'fs';

import AgendaLexer from './generated/AgendaLexer.js';
import AgendaParser from './generated/AgendaParser.js';
import CustomVisitor from './CustomVisitor.js';

const input = fs.readFileSync('input.txt', 'utf8');

const chars = new antlr4.InputStream(input);
const lexer = new AgendaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AgendaParser(tokens);

const tree = parser.agenda();

if (parser._syntaxErrors > 0) {
  console.log("❌ Error de sintaxis");
} else {
  console.log("✅ Entrada válida\n");

  console.log("🌳 Árbol:");
  console.log(tree.toStringTree(parser.ruleNames));

  console.log("\n📅 Eventos:");
  const visitor = new CustomVisitor();
  visitor.visit(tree);
} 