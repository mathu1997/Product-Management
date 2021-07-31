import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opensweetalert()
  {
    Swal.fire({
      title: 'Success!!',
      text: 'The product has been successfully added to WishList!!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Continue shopping'
    }).then((result) => {
      
      window.location.href="/products";
    })
  }

}
