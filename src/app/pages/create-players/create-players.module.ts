import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePlayersRoutingModule } from './create-players-routing.module';
import { CreatePlayersComponent } from './create-players.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [CreatePlayersComponent],
    imports: [CommonModule, CreatePlayersRoutingModule, ReactiveFormsModule],
})
export class CreatePlayersModule {}
