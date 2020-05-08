import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fitness-tracker';

  constructor(public firestore: AngularFirestore) {

  }

  ngOnInit() {
    this.firestore.collection('availableExcercises').snapshotChanges()
      .pipe(
        map((results: any[]) => results.map(doc => ({
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        })
        )
        )
      )
      .subscribe(result => {
        console.log(result)

        // for (let r of result) {
        //   console.log(r.payload.doc.data())
        // }
      });
  }
}


