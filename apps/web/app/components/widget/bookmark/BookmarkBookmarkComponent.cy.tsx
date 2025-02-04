import React from 'react'
import BookmarkComponent from './Bookmark'

describe('<BookmarkComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BookmarkComponent />)
  })
})