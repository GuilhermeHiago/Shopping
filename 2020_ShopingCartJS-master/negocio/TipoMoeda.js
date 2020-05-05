class TipoMoeda {
  constructor(valor) {
    this.valor = valor;
  }
}

TipoMoeda.Real = new TipoMoeda(1.0);
TipoMoeda.Peso = new TipoMoeda(0.2);
TipoMoeda.Euro = new TipoMoeda(5.2);
TipoMoeda.Dolar = new TipoMoeda(4.8);
