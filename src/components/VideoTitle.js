import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faInfoCircle)

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-10 space-y-5'>
            <div className='textSection space-y-2'>
                <h1 className='title text-5xl font-bold'>{title}</h1>
                <p className='description text-xl leading-6 w-2/4'>{overview}</p>
            </div>
            <div className='buttons my-3 space-x-3'>
                <button className="play bg-gray-100 text-black px-6 py-2 rounded border-2 border-black text-xl bg-opacity-50">
                    <FontAwesomeIcon icon={faPlay} className='px-1' /> Play</button>
                <button className='moreInfo bg-gray-100 text-black px-6 rounded border-2 border-black text-xl bg-opacity-60 py-2'>
                    <FontAwesomeIcon icon={faInfoCircle} className='px-1' />More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle