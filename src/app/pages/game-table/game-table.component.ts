import { Component, OnInit } from '@angular/core';
import { CreateUsersService } from '../../core/services/create-users.service';
import { IPlayer } from '../../core/interfaces/player';
import {
    Form,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms';

@Component({
    selector: 'app-game-table',
    templateUrl: './game-table.component.html',
    styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {
    players!: IPlayer[];

    constructor(
        private createUsersService: CreateUsersService,
        private fb: FormBuilder
    ) {}

    form: FormGroup = this.fb.group({

    })

    ngOnInit() {
        this.players = this.createUsersService.players;
    }

    onSubmit() {
        // console.log(this.form.value);
    }
}
