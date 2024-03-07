declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electronAPI: {
      openFile: () => Promise<string>;
      saveFile: () => Promise<string>;
      openVSCode: () => Promise<string>;
      algokitCli: () => Promise<string>;
    };
  }
}

export {};
