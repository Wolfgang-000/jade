App({
  globalData: { source: 'direct' },
  onLaunch(options) {
    if (options && options.query && options.query.source) {
      this.globalData.source = options.query.source
    }
  }
})
