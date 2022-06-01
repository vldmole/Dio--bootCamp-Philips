import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-stylized-button',
  templateUrl: './stylized-button.component.html',
  styleUrls: ['./stylized-button.component.css']
})
export class StylizedButtonComponent
{
  @Input() actionName: string = 'edit';
  @Input() onClickFnc: (arg: any) => void = () => { return };
  @Input() onClickArg: any;
  @Input() actionObject: any;

  constructor() { }

  public click()
  {
    this.onClickFnc.apply(this.actionObject, [this.onClickArg]);
  }

}
