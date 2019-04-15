import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { RoomModalComponent } from './room-modal/room-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private translate: TranslateService, public dialog: MatDialog) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  openModal() {
    this.dialog.open(RoomModalComponent, {
      width: '350px'
    });
  }

}
