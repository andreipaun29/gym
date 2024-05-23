import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { Router } from '@angular/router';
import Web3 from 'web3';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface EquipmentTable{
  name: string;
  voteCount: number;
  state: number;

}




@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButton, MatIconModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})



export class AdminComponent implements OnInit{


  equipments: any[] = [];

  constructor( private contractService: ContractService, private router:Router, private cdr: ChangeDetectorRef) {

  }


  displayedColumns: string[] = ['name' , 'voteCount', 'state']
  dataSource: any;


  connected: any;
  account: any;
  state: any;


  ELEMENT_DATA: EquipmentTable[] = [];


  equipmentName: string = '';

  async ngOnInit(): Promise<void> {
    const web3 = new Web3();
    // Set the provider you want from Web3.providers
    web3.setProvider(window.ethereum);

    try {
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
      console.log(this.account);
    } catch (error) {
      console.error('Error getting accounts:', error);
    }
    if(this.account != undefined){
      this.connected = true;
    }

    await this.contractService.contract.methods.getAllMachines().call().then((machines: any) => {
      this.equipments = machines;
          for(let i = 0; i < this.equipments.length; i++){
            this.ELEMENT_DATA.push({name: this.equipments[i].name, voteCount: this.equipments[i].voteCount, state: this.equipments[i].state});
          }

          
        this.dataSource = this.ELEMENT_DATA;

      
    });

  }



  connectToMetamask(){
    window.ethereum.request({ method: 'eth_requestAccounts' });
    setTimeout(() => {
      this.connected = true;
      window.location.reload();
    }, 7000);
    const web3 = new Web3();
    web3.setProvider(window.ethereum);  

    web3.eth.getAccounts().then(accounts => {
      console.log(accounts);
      console.log('reload');
      
    });
    
    
  }


  logout(){
    //use web3 to disconnect from metamask
    if(this.account){
      alert('Disconnect from metamask first!');
    }
    else{    
    this.router.navigate(['/']);
    localStorage.clear();
  }
}



lock(name:string){

  this.contractService.contract.methods.updateMachineState(name, 0).send({from: this.account}).then((res: any) => {
    window.location.reload();
  });
  
}

unlock(name:string){
  this.contractService.contract.methods.updateMachineState(name, 1).send({from: this.account}).then((res: any) => {
    window.location.reload();
  });
}


addEquipment(){
  //check if mat-form-field is empty
  let name = (<HTMLInputElement>document.getElementById('form')).value;

  if(name.length < 3){
    alert('Enter a valid name');
  }
  else{
    this.contractService.contract.methods.addMachine(name).send({from: this.account}).then((res: any) => {
      window.location.reload();
    });
  }

}


}
