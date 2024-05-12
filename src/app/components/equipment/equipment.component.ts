import { Component, Input, AfterViewInit } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  alreadyVoted: boolean = false;


  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {

    if(localStorage.getItem('votedEquipment') == this.equipment.id) {      
      this.alreadyVoted = true;
      this.equipment.votes = localStorage.getItem('votes');
    }

    if(localStorage.getItem('voted') === 'true') 
      this.alreadyVoted = true;
    if(localStorage.getItem('votes') === null) 
      localStorage.setItem('votes', '0');
    this.canVote = this.equipment.canVote;  
    
  }

  vote(){
    this.equipment.votes++;
    localStorage.setItem('votedEquipment', this.equipment.id);
    this.alreadyVoted = true;
    localStorage.setItem('voted', 'true');
    localStorage.setItem('votes', this.equipment.votes);
    
    this.openDialog(); 

    setTimeout(() => {
      window.location.reload();
    }, 3000);

  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '20vw',
      height: '20vh',
      disableClose: true,
    });
  }
}
