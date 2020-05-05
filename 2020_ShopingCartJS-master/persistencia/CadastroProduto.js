class CadastroProduto {
  constructor() {
    this._current = 0;
    this._produtos = [];
  }

  carregaProdutos() {
    // Carregar de arquivo é desencorajado por motivos de CORS

    this._produtos.push(new ProdutoDTO(100, "Banana", 2.5, "Real"));
    this._produtos.push(new ProdutoDTO(120, "Maca", 4.5, "Peso"));
    this._produtos.push(new ProdutoDTO(105, "Laranja", 1.2, "Dolar"));
    this._produtos.push(new ProdutoDTO(135, "Limão", 0.8, "Real"));
    this._produtos.push(new ProdutoDTO(124, "Romã", 1.18, "Euro"));
    this._produtos.push(new ProdutoDTO(152, "Uva", 2.2, "Euro"));
  }

  recuperaPorCodigo(codigo) {
    let prod = this._produtos.find((prod) => prod.codigo === codigo);
    if (prod === undefined) {
      return null;
    } else {
      return prod;
    }
  }

  reset() {
    this._current = 0;
  }

  next() {
    if (this._current >= this._produtos.length) {
      return null;
    }
    let prod = this._produtos[this._current];
    this._current = this._current + 1;
    return prod;
  }

  static getInstance() {
    if (this.cp === undefined) {
      this.cp = new CadastroProduto();
    }
    return this.cp;
  }
}
