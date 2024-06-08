import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params)=>{
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data) => {
            this.producto = data;
            this.color = (this.producto?.price as number) > 200 ? 'red' : '';
            this.loading = false;
            error: (error: any) => {
              console.log(error);
              this.loading = false;
            };
          }
        });
      },
      error: (error: any) =>{
        console.log(error);
      }
    })
  }
}
