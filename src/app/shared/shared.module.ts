import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { ShellComponent } from './shell/shell.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const components = [ShellComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule {
}
