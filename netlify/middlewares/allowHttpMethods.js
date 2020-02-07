import { flatten } from 'lodash'

export default function allowHttpMethods (httpMethods = []) {
  httpMethods = flatten([httpMethods])

  return {
    before: ({ event, callback }, next) => {
      const { httpMethod } = event
      if (!httpMethods.includes(httpMethod)) {
        callback(null, { statusCode: 404 })
      } else {
        next()
      }
    }
  }
}
