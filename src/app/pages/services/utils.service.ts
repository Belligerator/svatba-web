import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    public isMainPageVisited: boolean = false;
    public isAccommodationPageVisited: boolean = false;
    public isProgramPageVisited: boolean = false;
    public isDressCodePageVisited: boolean = false;
}
