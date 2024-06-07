import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  formularioContacto: FormGroup;
  tipoDni: string = '';
  mostrarDni: boolean = false;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // * otra manera de setear los validators en el ngOnInit

  ngOnInit(): void {
    // ? this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]);
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.mostrarDni = value != '';
      this.tipoDni = value;
      // console.log(value);
    })
  }

  ngOnDestroy(): void {
    console.log("Se destruyo un componente");
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }

  enviar() {
    console.log(this.formularioContacto);
  }
}
