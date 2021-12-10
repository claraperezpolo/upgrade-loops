const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

let deleteToy = [];
    for (let a of toys) {
        if(a.name.includes("gato")) {
            toys.splice(a, 0);
    } else {
        deleteToy.push(a);
    }
}

console.log(deleteToy);