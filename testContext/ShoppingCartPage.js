// ShoppingCartPage.js
// Page Object Model for https://react-shopping-cart-67954.firebaseapp.com/

class ShoppingCartPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.sizeLabel = (size) => `label:has-text('${size}') >> input[type='checkbox'][value='${size}']`;
        this.addToCartButton = (productName) => `div.shelf-item:has-text('${productName}') >> button:has-text('Add to cart')`;
        this.checkoutButton = "div.shelf-footer button:has-text('Checkout')";
        this.subtotalSelector = "p:has-text('$ 9.00')";
}

    async navigate() {
        await this.page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    }

    async selectSize(size) {
        // Click the label whose text is exactly the size (e.g., 'L') using strict regex
        const label = this.page.locator('label').filter({ hasText: new RegExp(`^${size}$`) }).first();
        await label.click();
        // Wait for product list to update
        await this.page.waitForTimeout(1500);
    }

    async addProductToCart(productName) {
        // Find the product card for the product name, then click its 'Add to cart' button inside that card
        // Use locator chain to find and click the 'Add to cart' button for the product
        // Use XPath to locate and click the 'Add to cart' button for the product
        const addToCartButton = this.page.locator(`xpath=//div//p[text()='${productName}']//following-sibling::button[text()='Add to cart']`);
        await addToCartButton.waitFor({ state: 'visible' });
        await addToCartButton.click();
    }

    async checkout() {
        const checkoutButton = this.page.locator("button:has-text('Checkout')");
        await checkoutButton.waitFor({ state: 'visible' });
        await checkoutButton.click();
    }

    async getSubtotal() {
        const subtotalText = await this.page.textContent(this.subtotalSelector);
        return subtotalText.replace(/\s+/g, '');
    }
}

module.exports = { ShoppingCartPage };
