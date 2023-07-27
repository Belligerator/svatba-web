import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { UtilsService } from '../services/utils.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

    public markers: { position: any, title: string, address: string, link: string }[] = [
        {
            position: { lat: 50.316586328518056, lng: 15.18978066609853 },
            title: 'Hostina - Bučiský mlýn',
            address: 'Bučiský mlýn, Podolí 18, 289 34 Rožďalovice',
            link: 'https://www.google.com/maps?ll=50.31264,15.18329&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=6523866188509584393'
        },
        {
            position: { lat: 50.30714637820163, lng: 15.170708334406845 },
            title: 'Obřad - Kostel sv. Havla',
            address: 'Kostel sv. Havla, Husova 14, 289 34 Rožďalovice',
            link: 'https://www.google.com/maps?ll=50.307553,15.171842&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=6932525242374016154'
        }
    ];

    public selectedMarker: { position: any, title: string, address: string, link: string } | undefined;

    constructor(private utilsService: UtilsService) {
    }

    public ngOnInit(): void {
        const isMainPageVisited = this.utilsService.isMainPageVisited;

        if (isMainPageVisited) {
            return;
        } else {
            this.utilsService.isMainPageVisited = true;
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

    public onMarkerClicked(anchorPoint: any, marker: any): void {
        console.log(marker);
        this.selectedMarker = marker;
        // Poprve, kdyz se na amrker klikne, tak se nic nestane, musi se kliknout znova, nebo dat timeout.
        setTimeout(() => {
            this.infoWindow?.open(anchorPoint);
        }, 10);
    }
}
