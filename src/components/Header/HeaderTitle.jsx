import React from 'react'

function HeaderTitle({ title }) {
    return (
        <div>
            <div className='header-title'>
                <h1 className='title-text'>{title}</h1>
            </div>
        </div>
    )
}

export default HeaderTitle