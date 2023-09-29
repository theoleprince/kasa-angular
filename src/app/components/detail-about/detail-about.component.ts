import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.css']
})
export class DetailAboutComponent implements OnInit {
  abouts = [
    {
        id: 1,
        nom: 'Fiabilité',
        description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        id: 2,
        nom: 'Respect',
        description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        id: 3,
        nom: 'Service',
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        id: 4,
        nom: 'Sécurité',
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]
openedAccordions: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordion(about: number) {
    if(this.openedAccordions.includes(about)) {

    } else {
      this.openedAccordions.push(about)
    }
  }
}
