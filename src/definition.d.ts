declare global {
  interface Window {
    getInitialDarkTheme(): boolean;
    getStorageDarkTheme(defaultValue: boolean): boolean;
    setStorageDarkTheme(value: boolean): boolean;
    setDocumentDarkTheme(dark: boolean): void;

    handleImageClick(id: string, src: string): void;
  }
}

export {};
