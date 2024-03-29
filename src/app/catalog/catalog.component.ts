import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
// products : IProduct;
products : IProduct[];
constructor(){
  this.products = [
    {
      id: 1,
      description:
        "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    },
    {
      id: 17,
      description: "A spring base - great for reaching high places.",
      name: "Spring Base",
      imageName: "base-spring.png",
      category: "Bases",
      price: 1190.5,
      discount: 0,
    },
    {
      id: 6,
      description:
        "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
      name: "Articulated Arm",
      imageName: "arm-articulated-claw.png",
      category: "Arms",
      price: 275,
      discount: 0,
    }
  ]
} 

getImageUrl(products : IProduct){
  return '/assets/images/robot-parts/' + products.imageName;
}
}
