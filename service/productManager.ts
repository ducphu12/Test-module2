import {Manage} from "./Manage";
import {Product} from "../model/product";

export class ProductManager implements Manage<Product>{
    product:Product[]=[]

    add(t: Product) {
        this.product.push(t)
    }

    deleteById(id: number) {
        let itemCount = this.product.length
        for (let i = 0; i < this.product.length; i++) {
            if (id == this.product[i].id) {
                this.product.splice(i, 1)
                console.log(`xoa thanh cong`)
            }
        }
        if (itemCount == this.product.length){
            `khong ton tai san pham can xoa`
        }
    }

    findById(id: number) {
        for (let i=0;i<this.product.length;i++){
            if (this.product[i].id==id){
                return i
            }
            return -1
        }
    }

    findByName(name: string) {
        let findItem = []
        for (let i=0;i<this.product.length;i++){
            if (this.product[i].name==name){
                findItem.push(this.product[i])

            }
if (findItem.length==0){
    console.log(`Khong co du lieu`)
}else {
    console.log(findItem)
}
        }
    }
    displayFiveTime(){
        if (this.product.length==0){
            console.log("Khong co du lieu")
        }
        else {
            for (let i=0;i<5;i++){
                console.log(this.product[i])
            }
        }
    }

}
