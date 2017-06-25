import { User } from './user';
import { Photo } from './photo';

export class Comment {
   public commentId: number;
   public content: string;
   public photo: Photo;
   public user: User;
   public created: Date;
}
