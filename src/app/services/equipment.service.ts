import { EventEmitter, Injectable, Output, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipment } from '../models/equipment';
import { ContractService } from './contract.service';
import Web3 from 'web3';
import { VotingComponent } from '../components/voting/voting.component';
@Injectable({
  providedIn: 'root'
})

export class EquipmentService implements OnInit {

    constructor(private contractService: ContractService) {}
    


    private equipments: Equipment[] | any = [];


    account: any;



    async ngOnInit(): Promise<void> {
        
        
        // console.log(this.getEquipments());
        
        
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

        console.log(this.account);
    
      }
    

    
    
    
    getEquipments(account: any): Equipment[] | any {
        setTimeout(() => {
            console.log(account);
            
            
            this.equipments =  this.contractService.contract.methods['getAllMachines']().send({from: account});
        }, 5000);

        return this.equipments;
    }
}