import { Injectable } from '@angular/core';
import { ModelBase } from '../../models/ModelBase';
import { ComponentType } from '../../component-type';



@Injectable()
export class TextboxModel extends ModelBase {
    description: string;
    placeholder: string;
    validationMessage: string;
    validationRule: string;
    charactersLimit: number;

    constructor(
        __key?: string,
        __id?: string,
        __componentType?:string,
        __index?: number,
        __editable?: boolean,
        __label?: string,
        __required?: boolean, 
        __value?: any,

        __description?: string,
        __placeholder?: string,
        __validationMessage?: string,
        __validationRule?: string,
        __charactersLimit?: number
    ) {
        super(__key, __id, ComponentType.TextBox, __index, __editable, __label, __required, __value);

        this.description = __description || '';
        this.placeholder = __placeholder || '';
        this.validationMessage = __validationMessage || '';
        this.validationRule = __validationRule || '';
        this.charactersLimit = __charactersLimit || 250;
    }
    
}