import { Injectable } from '@angular/core';
import { ModelBase } from '../../models/ModelBase';




@Injectable()
export class LabelModel extends ModelBase {
    constructor(
        __key?: string,
        __id?: string,
        __componentType ?: string,
        __index?: number,
        __editable?: boolean,
        __label?: string,
        __required?: boolean,
        __value?: any,
    ) {
        super(__key, __id, __componentType, __index, __editable, __label, __required, __value);
    }

}