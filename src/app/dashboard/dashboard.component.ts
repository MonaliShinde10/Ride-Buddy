import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RideService } from '../shared/ride.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  rideOffers: any[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(private rideService: RideService,private auth: AuthService)
  {
    
  }
  ngOnInit(){
    this.getRideOffers();
  }
  
  getRideOffers() {
    this.rideService.getRideOffers().subscribe(
      (offers) => {
        this.rideOffers = offers;
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
