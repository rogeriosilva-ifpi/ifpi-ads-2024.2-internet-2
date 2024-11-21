import { Clube } from "./clube.entity";

export class Partida {
  id: number;
  clubeCasa: Clube;
  clubeVisitante: Clube;
  dataHora: Date;

  constructor(casa: Clube, visitante: Clube, dataHora: Date) {
    this.clubeCasa = casa;
    this.clubeVisitante = visitante;
    this.dataHora = dataHora;
  }
}
