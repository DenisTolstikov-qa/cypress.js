describe('Оформление заказа', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('.without-sku.is-available > .product-preview__content > .product-preview__area-bottom').trigger('mouseover');
        cy.get('.without-sku.is-available > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('.header__cart > .icon').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.is-count-up').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа')
        })
})
