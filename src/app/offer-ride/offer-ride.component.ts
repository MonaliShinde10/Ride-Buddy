import { Component, OnInit } from '@angular/core';
import { Firestore, collection,addDoc } from '@angular/fire/firestore';
import { RideService } from '../shared/ride.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  rideOffers: any[] = [];
  constructor(private firestore: Firestore, private rideService: RideService,private auth: AuthService) 
  {
  }
  ngOnInit() {
    this.getRideOffers();
  }
  addData(f:any)
  {
    const collectionInstance = collection(this.firestore, 'offers');
    addDoc(collectionInstance, f.value).then(() =>
    {
      console.log('Data added Successfully');
    })
    .catch((err) =>
          {
            console.error('Error adding document: ', err);
          })
  }
  getRideOffers() {
    this.rideService.getRideOffers().subscribe(
      (querySnapshot) => {
        this.rideOffers = [];
        querySnapshot.forEach((doc) => {
          this.rideOffers.push(doc.data());
        });
        this.rideService.updateRideOffers(this.rideOffers);
      },
      (error) => {
        console.error('Error fetching ride offers: ', error);
      }
    );
  }
  dashlog()
  {
      this.auth.logout();
  }
}
