// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Profile } from '../components/Profile'

export class Home extends React.Component<{}, {}> {
    public render (): JSX.Element | null {
        return <div className='container'>
            <Profile/>
        </div>
    }
}
