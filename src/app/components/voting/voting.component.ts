import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MetaMaskInpageProvider } from "@metamask/providers";
import Web3 from 'web3';
import { Equipment } from '../../models/equipment';
import { EquipmentService } from '../../services/equipment.service';
import { EquipmentComponent } from '../equipment/equipment.component';
import { ContractService } from '../../services/contract.service';
import { Router } from '@angular/router';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [CommonModule, EquipmentComponent],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent implements OnInit{

  equipments: any[] = [];

  constructor(private equipmentService: EquipmentService, private contractService: ContractService, private router:Router) {

  }




  connected: any;
  account: any;
  state: any;
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

}