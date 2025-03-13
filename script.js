// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
    const risposta = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta = await risposta.json()
    const risposta2 = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
    const chef = await risposta2.json()
    return chef.birthDate
}

getChefBirthday(1)
    .then(birthday => console.log("Data di nascita dello chef:", birthday))
    .catch(error => console.error("Errore:", error.message));