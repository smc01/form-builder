
export class ModelBase{
    key: string;
    id: string;
    componentType: string;
    index: number;
    editable: boolean;
    label: string;
    required: boolean;
    value: any;

    constructor(
        __key?: string,
        __id?: string,
        __componentType?: string,
        __index?: number,
        __editable?: boolean,
        __label?: string,
        __required?: boolean, 
        __value?: any
    ) {
        this.key = __key || '';
        this.id = __id;
        this.componentType = __componentType || '';
        this.index = __index === undefined ? 1 : __index;
        this.editable = __editable;
        this.label = __label || '';
        this.required = !!__required;
        this.value = __value || null;
    }    
}