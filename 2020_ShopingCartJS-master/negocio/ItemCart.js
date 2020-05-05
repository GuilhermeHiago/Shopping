class ItemCart {
  constructor(produto, quantidade) {
    this._produto = produto;
    this._quantidade = quantidade;
  }

  get produto() {
    return this._produto;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valorDoItem() {
    return this._produto.precoUnitario.valorEmReais() * this._quantidade;
  }
}
