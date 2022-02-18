// fetch la data depuis mon fichier mock_data.json dans le dossier public
const fetchNames = async () => {
  const response = await fetch('mock_data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const algorithm = async () => {
  // on récupére la data
  let data = await fetchNames();

  // on mixe aléatoirement notre array grâce à sort et random
  data = data.sort(() => Math.random() - 0.5);

  // on va itérer notre array avec reducer pour avoir l'accumulateur et le current
  const result = data.reduce((acc, curr) => {
    // on récupère la personne qui offre en filtrant pour être sur que notre current(receveur) ne soit pas la personne qui offre
    const offre = data.filter((item) => item.firstName !== curr.firstName)[0];

    // on récupère l'index de la personne qui offre
    let i;
    data.forEach((item, index) => {
      if (item.uuid === offre.uuid) {
        i = index;
      }
    });

    // on supprimer la personne qui offre pour être sur que ce dernier ne puisse pas offrir deux fois
    data.splice(i, 1);

    // on push la personne qui offre et la personne qui recoit dons un objet
    acc.push({
      offre,
      receveur: curr,
    });
    return acc;
  }, []);

  // on return le résultat
  return result;
};

export default algorithm;
