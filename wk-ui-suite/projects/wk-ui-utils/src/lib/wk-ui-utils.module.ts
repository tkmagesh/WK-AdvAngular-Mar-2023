import { NgModule } from '@angular/core';
import { WkUiUtilsComponent } from './wk-ui-utils.component';
import { GreeterComponent } from './greeter/greeter.component';



@NgModule({
  declarations: [
    WkUiUtilsComponent,
    GreeterComponent
  ],
  imports: [
  ],
  exports: [
    WkUiUtilsComponent
  ]
})
export class WkUiUtilsModule { }
