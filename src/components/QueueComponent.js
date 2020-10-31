import React from 'react'
import "../style/queue.css"

const trash = "https://www.flaticon.com/svg/static/icons/svg/618/618424.svg"

export default function QueueItems (props) {
    const items = props.items
    const listItems = items.map(item => {
        return <div className="queueList" key={item.key}>
            <p>
                <input
                    type="text"
                    id={item.key}
                    value={item.text}
                    onChange={(e) => props.setUpdate(e.target.value, item.key)}
                />
                <img
                    onClick={() => props.deleteItem(item.key)}
                    src={trash}
                    alt=""/>
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}