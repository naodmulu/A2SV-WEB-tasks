describe('End-to-End Tests', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should render NavBar with correct links', () => {
    cy.visit('http://localhost:3000/');
    cy.get('nav').should('contain', 'Home');
    cy.get('nav').should('contain', 'Bookmarks');
  });

  it('should load the Home page and display job cards', () => {
    cy.contains('Loading...').should('be.visible');
    cy.wait(2000); // wait for data to be fetched
    cy.get('main[id="homeContainer"]').should('have.length.greaterThan', 0); // adjust the selector based on actual class
  });
  
  it('should handle SignUp form submission', () => {
    cy.visit('http://localhost:3000/sign_up');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('foordownload@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="confirmPassword"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.url().should('include', '/verify_email');
    cy.contains('Verify Email').should('be.visible');
    cy.get('.verify-card').should('be.visible');
  });
  
  it('should handle SignIn form submission', () => {
    cy.visit('http://localhost:3000/sign_in');
    cy.get('input[name="email"]').type('naodmulugeta1621@gmail.com');
    cy.get('input[name="password"]').type('abcde');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);

    cy.url().should('include', '/');
  });

  it('should handle JobCard bookmark functionality', () => {
    cy.visit('http://localhost:3000/'); // adjust the URL based on your route
    cy.get('.bookmark-button').click(); // adjust the selector based on actual class
    cy.get('.bookmark-button').should('have.class', 'text-blue-500'); // adjust the class based on bookmark state
  });

  it('should navigate to DashboardData and display Description and About', () => {
    cy.visit('http://localhost:3000/dashboard/65509e9353a7667de6ef5a60'); // adjust the URL based on your route
    cy.contains('Description').should('be.visible');
    cy.contains('About').should('be.visible');
  });

  it('should display Bookmarked jobs', () => {
    cy.visit('http://localhost:3000/bookmarks');
    cy.get('.job-card').should('have.length.greaterThan', 0); // adjust the selector based on actual class
  });


});
