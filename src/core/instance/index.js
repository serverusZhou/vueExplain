import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * Vue主要方法
 * 通过Vue实例初始化Vue，一般单页面项目只会初始化一次。
 */
function Vue (options) {
  /*
    Vue需要通过构造方法运行，如果直接运行方法，会报错，且会终止。（this为空，所以_init的指向为空，报错终止执行。）
  */
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue 是一个构造方法，需要以new关键字申明')
  }
  /*
    Vue初始化运行
  */
  this._init(options)
}
/*
  以下四个方法为Vue的原型扩展，也就是说Vue的基本方法库都是在里面定义的。
  （对于一般的对程序不是很敏感的程序员来说，需要明白以下方法是在Vue new之前就运行的，说的更具体一点，下面的四个方法是为vue的_init服务的）
*/
/*
  @explain initMixin
    目的就是添加_init原型方法
*/
initMixin(Vue)
/*
  @explain stateMixin
    目的就是初始数据的操作，查看，修改和观察
*/
stateMixin(Vue)

eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
