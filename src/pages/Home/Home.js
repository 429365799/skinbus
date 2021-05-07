import React, { Component } from 'react'

export default class Home extends Component {

    showToast = () => {
        window.APP.toast.show('提示内容')
    }

    showLogin = () => {
        window.APP.showLogin()
    }

    render() {
        return (
            <div className="home">
                HOME

                <button onClick={this.showToast}>显示 Toast</button>
                <button onClick={this.showLogin}>显示登录弹框</button>
            </div>
        )
    }
}
