import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import { logger } from 'src/logging'

export const PubSub = () => {
    const sub = new Subject()

    const log = logger('msg-bus')

    return {
        publish: e => {
            log.debug('[pub-sub]', 'message:', e)
            sub.next(e)
        },

        onAny: s => sub.subscribe(s),
        on: (t, s) => {
            const type = (typeof t === 'string' || typeof t === 'function')
                ? t.toString()
                : t.type
            sub.pipe(
                filter(e =>
                    e.type === type.toString())).subscribe(s)

        },
        messages$: sub
    }
}
