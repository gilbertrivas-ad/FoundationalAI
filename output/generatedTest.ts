import { Given, When, Then, And } from '@cucumber/cucumber';

Given('the user is on the homepage', async () => {
  await page.goto('https://www.website.com');
});

When('the user searches for {string}', async (searchTerm: string) => {
  await page.fill('#searchInput', searchTerm);
  await page.click('#searchButton');
});

And('selects the first product from the results', async () => {
  await Promise.all([
    page.waitForSelector('.product'),
    page.click('.product:first-child'),
  ]);
});

And('clicks on Add to Cart', async () => {
  await page.click('#addToCartButton');
});

Then('the shopping cart should contain 1 item', async () => {
  const cartItemCount = await page.evaluate(() => {
    return document.querySelectorAll('.cart-item').length;
  });
  expect(cartItemCount).toBe(1);
}); 

Remember to provide your own website URL, element selectors, and any necessary modifications to make the code work on your specific application.