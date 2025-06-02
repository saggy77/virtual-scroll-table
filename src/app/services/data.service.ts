
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private users: User[] = [];
  private UOMs = ['kg', 'ltr', 'pcs', 'box'];
  private brands = ['abc', 'xyz', 'def', 'uvw', 'klm'];

  constructor() {
    this.generateUsers();
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomBrand(): string {
    const idx = Math.floor(Math.random() * this.brands.length);
    return this.brands[idx];
  }

  private generateUsers() {
    for (let i = 1; i <= 1000; i++) {
      const unitPrice = this.randomInt(1500, 2000);
      const extendedPrice = this.randomInt(1600, 2200);
      const totalPriceValue = this.randomInt(40000, 50000);
      const quantity = this.randomInt(1, 100);
      const uom = this.UOMs[this.randomInt(0, this.UOMs.length - 1)];
      this.users.push({
        id: i,
        itemName: `Item ${i}`,
        quantity: quantity.toString(),
        uom: uom,
        brand: this.randomBrand(),
        RM: `INR ${this.randomInt(400, 600)}`,
        RF: `INR ${this.randomInt(500, 700)}`,
        unitPrice: unitPrice,
        extendedPrice: extendedPrice,
        tax: '12%',
        totalPrice: `INR ${totalPriceValue}`,
        baselinePrice: 'INR 23000',
      });
    }
  }

  getUsers(): User[] {
    return this.users;
  }
}

