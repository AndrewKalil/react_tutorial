import React from "react"
import ContactCard from "../components/ContactCard"
//import TodoItem from "./components/TodoItem"
//import MainContent from "./components/MainContent"
//import Footer from "./components/Footer"
//import Header from "./components/Header"


function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{
                    name: "Fluffy Maggy",
                    imgUrl: "https://www.treehugger.com/thmb/J9EGSRpoCXcQmzwr98PUafHI_3c=/1000x667/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__12__KittenYawnsAndStretches-4f31069c48c24834aa823548ce0925b0.jpg",
                    phone: "(313) 793-6776",
                    email: "pet_store@gamil.com"
                }}

                />
            <ContactCard
                contact={{
                    name: "Mr. Whiskers",
                    imgUrl: "https://i.pinimg.com/564x/a9/12/03/a912032ab0b755df1adeb73ffca51a0d.jpg",
                    phone: "(313) 793-6776",
                    email: "pet_store@gamil.com",
                }}/>
            <ContactCard
                contact={{
                    name: "Thiaggo",
                    imgUrl: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
                    phone: "(313) 793-6776",
                    email: "pet_store@gamil.com"
                }}
                />
            <ContactCard
                contact={{
                    name: "Amelia",
                    imgUrl: "https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg",
                    phone: "(313) 793-6776",
                    email: "pet_store@gamil.com"
                }}
                />
        </div>
    )
}

export default App