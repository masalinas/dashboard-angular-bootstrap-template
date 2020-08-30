import { Component, Inject, OnInit } from '@angular/core';

import { GroupDescriptor, SortDescriptor, process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DropDownFilterSettings } from '@progress/kendo-angular-dropdowns';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';

import { NgEventBus } from 'ng-event-bus';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  public state: State = {
    group: Array<GroupDescriptor>(),
    sort: Array<SortDescriptor>(),
    skip: 0,
    take: 10
  };

  public subscription: any;
  public loading: boolean = false;

  public brandData: GridDataResult;
  
  constructor() {}

  ngOnInit(): void {
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
  }

  public addBrandHandler(event: any) {
  }

  public editBrandHandler(event: any) {
  }

  public removeBrandHandler(event: any) {
  }
}
