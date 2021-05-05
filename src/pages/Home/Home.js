import React, { Component } from 'react'

export default class Home extends Component {

    showToast = () => {
        window.APP.toast.show('提示内容')
    }

    render() {
        return (
            <div className="home">
                HOME

                <button onClick={this.showToast}>Show Toast</button>
            </div>
        )
    }
}
