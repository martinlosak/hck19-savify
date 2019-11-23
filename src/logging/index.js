import pino from 'pino'

export const createLogger = ({ name }) => pino({
  name,
  level: 'trace'
})

export const logger = name => createLogger(({ name }))
