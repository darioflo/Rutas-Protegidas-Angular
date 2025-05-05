import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

type Form = FormGroup<{
  correo: FormControl<string>;
  contraseña: FormControl<string>;
}>;

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formBuilder = inject(NonNullableFormBuilder);
  authService = inject(AuthService);

  form: Form = this.formBuilder.group({
    correo: this.formBuilder.control(''),
    contraseña: this.formBuilder.control(''),
  });

  onSubmit() {
    console.log(this.form.valid);
    console.log(this.form.value);
    if (this.form.value.correo && this.form.value.contraseña) {
      const loginSuccess = this.authService.login(
        this.form.value.correo,
        this.form.value.contraseña
      );

      if (loginSuccess) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.error('Formulario inválido');
      }
      this.form.reset();
    } else {
      console.log('Formulario Inválido');
    }
    console.log(this.authService.user$);
  }
}
