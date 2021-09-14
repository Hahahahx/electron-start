import {
  IpcMainEvent,
  BrowserWindow as ElectronBrowserWindow,
} from "electron";
import { WindowOpt } from "../../../common/IpcEvent";
import { BrowserWindow } from "../browserWindow";
import { ipcReplyCurrent } from "./utils";

export class WindowChannel implements IpcChannelInterface {
  constructor(v: WindowOpt) {
    this.type = v;
  }

  type: WindowOpt;

  handle(event: IpcMainEvent, request?: IpcRequest): void {
    try {
      const modal = this.type == WindowOpt.Modal;
      const parent =
        this.type === WindowOpt.ChildWindow || modal
          ? ElectronBrowserWindow.getAllWindows().find(
              (window) => window.id == event.sender.id,
            )
          : undefined;

      const mainWindow = new BrowserWindow({
        route: request?.params.route,
        options: {
          ...request?.params.options,
          modal: true,
          parent,
        },
      });
      mainWindow.toShow();
      ElectronBrowserWindow.getAllWindows().forEach((e) => {
        console.log(e.id);
      });
      ipcReplyCurrent(this.type, event.sender, request, {
        result: true,
      });
    } catch (error) {
      ipcReplyCurrent(this.type, event.sender, request, {
        result: false,
      });
    }
  }
}
