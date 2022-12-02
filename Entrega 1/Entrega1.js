class ProductManager {
    constructor(title, description, price,thumbnail,code,stock) {
        this._title = title;
        this._description = description;
        this._price = price;
        this._thumbnail = thumbnail;
        this._code = code;
        this._stock = stock;
    }

    addProduct(title) {
        this._title.push(nombreProducto)
    }

    getProducts() {
        return this._title.map( (title) => nombreProducto.title)
    }
}
