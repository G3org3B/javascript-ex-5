
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creazione array studente

var studente = {
  'nome': 'George',
  'cognome': 'Rossi',
  'age': 25,
};

for (var i in studente) {
  console.log(studente[i]);
}

// Creazione array studenti
var studenti = [
  {
    'nome': 'George',
    'cognome': 'Rossi',
    'age': 25,
  },
  {
    'nome': 'Paolo',
    'cognome': 'Bianchi',
    'age': 20,
  },
  {
    'nome': 'Michele',
    'cognome': 'Nero',
    'age': 22,
  }
];

// Array ciclati con FRO IN e Stampa Nomi e Cognomi

for (var i in studenti) {
  console.log(studenti[i]);
  document.writeln(studenti[i].nome + '</br>');
  document.writeln(studenti[i].cognome + '</br>' + '</br>');
}

// Creare il prompt per dare l'opportunità all'utente di inserire un nuovo studente

var newStudente = {};

newStudente.nome = prompt("Inserire il nome dello studente");

newStudente.cognome = prompt("Inserire il cognomenome dello studente");

newStudente.eta = parseInt(prompt("Inserire l'età dello studente"));

console.log(newStudente);
