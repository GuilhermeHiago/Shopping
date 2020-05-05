function exibeProdutos() {
  CadastroProduto.getInstance().reset();
  let opcoes = "";
  while ((p = CadastroProduto.getInstance().next()) != null) {
    p = EntidadeDTOConverter.Dto2Prod(p);
    opcoes +=
      '<option value="' + p.codigo + '">' + p.toString() + "</option>\n";
  }
  let prod = document.getElementById("produtos");
  prod.innerHTML = opcoes;
}

function insereLinhaCart(item) {
  let tabela = document.getElementById("tabela");
  let numOfRows = tabela.rows.length;
  let newRow = tabela.insertRow(numOfRows);
  let newCod = newRow.insertCell(0);
  newCod.innerHTML = item.produto.toString();
  let newQtdade = newRow.insertCell(1);
  newQtdade.innerHTML = item.quantidade;
  let newValor = newRow.insertCell(2);
  newValor.innerHTML = item.valorDoItem;
  let total = document.getElementById("total");
  total.innerHTML = "Preço Bruto: R$ " + cart.subTotal;
  let totalDesconto = document.getElementById("desconto");
  totalDesconto.innerHTML = "Desconto: R$ " + cart.desconto;
  let ICMS = document.getElementById("ICMS");
  ICMS.innerHTML = "ICMS: R$ " + cart.ICMS;
  let entrega = document.getElementById("entrega");
  entrega.innerHTML = "Entrega: R$ " + cart.entrega;
  let ISSQN = document.getElementById("ISSQN");
  ISSQN.innerHTML = "ISSQN: R$ " + cart.ISSQN;
  let final = document.getElementById("final");
  final.innerHTML = "Valor Final: R$ " + cart.totalFinal;
}

function removeLinhaCart() {
  if (cart.removeLast() != null) {
    var tabela = document.getElementById("tabela");
    var numOfRows = tabela.rows.length;
    tabela.deleteRow(numOfRows - 1);
  }
  let newValor = newRow.insertCell(2);
  newValor.innerHTML = item.valorDoItem;
  let total = document.getElementById("total");
  total.innerHTML = "Preço Bruto: R$ " + cart.subTotal;
  let totalDesconto = document.getElementById("desconto");
  totalDesconto.innerHTML = "Desconto: R$ " + cart.desconto;
  let ICMS = document.getElementById("ICMS");
  ICMS.innerHTML = "ICMS: R$ " + cart.ICMS;
  let entrega = document.getElementById("entrega");
  entrega.innerHTML = "Entrega: R$ " + cart.entrega;
  let ISSQN = document.getElementById("ISSQN");
  ISSQN.innerHTML = "ISSQN: R$ " + cart.ISSQN;
  let final = document.getElementById("final");
  final.innerHTML = "Valor Final: R$ " + cart.totalFinal;
}

function checkout() {
  // Primeiro deveria persistir o "cart"
  // ...
  // Criar um novo modelo vazio
  cart = new Cart();
  // Limpar a visualização
  let tabela = document.getElementById("tabela");
  let numOfRows = 0;
  while ((numOfRows = tabela.rows.length) > 1) {
    tabela.deleteRow(numOfRows - 1);
  }
  alert("Venda efetuada !!");
  let total = document.getElementById("total");
  total.innerHTML = "R$ " + cart.subTotal;
}

// Programa principal
var cart = new Cart();

CadastroProduto.getInstance().carregaProdutos();
exibeProdutos();

let butAdd = document.getElementById("butAdd");
butAdd.onclick = function () {
  // Pega a quantidade
  let qtdade = Number(document.getElementById("quantidade").value);
  if (qtdade <= 0 || isNaN(qtdade) || qtdade % 1 !== 0) {
    alert("Quantidade inválida!");
    return;
  }
  let codProd = Number(document.getElementById("produtos").value);
  item = cart.addItem(codProd, qtdade);
  insereLinhaCart(item);
};

let butRemove = document.getElementById("butRemove");
butRemove.onclick = removeLinhaCart;

let butCheckout = document.getElementById("butCheckout");
butCheckout.onclick = checkout;
