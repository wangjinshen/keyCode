import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject("EventStore")
@observer
class Botoom extends Component {
    componentDidMount() {
        this.props.EventStore.handleOnKey()
        console.log(this.props.EventStore, "this.EventStore")
        this.props.EventStore.F1 = e => {
            // alert("[]")
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Botoom