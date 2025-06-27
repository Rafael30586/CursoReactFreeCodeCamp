import React from "react";

export default function App4(){
    const [unreadMessages, setUnreadMessages] = React.useState(["a","b"])

    return (
        <div>
            {unreadMessages.length >=1 && <h1>You have {unreadMessages.length} unread messages</h1>}
            {unreadMessages.length === 0 && <p>You have no unread messages</p>}
        </div>
    )
}