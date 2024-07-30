describe("tests waitForEmail function", ()=>{
    cy.waitForMail().then(emails => {
        const email = emails.find(email => email.subject.includes('Test Subject'));
        expect(email.subject).to.contain('Test Subject');
        expect(email).to.not.be.undefined;
        
        // Past the mail html contents to the DOM
        cy.pasteHtml(email.html);

        // Do something
        cy.contains("Test Body Text").should("be.visible");
        cy.get('a').click();
    });
})