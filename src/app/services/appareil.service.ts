import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint',
    },

  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find((s) => {
      return s.id === id;
    });
    return appareil;

  }
}
