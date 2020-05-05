class Produto {
  constructor(codigo, descricao, precoUnitario) {
    this._codigo = Number(codigo);
    this._descricao = descricao;
    this._precoUnitario = precoUnitario;
  }

  get codigo() {
    return this._codigo;
  }

  get descricao() {
    return this._descricao;
  }

  get precoUnitario() {
    return this._precoUnitario;
  }

  set precoUnitario(preco) {
    this._precoUnitario = preco;
  }

  toString() {
    return (
      "Codigo: " +
      this.codigo +
      ", Descricao: " +
      this.descricao +
      ", Preco " +
      this.precoUnitario
    );
  }
}
