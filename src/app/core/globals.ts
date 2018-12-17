import { Injectable } from '@angular/core';
import { ComponentType } from '../modules/shared/components/component-type';

@Injectable()
export class Globals {

    static role: string="vasile";
    static ComponentType = class {
       public static textBox: string = "textbox";
    };
}

@Injectable()
export class AppComponentTypes{
    textBox: string = ComponentType.TextBox;
}