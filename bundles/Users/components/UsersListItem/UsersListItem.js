/**
 * Created by pow on 11.05.17.
 */
import React, { Component } from 'react';

export default class UsersListItem extends Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                <img src={ user.avatar_url } alt={ user.login }/>
                <span>{ user.login }</span>
            </div>
        )
    }
}