import { Component } from '@angular/core';
import { HeroesComponent } from "../heroes/heroes.component";
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-messages',
    standalone: true,
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css',
    imports: [HeroesComponent, CommonModule]
})
export class MessagesComponent {
title: any;

constructor(public messageService: MessageService) {}

}
