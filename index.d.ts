interface Window {
  APP: {
      toast: {
          show(content: string, options: any): number
      },
      showLogin: () => never
      hideLogin: () => never
  }
}
