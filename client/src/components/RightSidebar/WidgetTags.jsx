import React from 'react'

const WidgetTags = () => {

    const tags = ['c', 'c++', 'express', 'firebase', 'html', 'css', 'nodejs', 'jQuery', 'python', 'javascript', 'Django', 'bootstrap', 'redux', 'react', 'css3', 'html5'];

    return (
        <div className='widget-tags'>
            <h4>Watched Tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div >
    )
}

export default WidgetTags