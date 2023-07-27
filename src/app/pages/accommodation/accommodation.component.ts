import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { UtilsService } from '../services/utils.service';

@Component({
    selector: 'app-accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    public markers: { position: any, title: string, address: string, link: string }[] = [
        {
            position: { lat: 50.316586328518056, lng: 15.18978066609853 },
            title: 'Bučiský mlýn',
            address: 'Bučiský mlýn, Podolí 18, 289 34 Rožďalovice',
            link: 'https://www.google.com/maps?ll=50.31264,15.18329&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=6523866188509584393'
        },
        {
            position: { lat: 50.21288107758011, lng: 15.226948406278588 },
            address: 'Velenice 36, 289 01 Velenice',
            title: 'Velenice 36',
            link: 'https://www.google.com/maps/place/Velenice+36,+289+01+Velenice,+Czechia/@50.2130101,15.2268156,19.73z/data=!4m6!3m5!1s0x470c1a2dd4b09443:0xd27c264ef54eea20!8m2!3d50.2128764!4d15.2269522!16s%2Fg%2F11jykxkf2l?hl=en-US'
        }
    ];

    public selectedMarker: { position: any, title: string, address: string, link: string } | undefined;

    constructor(private utilsService: UtilsService) {
    }

    public onMarkerClicked(anchorPoint: any, marker: any): void {
        console.log(marker);
        this.selectedMarker = marker;
        // Poprve, kdyz se na amrker klikne, tak se nic nestane, musi se kliknout znova, nebo dat timeout.
        setTimeout(() => {
            this.infoWindow?.open(anchorPoint);
        }, 10);
    }

    public ngOnInit(): void {
        const isPageVisited = this.utilsService.isAccommodationPageVisited;

        if (isPageVisited) {
            return;
        } else {
            this.utilsService.isAccommodationPageVisited = true;
        }

        const images: NodeListOf<Element> = document.querySelectorAll('.animation-observable');
        if (images) {
            function onIntersaction(imageEntities: IntersectionObserverEntry[]) {
                console.log('on intersaction');
                imageEntities.forEach((element: IntersectionObserverEntry) => {
                    if (element.isIntersecting) {
                        observer.unobserve(element.target);
                        if (element.target.classList.contains('animate-left')) {
                            element.target.classList.toggle('animation-fade-in-left', element.isIntersecting);
                        } else if (element.target.classList.contains('animate-right')) {
                            element.target.classList.toggle('animation-fade-in-right', element.isIntersecting);
                        }
                    }
                });
            }

            const observer: IntersectionObserver = new IntersectionObserver(onIntersaction);
            images.forEach(element => observer.observe(element));
        }
    }
}
