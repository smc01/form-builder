import { Component, Input, OnInit } from '@angular/core';

import { LabelModel } from './models/model-label';
import { Selectors } from '../selectors';
import { MatDialog } from '@angular/material';


@Component({
    selector: Selectors.Label,
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    providers: []
})

export class LabelComponent implements OnInit {
    @Input() inputModel: LabelModel;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

   
}