// import abi from '../services/';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { Contract } from 'ethers';
import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})

export class ContractService {

    constructor () {}

    contractAddress = '0xc94A0158fF26b03F05F09a4c3D3C39FBaf386E74';

    //web3
    web3 = new Web3(window.ethereum);
    

    abi = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "votingDuration",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "GymMachineAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "machine",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "enum GymMachineManager.MachineState",
            "name": "state",
            "type": "uint8"
          }
        ],
        "name": "MachineStateUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "voter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "machine",
            "type": "string"
          }
        ],
        "name": "Voted",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addMachine",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalVotes",
            "type": "uint256"
          }
        ],
        "name": "calculatePercentage",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "percentage",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "endVoting",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllMachines",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
              },
              {
                "internalType": "enum GymMachineManager.MachineState",
                "name": "state",
                "type": "uint8"
              }
            ],
            "internalType": "struct GymMachineManager.GymMachine[]",
            "name": "allMachines",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getMostUsedMachine",
        "outputs": [
          {
            "internalType": "string",
            "name": "mostUsedMachine",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "machineNames",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "machines",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "enum GymMachineManager.MachineState",
            "name": "state",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "manager",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "setEndVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "machineName",
            "type": "string"
          },
          {
            "internalType": "enum GymMachineManager.MachineState",
            "name": "state",
            "type": "uint8"
          }
        ],
        "name": "updateMachineState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "machineName",
            "type": "string"
          }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "bool",
            "name": "hasVoted",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "votedMachine",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]


    contract = new this.web3.eth.Contract(this.abi, this.contractAddress);

}