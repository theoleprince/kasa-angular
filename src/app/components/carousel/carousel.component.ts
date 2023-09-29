import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() logement: any;
  currentIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  setCurrentIndex(value: number): void{
    this.currentIndex = value;
  }

  handlePrev = () => {
    this.setCurrentIndex(this.currentIndex === 0 ? this.logement.pictures.length - 1 : this.currentIndex - 1);
  }

  handleNext = () => {
    this.setCurrentIndex(this.currentIndex === this.logement.pictures.length - 1 ? 0 : this.currentIndex + 1);
  }
  // Mettez à jour le numéro de l'image actuelle à chaque fois que l'utilisateur change d'image
  handleSelect = (selectedIndex: any) => {
    this.setCurrentIndex(selectedIndex);
  }
}
