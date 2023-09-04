import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
cocina = [{
  "date": "today , 23 aug 1980",
  "order": [{
          "id": "01"
  }

  ]
}

]
  

  constructor() { }

  ngOnInit() {
  }

}
