import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.less'

export default class Header extends Component {

    static links = [
        {
            path: '/',
            name: 'Home',
            icon: ''
        },
        {
            path: '/csgo',
            name: 'CS:GO',
            icon: ''
        },
        {
            path: '/doc',
            name: '技术文档',
            icon: ''
        },
    ]

    render() {
        return (
            <div className="layout-header">
                <span className="logo">
                    SkinsBus
                </span>

                <ul>
                    {
                        Header.links.map(link => (
                            <li key={link.path}>
                                <NavLink to={link.path}>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
