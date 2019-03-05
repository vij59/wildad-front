import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-adventure-view',
  templateUrl: './adventure-view.component.html',
  styleUrls: ['./adventure-view.component.scss']
})
export class AdventureViewComponent implements OnInit {

  isAuth = false;

  title = 'wicked adventures';

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  categories: any[];

  constructor(private categoriesService: CategoriesService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories;
  }

  onAfficherAventures() {
    console.log('voici les aventures mon petit');
  }

  onIndisponible() {
    this.categoriesService.setAllUnavailable();
  }
  onDisponible() {
    this.categoriesService.setAllAvailable();
  }
}
