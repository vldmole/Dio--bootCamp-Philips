import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
   selector: 'star-component',
   templateUrl: './star.component.html',
   styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges
{
   @Input()
   rating: number = 0;

   width: number = 0;

   ngOnChanges(): void
   {
      this.width = this.rating * 94 / 5; //pode ser necessário trocar por 74 pois as vezes não funciona
   }
   
}