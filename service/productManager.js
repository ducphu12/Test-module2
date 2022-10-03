"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = [];
    }
    ProductManager.prototype.add = function (t) {
        this.product.push(t);
    };
    ProductManager.prototype.deleteById = function (id) {
        var itemCount = this.product.length;
        for (var i = 0; i < this.product.length; i++) {
            if (id == this.product[i].id) {
                this.product.splice(i, 1);
                console.log("san pham da xoa");
            }
        }
        if (itemCount == this.product.length) {
            "san pham khong ton tai";
        }
    };
    ProductManager.prototype.findById = function (id) {
        for (var i = 0; i < this.product.length; i++) {
            if (this.product[i].id == id) {
                return i;
            }
            return -1;
        }
    };
    ProductManager.prototype.findByName = function (name) {
        var findItem = [];
        for (var i = 0; i < this.product.length; i++) {
            if (this.product[i].name == name) {
                findItem.push(this.product[i]);
            }
            if (findItem.length == 0) {
                console.log("Khong co du lieu");
            }
            else {
                console.log(findItem);
            }
        }
    };
    ProductManager.prototype.displayFiveTime = function () {
        if (this.product.length == 0) {
            console.log("Khong co du lieu");
        }
        else {
            for (var i = 0; i < 5; i++) {
                console.log(this.product[i]);
            }
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
