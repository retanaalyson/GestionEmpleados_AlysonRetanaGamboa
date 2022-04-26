import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DesplegableComponent} from "../Desplegable/desplegable.component";
//import {ConsultasService} from "../Service/consultas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public employList = [{'photo':'XD','name':'Alyson','id':'208060016'},{'photo':'<3','name':'Dayam','id':'208060816'}];

  constructor(
    public dialog: MatDialog
    //public consulta : ConsultasService
  ) {
  }

/*
  ngOnInit(): void {
    //const x = this.consulta.cargar();
  }
*/

  public onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80vw';
    dialogConfig.maxHeight = '80vh';
    dialogConfig.panelClass = 'dialog-without-border';
    this.dialog.open(DesplegableComponent, dialogConfig);
  }
}
