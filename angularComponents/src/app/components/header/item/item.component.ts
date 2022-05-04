import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit 
{
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
