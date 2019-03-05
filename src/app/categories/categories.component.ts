import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categorieName: string;
  @Input() categorieStatus: string;
  @Input() index: number;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.categorieStatus === 'disponible') {
      return 'blue';
    } else {
      return 'green';
    }
  }

  getStatus() {
    return this.categorieStatus;
  }

  onSwitchOn() {
    this.categoriesService.setAllAvailable();
  }

  onSwitchOff() {
    if (confirm('Etes-vous sûr de vouloir indisposer toutes les catégories ?')) {
      this.categoriesService.setAllUnavailable();
    } else {
      return null;
    }
  }

  onSwitch() {
    if (this.categorieStatus === 'disponible') {
      this.categoriesService.setOneUnavailable(this.index);
    } else if (this.categorieStatus === 'indisponible') {
      this.categoriesService.setOneAvailable(this.index);
    }
  }

}
