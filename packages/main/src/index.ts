import { WindowOpt } from "../../common/IpcEvent";
import { WindowChannel } from "./IpcHandle/window";
import { Main } from "./main";

new Main()
  .init()
  .registerIpcChannels([
    new WindowChannel(WindowOpt.Modal),
    new WindowChannel(WindowOpt.ChildWindow),
    new WindowChannel(WindowOpt.Window),
  ]);
