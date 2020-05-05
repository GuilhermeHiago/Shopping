class EntidadeDTOConverter {
  static Prod2Dto(p) {
    let codigo = p.getCodigo();
    let descricao = p.getDescricao();
    let valor = p.getPrecoUnitario().getValorReferencia();
    let moeda = p.getPrecoUnitario().getMoeda().name();
    return new ProdutoDTO(codigo, descricao, valor, moeda);
  }

  static Dto2Prod(p) {
    let codigo = p.getCodigo();
    let descricao = p.getDescricao();
    let valorRef = p.getPrecoUnitario();
    let nomeMoeda = p.getMoeda();
    return new Produto(
      codigo,
      descricao,
      new Moeda(valorRef, TipoMoeda[nomeMoeda])
    );
  }

  static Cart2DTO(c) {
    return null;
  }
}
