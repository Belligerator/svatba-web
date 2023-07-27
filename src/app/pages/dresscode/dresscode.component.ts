import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
    selector: 'app-dresscode',
    templateUrl: './dresscode.component.html',
})
export class DresscodeComponent implements OnInit {

    constructor(private utilsService: UtilsService) {
    }

    public ngOnInit(): void {
        const isPageVisited = this.utilsService.isDressCodePageVisited;

        if (isPageVisited) {
            return;
        } else {
            this.utilsService.isDressCodePageVisited = true;
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
