const Result = (data: any) => {
  JSON.stringify(data);
};

export const ipcReplyCurrent = (
  type: string,
  sender: Electron.WebContents,
  request: IpcRequest | undefined,
  data: any,
) => {
  let res = request?.responseChannel;
  if (!res) {
    res = type;
  }
  sender.send(res, Result(data));
};
