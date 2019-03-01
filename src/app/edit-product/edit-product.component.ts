import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  product: any

  constructor(private actRoute: ActivatedRoute, private productService: ProductService, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.productService.loadDetailProduct(params['id']).subscribe(res => {
        this.product = res
      })
    })
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  clickUpdate(productName, category, price) {
    this.actRoute.params.subscribe(params => {
      this.productService.updateProduct(params['id'], productName, category, price)
    })
  }

}
