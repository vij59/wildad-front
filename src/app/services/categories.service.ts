export class CategoriesService {

  categories = [
    {
      name: 'Xtreme',
      status: 'disponible'
    },
    {
      name: 'Tranquille',
      status: 'disponible'
    },
    {
      name: 'Dépaysant',
      status: 'indisponible'
    }
  ];

  setAllUnavailable() {
    for (let categorie of this.categories) {
      categorie.status = 'indisponible';
    }
  }

  setAllAvailable() {
    for (let categorie of this.categories) {
      categorie.status = 'disponible';
    }
  }

  setOneAvailable(i: number) {
    this.categories[i].status = 'disponible';
  }

  setOneUnavailable(i: number) {
    this.categories[i].status = 'indisponible';
  }
}
