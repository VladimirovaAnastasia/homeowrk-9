module.exports = class {
    constructor(data) {
        this._data = data.filter(function (item, index) {
            if (data.indexOf(item) === index)
                return item;
        });
    }

    get size() {
        return this._data.length;
    }

    get [Symbol.toStringTag]() {
        return '^_^';
    }

    [Symbol.iterator]() {
        return this._data.values()
    };

    keys(){
        return this[Symbol.iterator]()
    }

    values(){
        return this[Symbol.iterator]()
    }

    entries(){
        let dataEntries = this._data.map((item) => [item, item]);
        return dataEntries[Symbol.iterator]()
    }

    add(value){
        if (this._data.indexOf( value ) === -1) {
            this._data.push(value);
        }
        return this;
    };

    clear(){
        this._data = [];
    };

    delete(value){
        let dataSize = this.size;
        this._data = this._data.filter((item) => item !== value);

        return dataSize === this.size;
    };

    has(value){
        return this._data.indexOf( value ) !== -1
    };

    forEach(callbackfn, thisArg){
        if (this == null) {
            throw new Error("Cant iterate over undefined or null");
        }
        let context = this._data;

        let O = this._data;

        if (arguments.length > 1) {
            context = thisArg;
        }

        if (typeof callbackfn !== "function") {
            throw new Error("Callback is not a function");
        }

        let len = this.size;

        let i = 0;

        while (i < len) {
            if (i in O) {
                callbackfn.call(context, this._data[i], this._data[i], this);
            }

            i++;
        }
    };
};
