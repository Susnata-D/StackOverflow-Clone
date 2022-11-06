import React from 'react'

const Avatar = (props) => {

    const style = {
        backgroundColor: props.backgroundColor,
        padding: `${props.px} ${props.py}`,
        color: props.color || "black",
        borderRadius: props.borderRadius,
        fontSize: props.fontSize,
        textAlign: "center",
        cursor: props.cursor || null,
        overflow: "hidden",
        textDecoration: "none"
    }

    return (
        <div style={style}>
            {props.value}
        </div>
    )
}

export default Avatar