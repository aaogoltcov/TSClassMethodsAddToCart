import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable, count: number): void {
        if ( count > 0 ) {
            item.count = count;
            this._items.push(item);
        } else {
            item.count = 1;
            this._items.push(item);
        }

    }

    get items(): Buyable[] {
        return [...this._items];
    }

    price(discount: number): number {
        let priceSum: number = 0;
        this.items.forEach((e) => {
            priceSum = priceSum + e.price * e.count
        });
        return discount < 1 && discount > 0 ? priceSum - priceSum * Number(discount) : priceSum;
    }

    delete(id: number): void {
        this.items.forEach((e) => {
            if (e.id === id) {
                if (e.count === 1) {
                    this._items.splice(this.items.indexOf(e), 1);
                } else {
                    e.count--;
                }
            }
        });
    }

}
