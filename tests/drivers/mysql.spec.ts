import { test } from '@japa/runner'
import { registerApiTestSuite } from '../../test_helpers/driver_test_suite.js'
import { Mysql } from '../../src/drivers/sql/mysql.js'

registerApiTestSuite({
  test,
  driver: Mysql,
  supportsMilliseconds: false,
  config: {
    ttl: 30 * 100,
    prefix: 'japa',
    connection: {
      user: 'root',
      password: 'root',
      database: 'mysql',
      port: 3306,
    },
  },
})