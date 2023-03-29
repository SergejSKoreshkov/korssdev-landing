// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './router/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#root')
    if (container) {
        const root = createRoot(container)
        root.render(<App/>)
    } else {
        throw new Error('Failed to found #root container')
    }
})
