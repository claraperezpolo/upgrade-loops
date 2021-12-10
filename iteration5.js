const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let name in placesToTravel) {
    if (placesToTravel[name].id == 11 || placesToTravel[name].id == 40) {
        placesToTravel.splice(name, 1);
    }
}

console.log(placesToTravel);