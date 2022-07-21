const calcularPreco = (nome, preco) => {
  let frete;
  if (preco > 4000) {
    frete = 700;
  }
  if (preco > 2000) {
    frete = 450;
  } else {
    frete = 300;
  }

  console.log(`O produto ${nome} custa R$${preco}. Seu custo de envio é
R$${frete}. Portanto, o preço final é R$${frete + preco}`);
};

calcularPreco("Macbook", 2500);
calcularPreco("Celular", 500);
calcularPreco(`Playstation`, 4500);
