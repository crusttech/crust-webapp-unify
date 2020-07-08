import en from './en'

export const options = {
  defaultNS: 'unify',
  ns: ['unify'],
  debug: process.env.NODE_ENV !== 'production',
  detection: {
    // to overwrite, to use user defined, to guess user's lang
    order: ['querystring', 'localStorage', 'cookie', 'navigator'],
    caches: [/* 'localStorage', 'cookie' */],
  },
  resources: {
    en,
  },
}
