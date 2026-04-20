import './charSearchForm.scss'

const CharSearchForm = () => {
  return (
    <div className="char__search-form">
      <form>
        <label className="char__search-label" htmlFor="charName">
          Or find a character by name:
        </label>
        <div className="char__search-wrapper">
          <input id="charName" name="charName" type="text" placeholder="Enter name" />
          <button type="submit" className="button button__main">
            <div className="inner">find</div>
          </button>
        </div>
        {/* Ці блоки ми будемо показувати залежно від стану пошуку */}
        {/* <div className="char__search-error">
                    The character was not found. Check the name and try again
                </div>
                <div className="char__search-success">
                    There is! Visit ${name} page?
                    <button className="button button__secondary">
                        <div className="inner">to page</div>
                    </button>
                </div> */}
      </form>
    </div>
  )
}

export default CharSearchForm
