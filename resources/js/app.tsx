import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'

const el = document.getElementById('app')

ReactDOM.render(
  <InertiaApp
    initialPage={JSON.parse(el.dataset.page)}
    initialComponent={null}
    resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
  />,
  el
)
