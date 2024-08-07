import type {ShikiSetupReturn} from '@slidev/types'
import {defineShikiSetup} from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
    return {
        themes: {
            dark: 'github-dark-default',
            light: 'github-light-default',
        },
    }
})
