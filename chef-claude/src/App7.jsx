import React from "react"
import avatar from "./assets/user.png"
import starFilled from "./assets/star-filled.png"
import starEmpty from "./assets/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    function toggleFavorite() {
        setContact(prevContact=>{
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    let starIcon = contact.isFavorite ? starFilled : starEmpty
    let ariaLabel = contact.isFavorite ? "remove from favorites" : "add to favorites"
    let filledStar = contact.isFavorite ? "filled star icon" : "empty star icon"

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={`Profile picture of ${contact.firstName} ${contact.lastName}`}
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={ariaLabel}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={filledStar}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}