import type { App } from 'vue'
import RadioGroupComp from '@/components/FormRender/components/RadioGroupComp.vue'
import CheckboxGroupComp from '@/components/FormRender/components/CheckboxGroupComp.vue'

export function setupGlobalComp(app: App<Element>) {
  app.component('RadioGroupComp', RadioGroupComp)
  app.component('CheckboxGroupComp', CheckboxGroupComp)
}
