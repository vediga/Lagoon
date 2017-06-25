import { Photo } from './photo';

export class User {
    public userId: number;
    public username: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public photoList: Photo[];
    public likedPhotoList: Photo[];
}
