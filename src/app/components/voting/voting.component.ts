import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MetaMaskInpageProvider } from "@metamask/providers";
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent implements OnInit{

  
  connected: any;
  account: any;
  constructor() { }
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


  }
  
  connectToMetamask(){
    window.ethereum.request({ method: 'eth_requestAccounts' });
    this.connected = true;
    const web3 = new Web3();
    web3.setProvider(window.ethereum);  

    web3.eth.getAccounts().then(console.log); 
    
    
  }


  

  
}
