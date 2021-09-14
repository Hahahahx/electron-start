interface Api {
  versions: Readonly<NodeJS.ProcessVersions>;
  getModal: (
    route: string,
    options?: Electron.BrowserWindowConstructorOptions
  ) => void;
}

type ElectronApi = Readonly<Api>;

declare interface Window {
  electron: Readonly<ElectronApi>;
  electronRequire?: NodeRequire;
}
