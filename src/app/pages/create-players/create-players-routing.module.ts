import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayersComponent } from './create-players.component';

const routes: Routes = [{ path: '', component: CreatePlayersComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreatePlayersRoutingModule {}
