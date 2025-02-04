describe('Bookmark Page', () => {
  it('should visit bookmark page', () => {
    cy.visit('http://localhost:3000/bookmarks')
  })

  it('should add bookmark anime', () => {
    cy.visit('http://localhost:3000/anime/1')
    cy.get('[data-cy="bookmark"]').click()
    cy.visit('http://localhost:3000/bookmarks')
  })
})