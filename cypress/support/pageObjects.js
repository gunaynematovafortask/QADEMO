class PageObjects {
    getTextOfPracticeForm() {
        return cy.get('.main-header');
    }

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName() {
        return cy.get('#lastName')
    }

    getEmail() {
        return cy.get('#userEmail')
    }

    getTypeRadioBtn() {
        return cy.get('[type="radio"]')
    }

    getMobile() {
        return cy.get('#userNumber')
    }

    getCalendar() {
        return cy.get('#dateOfBirthInput')
    }

    getYearFromCalendar() {
        return cy.get('.react-datepicker__year-select')
    }

    getMonthFromCalendar() {
        return cy.get('.react-datepicker__month-select')
    }

    getDayFromCalendar() {
        return cy.get('.react-datepicker__day.react-datepicker__day--011')
    }

    getSubjects() {
        return cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3')
    }

    getRemovalXbtn() {
        return cy.get('div.css-xb97g8.subjects-auto-complete__multi-value__remove svg')
    }

    getHobbies() {
        return cy.get('#hobbies-checkbox-1')
    }

    getUploadFile() {
        return cy.get('#uploadPicture')
    }

    getCurrentAddress() {
        return cy.get('#currentAddress')
    }

    getSelectState() {
        return cy.get('#state')
    }

    getSelectCity() {
        return cy.get('#city')
    }

    getSubmitBtn() {
        return cy.get('#submit')
    }

    getSuccesfulSubmitionText() {
        return cy.get('.modal-content')
    }

    getCloseWindow() {
        return cy.get('#closeLargeModal')
    }
}

export default PageObjects;