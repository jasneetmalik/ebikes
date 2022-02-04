import { LightningElement, api, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
import getProducts from '@salesforce/apex/ProductController.getProducts';
import {registerListener, unregisterAllListeners, fireEvent} from 'c/pubsub';

export default class ProductTileList extends LightningElement {
    pageNumber=1;
    pageSize;
    totalItemCount=0
    filters={};
    @wire(CurrentPageReference) pageRef;
    @wire(getProducts, {filter:'$filters', pageNumber:'$pageNumber'}) products;
    connectedCallback() {
        registerListener('filterChange', this.handleFilterChange, this);
    }
    handleProductSelected(event) {
        fireEvent(this.pageRef, 'productSelected', event.detail);

    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handleFilterChange(){
        this.filters={...filters};
        this.pageNumber = 1;
    }
    handlePreviousPage() {
        this.pageNumber += 1;
    }
    handleNextPage() {
        this.pageNumber -= 1;
    }

}