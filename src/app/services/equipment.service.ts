import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipment } from '../models/equipment';
@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
    private equipments: Equipment[] | any = [
        {
            id:1,
            name: 'Bench Press',
            description: 'A bench press is a key piece of equipment in any gym',
            image: '../../assets/bench_press.png',
            votes: 6,
            canVote: true,
        },

        {
            id:2,
            name: 'Chest Press',
            description: 'A chest press is a key piece of equipment in any gym',
            image: '../../assets/chest_press.png',
            votes: 5,
            canVote: true,
        },

        {
            id:3,
            name: 'Leg Press',
            description: 'A leg press is a key piece of equipment in any gym',
            image: '../../assets/leg_press.png',
            votes: 0,
            canVote: true,
        },

        {
            id:4,
            name: 'Pull Up Bar',
            description: 'A pull up bar is a key piece of equipment in any gym',
            image: '../../assets/pull_up_bar.png',
            votes: 3,
            canVote: true,
        },

        {
            id:5,
            name: 'Rowing Machine',
            description: 'A rowing machine is a key piece of equipment in any gym',
            image: '../../assets/rowing_machine.png',
            votes: 2,
            canVote: true,
        },

        {
            id:6,
            name: 'Lat Pulldown Machine',
            description: 'A lat pull down machine is a key piece of equipment in any gym',
            image: '../../assets/lat_pulldown_machine.png',
            votes: 1,
            canVote: true,
        }

        
    ];

    constructor() {}

    getEquipments(): Equipment[] | any {
        return this.equipments;
    }
}