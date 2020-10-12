import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Board, Task} from './board.model';
import * as firebase from 'firebase';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  async createBoard(data: Board) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user.uid,
      tasks: [{description: 'Hello', label: 'yellow'}]
    });
  }

  deleteBoard(id: string) {
    return this.db.collection('boards').doc(id).delete();
  }

  uptadeTasks(id: string, tasks: Task[]) {
    return this.db.collection('boards').doc(id).update({tasks});
  }

  deleteTask(id: string, task: Task) {
    return this.db.collection('boards').doc(id).update({
      tasks: firebase.firestore.FieldValue.arrayRemove(task)
    });
  }

  getUserBoards() {
    return this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.db.collection<Board>('boards', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority'))
              .valueChanges({idField: 'id'});
          } else {
            return [];
          }
        })
      );
  }

  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('boards').doc(b.id));
    refs.forEach((ref, id) => batch.update(ref, {priority: id}));
    batch.commit();
  }
}
