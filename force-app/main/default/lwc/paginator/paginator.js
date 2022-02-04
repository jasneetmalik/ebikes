import { LightningElement, api } from 'lwc';

export default class Paginator extends LightningElement {
    @api pageNumber;
    @api pageSize;
    @api totalItemCount;
}