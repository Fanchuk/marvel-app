import './comicsList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class ComicsList extends Component {
  state = {
    comics: [],
    loading: true,
    error: false,
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.marvelService.getAllCharacters()
        .then(this.onCharLoaded)
        .catch(this.onError)
  }

  onCharLoaded = (chars) => {
    this.setState({
      chars,
      loading: false,
    })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  renderItems = (arr) => {
    const items = arr.map((item) => {
      let imgStyle = { objectFit: 'cover' }
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { objectFit: 'unset' }
      }

      return (
        <li className="comics__item" key={item.id}>
          <a href="#">
            <img src={item.thumbnail} alt={item.name} className="comics__item-img" style={imgStyle}/>
            <div className="comics__item-name">{item.name}</div>
            <div className="comics__item-price">{item.price}</div>
          </a>
        </li>
      )
    })

    return (
      <ul className="comics__grid">
        {items}
      </ul>
    )
  }

  render() {
    const { comics, loading, error } = this.state

    const items = this.renderItems(comics)

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? items : null

    return (
      <div className="comics__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    )
  }
}

export default ComicsList
