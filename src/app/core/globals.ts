import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    static role: string="vasile";
    static ComponentType = class {
       public static textBox: string = "textbox";
    };
}

@Injectable()
export class AppComponentTypes{
    textBox: string = "textbox";
}