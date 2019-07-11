import app from 'corteza-webapp-one/src/app'
import i18n from './i18n'
import './themes'

app({
  // Overriding with local i18n
  i18n: i18n(),
})
