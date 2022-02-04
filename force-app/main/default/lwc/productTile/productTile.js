import { LightningElement, api } from 'lwc';
export default class ProductTile extends LightningElement {
    @api _product;
    pictureURL;
    name;
    msrp;
    get product() {
        return this.product
    }
    set product(value) {
        this._product = value;
        this.pictureURL=value.Picture_URL__c;
        this.name = value.name;
        this.msrp = value.MSRP__c;
    }
    handleClick() {
        const selectedEvent = new CustomEvent('selected', {detail: this.product.id});
        this.dispatchEvent(selectedEvent);
    }
}