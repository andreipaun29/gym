import { Component, Input, AfterViewInit } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent implements AfterViewInit{

  @Input() equipment: Equipment | any;
  @Input() connected: any;
  @Input() canVote: any;
  constructor() {}

  ngAfterViewInit(): void {
    this.canVote = this.equipment.canVote;  
  }
}
