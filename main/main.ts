import {ProductManager} from "../service/productManager";
import {Product} from "../model/product";

let input = require('readline-sync');
let listProduct:ProductManager = new ProductManager()
function mainMenu(){
    let menu = `----------Menu-----------
    1.Hiển thị danh sách hàng hoá
    2.Tìm kiếm hàng hoá theo tên hàng
    3.Nhập thông tin một mặt hàng mới
    4.Chỉnh sửa thông tin của một mặt hàng
    5.Xoá một mặt hàng khỏi ứng dụng
    0.Thoát
`
    let choose ;
    console.log(menu);
    do {

        choose = input.question(`Nhap lua chon cua ban:\n`)
        switch (choose){
            case '1':
              listProduct.displayFiveTime();
                break;
            case '2':
                findProduct();
                break;
            case '3':
              addProduct();
                break;
            case '4':
                editNewProduct();
                break;
            case '5':
                deleteProduct();
                break;
        }

    }while (choose!=0)
}
function findProduct(){
    let name = input.question(`Nhap ten san pham:\n`)
    listProduct.findByName(name)

}
function editNewProduct() {

    let id = input.question(`Nhap id san pham:\n`)
    if (listProduct.findById(id) == -1){
        console.log(`Khong tim thay`)
    }else {
        let name = input.question(`Nhap ten san pham:\n`)
        let type = input.question(`Nhap loai san pham:\n`)
        let price = +input.question(`Nhap gia san pham:\n`)
        let amount = +input.question(`Nhap so luong san pham:\n`)
        let time = input.question(`Nhap ngay san pham:\n`)
        let describe = input.question(`Nhap mo ta san pham\n`)
        let  product   = new Product(id, name, type, price, amount, time, describe)
        listProduct.editProduct(id,product)
        console.log(`Sua thanh cong`)
    }

}
function addProduct(){
    let id = (listProduct.product.length + 1)

    let name = input.question(`Nhap san pham moi:\n`)
    if (name == null){
        console.log(`Khong hop le\n`)
        mainMenu()
    }

    let menu = `1.Do an \n2.Do uong`
    console.log(menu)
    let type = input.question(`Nhap loai san pham moi:\n`)
    if (type != 1 && type != 2){
        console.log(`Khong ton tai\n`)
        mainMenu()
    }

    let price = input.question(`Nhap gia san pham:\n`)
    if (price<0){
        console.log(`Khong ton tai\n`)
        mainMenu()
    }

    let amount = input.question(`Nhap so luong san pham:\n`)
    if (amount<0){
        console.log(`Khong ton tai\n`)
        mainMenu()
    }
    let describe = input.question(`Nhap mo ta san pham`)

    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    let product = new Product(id,name,type,price,amount,today,describe)
    listProduct.add(product)


}
function deleteProduct(){
    let id = input.question(`Nhap san pham can xoa`)
    listProduct.deleteById(id)

}
mainMenu()