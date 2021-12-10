const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
let incluyeCamiseta = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")){
        incluyeCamiseta.push(products[i]);
    }
}

    console.log(incluyeCamiseta);