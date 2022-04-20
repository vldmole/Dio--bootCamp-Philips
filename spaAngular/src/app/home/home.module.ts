import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 


@NgModule({
   declarations: [
      HomeComponent,
   ],
   imports: [
      MatToolbarModule,
      MatIconModule
   ]

})
export class HomeModule
{
   //nothing for now
}