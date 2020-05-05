class Moeda {
  constructor(valor, moeda) {
    this.valor = valor;
    this.moeda = moeda;
  }

  getMoeda() {
    return this.moeda;
  }

  getValorReferencia() {
    return this.valor;
  }

  valorEmReais() {
    return this.valor * this.moeda.valor;
  }

  toString() {
    return "R$ " + this.valorEmReais();
  }
}
