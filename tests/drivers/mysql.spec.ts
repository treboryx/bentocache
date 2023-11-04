import { test } from '@japa/runner'

import { Mysql } from '../../src/drivers/sql/mysql.js'
import { registerCacheDriverTestSuite } from '../../test_helpers/driver_test_suite.js'

registerCacheDriverTestSuite({
  test,
  driver: Mysql,
  supportsMilliseconds: false,
  config: {
    prefix: 'japa',
    connection: {
      user: 'root',
      password: 'root',
      database: 'mysql',
      port: 3306,
    },
  },
})
