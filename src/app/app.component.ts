import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';
import { faChartBar, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private ipc: IpcRenderer;

  chartIcon = faChartBar;
  historyIcon = faHistory;

  ngOnInit() {}

  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  handleClick() {
    this.ipc.send('sendMain');
  }
}
