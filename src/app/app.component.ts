import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Restaurant', url: 'restaurant', icon: 'restaurant' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Ayuda', url: '/folder/archived', icon: 'help-circle' },
    { title: 'Iniciar Sesion', url: 'login', icon: 'log-in' },
  ];
  public labels = ['SafeFuD',];
  constructor() {}
}
