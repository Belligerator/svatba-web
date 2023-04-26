import { Component } from '@angular/core';

@Component({
    selector: 'app-accommodation',
    templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {

    public markers: { position: any, title: string }[] = [
        {
            position: { lat: 50.316586328518056, lng: 15.18978066609853 },
            title: 'Bučiský mlýn'
        },
        {
            position: { lat: 50.21288107758011, lng: 15.226948406278588 },
            title: 'Velenice 36'
        }
    ];
}
