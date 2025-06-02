import { Component } from '@angular/core';

import { DataService } from '../services/data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.css']
})
export class VirtualTableComponent {
 users: User[] = [];
  displayedColumns: string[] = ['id', 'itemName', 'quantity', 'uom', 'brand', 'RM', 'RF', 'unitPrice', 'extendedPrice', 'tax', 'totalPrice', 'baselinePrice'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }
}
