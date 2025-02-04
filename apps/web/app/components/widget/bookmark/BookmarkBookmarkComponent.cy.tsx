import BookmarkComponent from './Bookmark'

describe('<BookmarkComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BookmarkComponent id="1" />)
  })
})