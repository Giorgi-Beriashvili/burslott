import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTableRoutingModule } from './game-table-routing.module';
import { GameTableComponent } from './game-table.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [GameTableComponent],
    imports: [CommonModule, GameTableRoutingModule, ReactiveFormsModule],
})
export class GameTableModule {}
