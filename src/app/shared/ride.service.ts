import { Injectable, NgModule } from '@angular/core';
import {  collection, Firestore, getDocs, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { Database } from '@angular/fire/database';
import {FirestoreModule } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class RideService {
  private rideOffers: any[] = [];

  constructor(private firestore: Firestore) { }

  getRideOffers(): Observable<any[]> {
    if (this.rideOffers.length === 0) {
      const collectionInstance = collection(this.firestore, 'offers');
      return from(getDocs(collectionInstance)).pipe(
        // Convert the QuerySnapshot to an array of data objects
        map((querySnapshot: QuerySnapshot<any>) => {
          return querySnapshot.docs.map(doc => doc.data());
        })
      );
    } else {
      return new Observable<any[]>(observer => {
        observer.next(this.rideOffers);
        observer.complete();
      });
    }
  }

  updateRideOffers(offers: any[]) {
    this.rideOffers = offers;
  }
}
