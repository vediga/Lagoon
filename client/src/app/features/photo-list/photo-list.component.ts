import { Component, OnInit } from '@angular/core';
// import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photoList: Photo[];

    constructor() {
        this.photoList = [];
    }

    ngOnInit() {
        // TODO: Fetch photos from API
        let photo1 = new Photo();
        let photo2 = new Photo();
        let photo3 = new Photo();

        this.photoList.push(photo1, photo2, photo3);
    }
}
