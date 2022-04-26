import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-Desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {

  public id : number = 0;
  public name : string = "";
  public photo : any;
  public numberPhone : number = 0;
  public email : string = "";
  public date : any;
  public idGere : number = 0;

  public formEmployee: FormGroup = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    photo : new FormControl('', Validators.required),
    numberPhone : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    idGere : new FormControl('', Validators.required),
    time: new FormControl(null),
  });

  constructor(
    public dialogRef: MatDialogRef<DesplegableComponent>,
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formEmployee.value);
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
}
