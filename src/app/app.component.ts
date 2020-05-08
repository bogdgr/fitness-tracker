import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    this.firestore.collection('availableExcercises').snapshotChanges().subscribe(result => {
      for (let r of result) {
        console.log(r.payload.doc.data())
      }
    });
  }
}


