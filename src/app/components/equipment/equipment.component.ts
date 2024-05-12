import { Component, Input } from '@angular/core';
import { Equipment } from '../../models/equipment';


@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent {

  @Input() equipment: Equipment | any;
  @Input() connected: any;


  constructor() {}

  


}
