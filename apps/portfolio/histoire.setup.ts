import 'uno.css'
import '@unocss/reset/tailwind.css'

import AsUI from '@as1024/ui'

export function setupVue3({ app }) {
  app.use(AsUI)
}
