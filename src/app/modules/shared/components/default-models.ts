import { TextboxModel } from "./text-input/models/TextboxModel";
import { ComponentType } from "./component-type";

export class DefaultModels {

    static TextBox: TextboxModel = new TextboxModel("1", "1",
        ComponentType.TextBox,0,false, "label",false,[],"default description", "placeholder", "validation message", "validation rule", 100);
    }