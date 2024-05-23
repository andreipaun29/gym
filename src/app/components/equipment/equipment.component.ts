import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ContractService } from '../../services/contract.service';

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
  @Input() state: any;
  @Input() votes: any;
  @Input() account: any;

  image: string = '';
  description: string = '';


  constructor(private dialog: MatDialog, private contractService: ContractService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.equipment[1] = Number(this.equipment[1]);
    this.equipment[2] = Number(this.equipment[2]);

    this.equipment.votes = this.equipment[1];
    this.state = this.equipment[2];
    


    //bench press
    if(this.equipment[0] == 'Bench Press'){
      this.image = '../../assets/bench_press.png'
      this.description = 'The bench press is an upper-body weight training exercise for chest and triceps';
      this.cdr.detectChanges();       
       
    }
    //chest press
    else if(this.equipment[0] == 'Chest Press'){
      this.image = '../../assets/chest_press.png'
      this.description = 'The chest press is an upper-body weight training exercise for chest and triceps';
      this.cdr.detectChanges();       
    }

    //lat pulldown
    else if(this.equipment[0] == 'Lat Pulldown'){
      this.image = '../../assets/lat_pulldown_machine.png'
      this.description = 'The lat pulldown is an upper-body weight training exercise for back and shoulders/biceps';
      this.cdr.detectChanges();       
    }

    //row machine
    else if(this.equipment[0] == 'Row Machine'){
      this.image = '../../assets/rowing_machine.png'
      this.description = 'The row machine is an upper-body weight training exercise for back and shoulders/biceps';
      this.cdr.detectChanges();       
    }

    //leg press
    else if(this.equipment[0] == 'Leg Press'){
      this.image = '../../assets/leg_press.png'
      this.description = 'The leg press is a lower-body weight training exercise for quads and hamstrings';
      this.cdr.detectChanges();       
    }
    
    //treadmill
    else if(this.equipment[0] == 'Treadmill'){
      this.image = '../../assets/treadmill.png'
      this.description = 'The treadmill is a cardio exercise for legs and cardio';
      this.cdr.detectChanges();       
    }

    //leg extention
    else if(this.equipment[0] == 'Leg Extention'){
      this.image = '../../assets/leg_extension.png'
      this.description = 'The leg extention is a lower-body weight training exercise for quads';
      this.cdr.detectChanges();       
    }

    
  }

  async vote(){

    console.log(this.equipment[0]);

    await this.contractService.contract.methods.vote(this.equipment[0]).send({from: this.account}).then((res: any) => {
      console.log(res);
    }
    ).catch((err: any) => {
      console.log(err);
    });

    

  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '20vw',
      height: '20vh',
      disableClose: true,
    });
  }
}
