import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Plugin} from "../../interfaces";
import {MatButtonToggle, MatSlideToggleChange} from "@angular/material";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements AfterViewInit, OnDestroy {
  @Input() plugin: Plugin;
  @ViewChild('pluginStatus', { static: false }) pluginStatus: MatButtonToggle;
  @Output() onPluginStatusChange = new EventEmitter<{[key: string]: boolean}>()

  private unsubscribe = new Subject();

  constructor() { }

  ngAfterViewInit() {
    this.subscribeToPluginStatusChange();
  }

  private subscribeToPluginStatusChange() {
    this.pluginStatus.change
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.onPluginStatusChange.emit({[this.plugin.name] : value.checked})
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
