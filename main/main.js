"use strict";
exports.__esModule = true;
var productManager_1 = require("../service/productManager");
var product_1 = require("../model/product");
var input = require('readline-sync');
var listProduct = new productManager_1.ProductManager();
function mainMenu() {
    var menu = "----------Menu-----------\n    1.Hi\u1EC3n th\u1ECB danh s\u00E1ch h\u00E0ng ho\u00E1\n    2.T\u00ECm ki\u1EBFm h\u00E0ng ho\u00E1 theo t\u00EAn h\u00E0ng\n    3.Nh\u1EADp th\u00F4ng tin m\u1ED9t m\u1EB7t h\u00E0ng m\u1EDBi\n    4.Ch\u1EC9nh s\u1EEDa th\u00F4ng tin c\u1EE7a m\u1ED9t m\u1EB7t h\u00E0ng\n    5.Xo\u00E1 m\u1ED9t m\u1EB7t h\u00E0ng kh\u1ECFi \u1EE9ng d\u1EE5ng\n    0.Tho\u00E1t\n";
    var choose;
    console.log(menu);
    do {
        choose = input.question("Nhap lua chon cua ban:\n");
        switch (choose) {
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
    } while (choose != 0);
}
function findProduct() {
    var name = input.question("Nhap ten san pham:\n");
    listProduct.findByName(name);
}
function editNewProduct() {
    var id = +input.question("Nhap id san pham:\n");
    if (id < 0 || id > this.listProduct.length) {
        console.log("San pham khong ton tai");
    }
    var name = input.question("Nhap ten san pham:\n");
    var type = input.question("Nhap loai san pham:\n");
    var price = +input.question("Nhap gia san pham:\n");
    var amount = +input.question("Nhap so luong san pham:\n");
    var time = input.question("Nhap ngay san pham:\n");
    var describe = input.question("Nhap mo ta san pham\n");
    listProduct[this.listProduct.findByCode(id)] = new product_1.Product(id, name, type, price, amount, time, describe);
    mainMenu();
}
function addProduct() {
    var id = (listProduct.product.length + 1);
    var name = input.question("Nhap san pham moi:\n");
    if (name == null) {
        console.log("Khong hop le\n");
        mainMenu();
    }
    var menu = "1.Do an \n2.Do uong";
    console.log(menu);
    var type = input.question("Nhap loai san pham moi:\n");
    if (type != 1 && type != 2) {
        console.log("Khong ton tai\n");
        mainMenu();
    }
    var price = input.question("Nhap gia san pham:\n");
    if (price < 0) {
        console.log("Khong ton tai\n");
        mainMenu();
    }
    var amount = input.question("Nhap so luong san pham:\n");
    if (amount < 0) {
        console.log("Khong ton tai\n");
        mainMenu();
    }
    var describe = input.question("Nhap mo ta san pham");
    var time = new Date();
    var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1, "/").concat(time.getFullYear());
    var product = new product_1.Product(id, name, type, price, amount, today, describe);
    listProduct.add(product);
}
function deleteProduct() {
    var id = input.question("Nhap san pham can xoa");
    listProduct.deleteById(id);
}
mainMenu();
