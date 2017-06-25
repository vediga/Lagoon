import { User } from './user';
import { Comment } from './comment';

export class Photo {
    public photoId: number;
    public title: string;
    public description: string;
    public user: User;
    public commentList: Comment[];
    public likes: number;
    public likedByUserList: User[];
    public created: Date;
}
