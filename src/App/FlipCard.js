import React from "react"

class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side front'>
                <h1 className='front-text'>who's that pokemon</h1>
            </div>
        )
    }
}

  // Back
class CardBack extends React.Component {
    render() {
        return(
            <div className='card-side back'>
                <figure className="fig">
                    <figcaption className="cap">
                        <p>it's pikachu</p>
                    </figcaption>
                    <img
                        class="picture"
                        src="https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png/revision/latest?cb=20141108062013"
                    />
                </figure>
            </div>
        )
    }
}

  // Main Component
class App extends React.Component {
    render() {
      return(
        <div className='container'>
          <div className='c-body'>
            <CardBack />
            <CardFront />
          </div>
        </div>
      )
    }
}

export default App