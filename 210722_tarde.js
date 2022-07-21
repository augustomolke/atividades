let products = [
  {
    name: "Macbook",
    price: 1300,
    quantity: 40,
    colors: ["silver", "black", "white"],
  },
  {
    name: "Iphone",
    price: 1000,
    quantity: 50,
    colors: ["silver", "red", "white"],
  },
  { name: "Pendrive", price: 10, quantity: 10, colors: [] },
  { name: "Headset", price: 50, quantity: 0, colors: ["black"] },
  { name: "Mouse", price: 20, quantity: 5, colors: ["white", "black", "blue"] },
  { name: "Tablet", price: 500, quantity: 20, colors: ["white", "black"] },
  { name: "USB adaptor", price: 5, quantity: 0, colors: [] },
  { name: "Keyboard", price: 30, quantity: 35, colors: ["white"] },
  { name: "Gamepad", price: 30, quantity: 25, colors: ["black", "silver"] },
  { name: "Monitor", price: 200, quantity: 3, colors: [] },
];

/** PARTE 1*/

// 1. Adicione um ID exclusivo a cada produto começando em 1.

const addId = () => {
  for (var i = 0; i < products.length; i++) {
    products[i] = { ...products[i], id: i + 1 };
  }
};

addId();

// 2. Imprima o nome de cada um dos produtos no console.

const printNames = () => {
  products.forEach((item) => console.log(item.name));
};

//printNames();

// 3. Imprima no console o produto com o id 3.

const printCondition1 = () => {
  console.log(products.find((item) => item.id === 3));
};
//printCondition1();

// 4. Imprima no console os produtos com a cor “black”.

const printCondition2 = () => {
  console.log(products.filter((item) => item.colors.includes("black")));
};
// printCondition2();

// 5. Imprima no console os produtos que não possuem cor.

const printCondition3 = () => {
  console.log(products.filter((item) => item.colors.length === 0));
};

printCondition3();
/** PARTE 2  */

// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.

const addProduct = () =>
  products.push({
    name: "New prod",
    price: 10,
    quantity: 10,
    colors: ["blue"],
  });

addProduct();

// 2. Remova os produtos fora de estoque da matriz.

const removeStockout = () => {
  products = products.filter((item) => item.quantity > 0);
};

removeStockout();

// 3. Imprima no console a soma do estoque de todos os produtos.

const printTotalStock = () => {
  console.log(products.reduce((acc, curr) => curr.quantity + acc, 0));
};

printTotalStock();

// 4. Imprima produtos com preço superior a um determinado valor.

const printHigherThan = (price) => {
  products.forEach((item) => {
    if (item.price > price) {
      console.log(item);
    }
  });
};

printHigherThan();

// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

const printWithLetterO = () => {
  products.forEach((item) => {
    if (item.name.includes("o")) {
      console.log(item);
    }
  });
};

printWithLetterO();
