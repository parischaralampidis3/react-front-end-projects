import React, {Fragment, Component } from 'react'
import {Link} from "react-router-dom"
import Spinner from "../layouts/Spinner"
import PropTypes from 'prop-types'


export  class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading : PropTypes.bool
        ,user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }

    render() {
        const {
             name, 
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user; 

        const { loading}  = this.props;

        if ( loading ) return <Spinner />;

        return (
            <Fragment>
                 <Link to = {`/`} className='btn btn-dark btn-md my-3 mx-3'>Back to homepage</Link>

                 Hireable : { ' ' }

                 {hireable ? (<i className ="fa fa-check-square text-success" />) :( <i className = "fa fa-times-circle text-danger"/>)}
            </Fragment>
        )
        
    }
}

export default User;