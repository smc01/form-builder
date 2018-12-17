import { TextboxModel } from "./text-input/models/TextboxModel";
import { ComponentType } from "./component-type";
import { LabelModel } from "./label/models/model-label";

export class DefaultModels {

    static TextBox: TextboxModel = new TextboxModel("1", "1",
        ComponentType.TextBox, 0, false, "label", false, [], "default description", "placeholder", "validation message", "validation rule", 100);
    static Label: LabelModel = new LabelModel("2", "2", ComponentType.Label, 2, false, "Label", false, []);

}