import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavouriteIcon from '@material-ui/icons/FavoriteRounded'
import FlashIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'
import '../styles/SwipeButtons.css'

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__close'>    
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>    
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__fav'>    
                <FavouriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__flash'>    
                <FlashIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
