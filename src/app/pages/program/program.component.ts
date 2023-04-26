import { Component } from '@angular/core';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss']
})
export class ProgramComponent {

    public program: { time: string, event: string }[] = [
        { time: '14:00', event: 'Sraz' },
        { time: '14:30', event: 'Obřad' },
    ];
}
