import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchBox />)
  })

  it('calls onEnter after typing', () => {
    const onEnter = cy.spy().as('onEnter')
    cy.mount(<SearchBox onEnter={onEnter} />)
    cy.get('[data-cy="search-box"]').click()
    cy.get('[data-cy="search-box-input"]').type('test')
    cy.get('[data-cy="search-box-input"]').type('{enter}')
    cy.get('@onEnter').should('have.been.calledWith', 'test')
  })

  it('calls onDebounceChange after typing', () => {
    const onDebounceChange = cy.spy().as('onDebounceChange')
    cy.mount(<SearchBox onDebounceChange={onDebounceChange} />)
    cy.get('[data-cy="search-box"]').click()
    cy.get('[data-cy="search-box-input"]').type('mimikyu')
    cy.wait(1000) // Wait for debounce
    cy.get('@onDebounceChange').should('have.been.calledWith', 'mimikyu')
  })
})