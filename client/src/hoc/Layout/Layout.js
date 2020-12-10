import React, { Component, Fragment } from 'react';
import ButtonAppBar from '../../components/Navigation/ButtonAppBar/ButtonAppBar';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ButtonAppBar>
                </ButtonAppBar>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
