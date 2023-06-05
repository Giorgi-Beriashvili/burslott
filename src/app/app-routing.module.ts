import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'create-players',
        loadChildren: () =>
            import('./pages/create-players/create-players.module').then(
                (m) => m.CreatePlayersModule
            ),
    },
    {
        path: 'achievements',
        loadChildren: () =>
            import('./pages/achievements/achievements.module').then(
                (m) => m.AchievementsModule
            ),
    },
    {
        path: 'game-table',
        loadChildren: () =>
            import('./pages/game-table/game-table.module').then(
                (m) => m.GameTableModule
            ),
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
