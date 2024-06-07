import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{


  @Input()tipoDni: string = 'DNI';
  formularioDocumento: FormGroup;

  variableNueva: string = "DNI";
  

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // * currenValue es para ver el valor actual de tipoDni en la consola
      this.variableNueva = changes?.['tipoDni'].currentValue;
      console.log(changes);
  }


  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
