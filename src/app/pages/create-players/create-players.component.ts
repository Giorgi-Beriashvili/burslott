import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUsersService } from '../../core/services/create-users.service';
import { Subject, takeUntil } from 'rxjs';
import { IPlayer } from '../../core/interfaces/player';

@Component({
    selector: 'app-create-players',
    templateUrl: './create-players.component.html',
    styleUrls: ['./create-players.component.scss'],
})
export class CreatePlayersComponent implements OnDestroy {
    sub$ = new Subject();
    // players: IPlayer[] = [];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private createUsersService: CreateUsersService,
    ) {}

    form: FormGroup = this.fb.group({
        player1: ['John', Validators.required],
        player2: ['Anna', Validators.required],
        player3: ['Jack', Validators.required],
        player4: ['Tony', Validators.required],
    });

    onSubmit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        const player1 = this.form.value.player1;
        const player2 = this.form.value.player2;
        const player3 = this.form.value.player3;
        const player4 = this.form.value.player4;

        const players = [
            { playerName: player1, score: '113' },
            { playerName: player2, score: '12' },
            { playerName: player3, score: '345' },
            { playerName: player4, score: '44' },
        ];
        //
        // if (this.players.push(...players)) {
        //     this.router.navigate(['/game-table'])
        // }

        if (this.createUsersService.createdPlayers(players)) {
            this.router.navigate(['/game-table'])
        }


        // this.createUsersService
        //     .setPlayers(this.players)
        //     .pipe(takeUntil(this.sub$))
        //     .subscribe({
        //         next: (res) => {
        //             if (res) {
        //                 this.router.navigate(['/game-table']);
        //             }
        //         },
        //     });
    }

    ngOnDestroy() {
        this.sub$.next(null);
        this.sub$.complete();
    }

    // onTest() {
    //     this.createUsersService
    //         .getPlayers()
    //         .subscribe((res) => console.log('res', Object.keys(res)));
    // }
}
