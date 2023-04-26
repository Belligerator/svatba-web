import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DresscodeComponent } from './pages/dresscode/dresscode.component';
import { MainComponent } from './pages/main/main.component';
import { ProgramComponent } from './pages/program/program.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { AlbumComponent } from './pages/album/album.component';

const routes: Routes = [
    { path: 'dresscode', component: DresscodeComponent },
    { path: 'accommodation', component: AccommodationComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: '/main' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
