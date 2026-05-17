import AgendaVisitor from './generated/AgendaVisitor.js';

export default class CustomVisitor extends AgendaVisitor {

  visitAgenda(ctx) {
    return this.visitChildren(ctx);
  }

  visitEvento(ctx) {
    const fecha = ctx.fecha().getText();
    const hora = ctx.hora().getText();
    const descripcion = ctx.descripcion().getText().replace(/"/g, '');

    console.log(`Evento: ${fecha} ${hora} - ${descripcion}`);
  }
}