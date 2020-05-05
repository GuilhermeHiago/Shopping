class Cart {
  constructor() {
    this._current = 0;
    this._itens = [];
  }

  addItem(codigo, quantidade) {
    let prod = EntidadeDTOConverter.Dto2Prod(
      CadastroProduto.getInstance().recuperaPorCodigo(codigo)); // Dependência implícita
    let item = new ItemCart(prod, quantidade);
    this._itens.push(item);
    return item;
  }

  get lastItem() {
    if (this._itens.length === 0) {
      return null;
    } else {
      return this._itens[this._itens.length - 1];
    }
  }

  removeLast() {
    if (this._itens.length == 0) {
      return null;
    } else {
      return this._itens.pop();
    }
  }

  get qtdadeItens() {
    return this._itens.length;
  }

  get subTotal() {
    let sum = 0;
    this._itens.forEach((item) => {
      sum = sum + item.produto.precoUnitario.valorEmReais() * item.quantidade;
    });
    return sum;
  }

  get desconto(){
    let sum = 0;
    let numItens = 0;
    this._itens.forEach((item) => {
      if (numItens >= 10){
        // Soma os valores que tem desconto direto se ultrapassou 10 itens
        sum += ((item.produto.precoUnitario.valorEmReais() * item.quantidade) * 0.1);
      }
      else{
        if (item.quantidade + numItens >= 10){
          // Calcula quantos itens tem desconto
          let dif = item.quantidade - (10 - numItens);

          // Soma os valores sem desconto 
          //sum += item.produto.precoUnitario.valorEmReais() * (item.quantidade - dif);

          // Soma os valores que tem desconto
          sum += (item.produto.precoUnitario.valorEmReais() * dif) * 0.1;
          numItens = 15;
        }
        else{
          //sum += item.produto.precoUnitario.valorEmReais() * item.quantidade;
          numItens = item.quantidade;
        }
      }
    });
    return sum;
  }

  get ICMS(){
    return this.subTotal * 0.12;
  }

  get entrega(){
    let sum = 0;
    let valor = 0;
    this._itens.forEach((item) => sum += item.quantidade);

    if (sum / 10.0 <= 1){
      // Se tiver ate 10 itens cobra-se 10 reais
      valor += 10;
    }
    else{
      // Caso contrario cobra 10 e 1 real a mais a cada 10 adicionais
      sum = parseInt(sum/10);
      valor += 10 + (sum-1);
    }
    return valor;
  }

  get ISSQN(){
    return this.entrega * 0.05
  }

  get totalFinal(){
    return (this.subTotal - this.desconto + this.ICMS + this.entrega + this.ISSQN);
  }
}
