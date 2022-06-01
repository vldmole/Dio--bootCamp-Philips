import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { StylizedButtonComponent } from './stylized-button/stylized-button.component';

@NgModule({
   declarations: [
      StylizedButtonComponent,
   ],

   imports: [
      MatIconModule,
      MatButtonModule,
   ],

   exports: [
      StylizedButtonComponent,
   ]
})
export class StylizedButtonsModule { };