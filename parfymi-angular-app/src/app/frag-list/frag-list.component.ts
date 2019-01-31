import { Component, Input, OnInit } from '@angular/core';

import { Fragrance } from '../models/fragrance';

@Component({
  selector: 'app-frag-list',
  templateUrl: './frag-list.component.html',
  styleUrls: ['./frag-list.component.css']
})
export class FragListComponent implements OnInit {
  fragrances: Array<Fragrance>;

  constructor() {
    this.fragrances = [
      {
        id: 1,
        name: "Man In Black",
        designer: "Bvlgari",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.26358.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Bvlgari-Man-In-Black-26358.html"
      },
      {
        id: 2,
        name: "Jasmin Noir",
        designer: "Bvlgari",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.3750.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Jasmin-Noir-3750.html"
      },
      {
        id: 3,
        name: "Black",
        designer: "Bvlgari",
        gender: "unisex",
        image: "https://i.fragrances.bg/image/cache/data/bvlgari_black2-500x500.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Black-154.html"
      },
      {
        id: 4,
        name: "CK One Shock",
        designer: "Calvin Klein",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.12520.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/CK-One-Shock-For-Him-12520.html"
      },
      {
        id: 5,
        name: "Eternity",
        designer: "Calvin Klein",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.257.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/Eternity-257.html"
      },
      {
        id: 6,
        name: "CK One",
        designer: "Calvin Klein",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.276.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/CK-One-276.html"
      },
      {
        id: 7,
        name: "CH Men",
        designer: "Carolina Herrera",
        gender: "male",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCkKDJaSrbuwCMN-KbJC3UmZz1mhr9JeeP1sP9TdNw77Kw8fOQ",
        infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/CH-Men-6759.html"
      },
      {
        id: 8,
        name: "Good Girl",
        designer: "Carolina Herrera",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.39681.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/Good-Girl-39681.html"
      },
      {
        id: 9,
        name: "Burning Rose",
        designer: "Carolina Herrera",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.31053.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/Burning-Rose-31053.html"
      },
      {
        id: 10,
        name: "Bleu de Chanel",
        designer: "Chanel",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.9099.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Chanel/Bleu-de-Chanel-9099.html"
      },
      {
        id: 11,
        name: "No 5",
        designer: "Chanel",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.28711.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Chanel/Chanel-No-5-Parfum-28711.html"
      },
      {
        id: 12,
        name: "Sycomore",
        designer: "Chanel",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.41780.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Chanel/Sycomore-Eau-de-Parfum-41780.html"
      },
      {
        id: 13,
        name: "Aventus",
        designer: "Creed",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Creed/Aventus-9828.html"
      },
      {
        id: 14,
        name: "Love in White",
        designer: "Creed",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.4262.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Creed/Love-in-White-4262.html"
      },
      {
        id: 15,
        name: "Millésime Impérial",
        designer: "Creed",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.466.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Creed/Mill-sime-Imp-rial-466.html"
      },
      {
        id: 16,
        name: "Sauvage",
        designer: "Christian Dior",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.31861.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Sauvage-31861.html"
      },
      {
        id: 17,
        name: "Hypnotic Poison",
        designer: "Christian Dior",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.219.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Hypnotic-Poison-219.html"
      },
      {
        id: 18,
        name: "Ambre Nuit",
        designer: "Christian Dior",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.7092.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Ambre-Nuit-7092.html"
      },
      {
        id: 19,
        name: "The One",
        designer: "Dolce & Gabbana",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.2056.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/The-One-for-Men-2056.html"
      },
      {
        id: 20,
        name: "Light Blue",
        designer: "Dolce & Gabbana",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.485.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-485.html"
      },
      {
        id: 21,
        name: "Velvet Desert Oud",
        designer: "Dolce & Gabbana",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.18165.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/Velvet-Desert-Oud-18165.html"
      },
      {
        id: 22,
        name: "Armani Code",
        designer: "Giorgio Armani",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.412.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Armani-Code-412.html"
      },
      {
        id: 23,
        name: "Acqua di Gioia",
        designer: "Giorgio Armani",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.8442.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Acqua-di-Gioia-8442.html"
      },
      {
        id: 24,
        name: "Cuir Amethyste",
        designer: "Giorgio Armani",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.408.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Cuir-Amethyste-408.html"
      },
      {
        id: 25,
        name: "Invictus",
        designer: "Paco Rabanne",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.18471.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Invictus-18471.html"
      },
      {
        id: 26,
        name: "Lady Million",
        designer: "Paco Rabanne",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.9045.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Lady-Million-9045.html"
      },
      {
        id: 27,
        name: "Paco Energy",
        designer: "Paco Rabanne",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.1488.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Paco-1487.html"
      },
      {
        id: 28,
        name: "Noir Extreme",
        designer: "Tom Ford",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.29675.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html"
      },
      {
        id: 29,
        name: "Black Orchid",
        designer: "Tom Ford",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.1018.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Black-Orchid-1018.html"
      },
      {
        id: 30,
        name: "Tobacco Vanille",
        designer: "Tom Ford",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.1825.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Tobacco-Vanille-1825.html"
      },
      {
        id: 31,
        name: "L'Homme",
        designer: "Yves Saint Laurent",
        gender: "male",
        image: "https://fimgs.net/mdimg/perfume/375x500.734.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/L-Homme-734.html"
      },
      {
        id: 32,
        name: "Black Opium",
        designer: "Yves Saint Laurent",
        gender: "female",
        image: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Black-Opium-25324.html"
      },
      {
        id: 33,
        name: "Exquisite Musk",
        designer: "Yves Saint Laurent",
        gender: "unisex",
        image: "https://fimgs.net/mdimg/perfume/375x500.38387.jpg",
        infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Exquisite-Musk-38387.html"
      },     
    ]
  }

  visibleFrags: Array<Fragrance>;
  genderFilter: string;
  designerFilter: string;
  filterByAll() {  
    this.visibleFrags = this.fragrances;
    if (this.genderFilter && this.genderFilter !== "allGenders") {
      this.visibleFrags = this.visibleFrags.filter(frag => {
        if (frag.gender === this.genderFilter)
        return frag
      })
    }
    
    if (this.designerFilter && this.designerFilter !== "allDesigner") {
      this.visibleFrags = this.visibleFrags.filter(frag => {
        if (frag.designer === this.designerFilter)
        return frag
      })
    }

    console.log(this.fragrances);
  }

  filterGender(filter: string) {   
    this.genderFilter = filter;
    this.filterByAll();
  }

  filterDesigner(filter: string) {
    this.designerFilter = filter;
    this.filterByAll();
  }

  ngOnInit() {
    this.visibleFrags = this.fragrances;
  }
}