import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DresscodeComponent } from './pages/dresscode/dresscode.component';
import { MainComponent } from './pages/main/main.component';
import { ProgramComponent } from './pages/program/program.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AlbumComponent } from './pages/album/album.component';
import { UtilsService } from './pages/services/utils.service';

@NgModule({
    declarations: [
        AppComponent,
        DresscodeComponent,
        MainComponent,
        ProgramComponent,
        AccommodationComponent,
        AlbumComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleMapsModule
    ],
    providers: [UtilsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
