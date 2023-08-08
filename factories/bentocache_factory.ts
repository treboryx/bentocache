import { BentoCache } from '../src/bento_cache.js'
import { memoryDriver } from '../drivers/memory.js'

/**
 * A factory that creates a new BentoCache instance
 * Handy for quickly creating a new instance in a test
 */
export class BentoCacheFactory {
  create() {
    const bento = new BentoCache({
      default: 'primary',
      stores: {
        primary: memoryDriver({ maxSize: 100, ttl: 30_000 }),
        secondary: memoryDriver({ maxSize: 100, ttl: 30_000 }),
      },
    })

    return { bento }
  }
}