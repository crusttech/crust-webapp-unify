const buildVueConfig = require('corteza-webapp-one/vue.config-builder')

module.exports = buildVueConfig({
  appFlavour: 'Crust',
  appName: 'unify',
  appLabel: 'Crust Unify',
  theme: 'crust-base',
  packageAlias: 'crust-webapp-unify',
})
