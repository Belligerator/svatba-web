import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

    public program: { time: string, event: string }[] = [
        { time: '14:00', event: 'Sraz před kostelem' },
        { time: '14:30', event: 'Obřad' },
        { time: '15:30', event: 'Společné focení' },
        { time: '16:30', event: 'Přípitek' },
        { time: '16:45', event: 'Hostina' },
        { time: '', event: 'První tanec' },
        { time: '', event: 'Krájení dortu' },
        { time: '', event: 'Tombola' },
    ];

    constructor(private utilsService: UtilsService) {
    }

    public ngOnInit(): void {
        const isPageVisited = this.utilsService.isProgramPageVisited;

        if (isPageVisited) {
            return;
        } else {
            this.utilsService.isProgramPageVisited = true;
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
