import { Component, OnInit } from '@angular/core';
import party from 'party-js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {

    public goConfettiGo(element: any): void {
        party.confetti(element);
    }

    public ngOnInit(): void {
        const element: any = document.getElementById('default-confetti');
        if (element) {
            party.confetti(element, {
                count: party.variation.range(10, 200),
                speed: party.variation.range(50, 800),
                size: party.variation.range(0.6, 1.4),
                spread: party.variation.range(60, 200)
            });
        }
    }
}
