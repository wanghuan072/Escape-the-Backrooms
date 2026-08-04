export function queueGpt(callback) {
  if (typeof window === 'undefined') return

  window.googletag = window.googletag || { cmd: [] }
  window.googletag.cmd.push(() => {
    const googletag = window.googletag

    // GPT 共享加载方式：关闭自动请求，由每个广告组件 display 后单独 refresh。
    if (!window.__gptServicesEnabled) {
      googletag.setConfig({
        centering: true,
        disableInitialLoad: true,
        singleRequest: true,
      })
      googletag.enableServices()
      window.__gptServicesEnabled = true
    }

    callback(googletag)
  })
}
