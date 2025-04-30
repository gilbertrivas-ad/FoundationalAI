Scenario: User adds a product to the shopping cart
  Given the user is on the homepage
  When the user searches for "Laptop"
  And selects the first product from the results
  And clicks on "Add to Cart"
  Then the shopping cart should contain 1 item