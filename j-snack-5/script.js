const biciclette = [
  {
    nome: 'Bianchi',
    peso: 7.8
  },
  {
    nome: 'Atala',
    peso: 8.4
  },
  {
    nome: 'Olmo',
    peso: 7.9
  },
  {
    nome: 'Casati',
    peso: 7.5
  },
  {
    nome: 'Colnago',
    peso: 6.8
  },
  {
    nome: 'Bottecchia',
    peso: 6.9
  },
  {
    nome: 'Cinelli',
    peso: 7.1
  },
  {
    nome: 'Pistidda',
    peso: 7.5
  }
];

const studentsContainer = document.querySelector('.bikes-container');

const biciLeggera = biciclette.sort((a, b) =>{
  if (a.peso < b.peso) {return -1;}
  if (a.peso > b.peso) {return 1;}
  return 0;
});

studentsContainer.innerHTML = `
  <p>
    La bicicletta più leggera è ${biciLeggera[0].nome} con un peso di ${biciLeggera[0].peso}kg
  </p>
`;

console.log(biciLeggera[0]);
