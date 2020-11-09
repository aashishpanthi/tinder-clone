import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import '../styles/header.css' 

function Header({ backButton }) {

    const history = useHistory()

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon fontSize='large' />
                </IconButton>
            ):(
                <IconButton>
                    <PersonIcon fontSize='large' />
                </IconButton>
            )}
            
            <Link to='/'>
                <img
                    src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                    alt='tinder logo'
                    className='header__tinderLogo'
                /> 
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
