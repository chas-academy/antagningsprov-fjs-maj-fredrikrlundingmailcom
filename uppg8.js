

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const persons = [
    { name: "Ivar", age: 45 },
    { name: "Sara", age: 20 },
    { name: "Lisa", age: 56 },
    { name: "Karl", age: 12 },
    { name: "Eva", age: 89 },
];

function PersonsOver30(persons)
{
    for (const person of persons)
    {
        if (person.age > 30)
            {
                console.log(person.name)
            }
    }  
}

PersonsOver30(persons)

}

uppg8()

module.exports = { uppg8 };