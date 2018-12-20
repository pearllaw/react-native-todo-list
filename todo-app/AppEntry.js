import Root from './index'
import { KeepAwake, registerRootComponent } from 'expo'

if (__DEV__) {
    KeepAwake.activate()
  }
  
registerRootComponent(Root)