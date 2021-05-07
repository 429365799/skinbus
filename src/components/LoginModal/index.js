import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as T from 'prop-types'
import request from '../../utils/request'

import './style.less'

Modal.setAppElement('#root')

class LoginModal extends PureComponent {
    static propTypes = {
        isOpen: T.bool.isRequired,
        onClose: T.func.isRequired
    }

    state = {
        username: '',
        password: '',
    }

    onLogin = () => {
        this.props.dispatch(dispatch => {
            request('/member/login-by-phone-code', {
                user_email: this.state.username,
                user_pass: this.state.password,
            }).then(res => {
                if (res.code ) {

                }
                dispatch({ type: 'doLogin', userInfo: res.data })
            })
        })
    }

    onInput = (key, val) => {
        this.setState({ [key]: val })
    }

    render() {
        const { isOpen, onClose } = this.props
        const { username, password } = this.state

        return (
            <Modal
                isOpen={ isOpen }
                overlayClassName={ 'login-modal-overlay' }
                className={ 'login-modal-content' }
            >
                <div className="login-modal">
                    <p>
                        <label htmlFor="username">账号</label>
                        <input id="username" type="text" value={username} onChange={(e) => this.onInput('username', e.target.value)}/>
                    </p>
                    <p>
                        <label htmlFor="password">密码</label>
                        <input id="password" type="text" value={password} onChange={(e) => this.onInput('password', e.target.value)}/>
                    </p>

                    <button onClick={ this.onLogin }>登录</button>
                    <button onClick={ onClose }>关闭</button>
                </div>
            </Modal>
        );
    }
}

export default connect(
    null
)(LoginModal);