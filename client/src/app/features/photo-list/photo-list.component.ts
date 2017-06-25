import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    constructor() { }

    ngOnInit() {}
}
