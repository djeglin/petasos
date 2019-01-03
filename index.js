import chalk from 'chalk'

const env = process.env.APPLICATION_ENV || process.env.NODE_ENV || 'dev'
const nonProd = env !== 'production' && env !== 'prod' && env !== 'live'

const Petasos = {
  log: function () {
    if (nonProd) console.log(Array.prototype.slice.call(arguments))
  },

  install (Vue, options) {
    Vue.prototype.log = () => {
      return this.log
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(Petasos)

export default Petasos
export const { log } = Petasos