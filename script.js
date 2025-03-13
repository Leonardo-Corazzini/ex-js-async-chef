// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
    let ricetta
    try {
        const risposta = await fetch(`https://dummyjson.com/recipes/${id}`)
        ricetta = await risposta.json()
    } catch (error) {
        throw new Error(`Errore nella ricerca ricetta con id ${id}`);

    }

    if (ricetta.message) {
        throw new Error(ricetta.message)
    }
    let chef
    try {
        const risposta2 = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
        chef = await risposta2.json()

    } catch (error) {
        throw new Error(`Non trovata chef con userid${ricetta.userId}`);
    }
    if (chef.message) {
        throw new Error(chef.message)
    }
    return chef.birthDate
}

// getChefBirthday(1)
//     .then(birthday => console.log("Data di nascita dello chef:", birthday))
//     .catch(error => console.error("Errore:", error.message));


(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log(dayjs(birthday).format('DD/MM/YYYY'))
    } catch (error) {
        console.error(error)

    }
})()