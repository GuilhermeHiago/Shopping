class ProdutoDTO {
  constructor(codigo, descricao, precoUnitario, moeda) {
    this.moeda = moeda;
    this.codigo = codigo;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
  }

  getCodigo() {
    return this.codigo;
  }

  getMoeda() {
    return this.moeda;
  }

  getDescricao() {
    return this.descricao;
  }

  getPrecoUnitario() {
    return this.precoUnitario;
  }

  setPrecoUnitario(preco) {
    this.precoUnitario = preco;
  }
}
