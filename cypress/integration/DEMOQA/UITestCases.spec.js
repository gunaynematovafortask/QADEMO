import PageObjects from '../../support/pageObjects';

describe('My demoQA Journey', () => {

    const textOfTheUrl = 'https://demoqa.com/automation-practice-form'
    const textOfTheMainPage = 'Practice Form'
    const pageObjects = new PageObjects()
    const firstName = 'Gunay'
    const lastName = 'Nematova'
    const email = 'gunaynemetova@gmail.com'
    const birthYear = '1989'
    const birthMonth = 'February'
    const birthDay = '11'
    const subject1 = 'Maths'
    const subject2 = 'Economics'
    const address = 'Knobleharjeva 18'
    const message = 'Thanks for submitting the form'

    function randomCommonSelectionForDifferentPurposes(option) {
        return (Math.floor(Math.random() * option) + 1);
    }

    function randomPhoneNumber() {
        const maxLength = 10
        const num = '1234567890'
        let result = ''
        for (let j = maxLength; j > 0; --j) result += num[Math.floor(Math.random() * num.length)]
        return result
    }

    // function randomDateOfBirth(){
    //     const dateOfBirth = new Date(+(new Date()) - Math.floor(Math.random() * 10000000))
    //     return dateOfBirth.getDate() + ' Feb '+ dateOfBirth.getFullYear()
    // }

    it('visit the DemoQa page practice form page ', function () {
        //visit the demo qa web page url is stored in cypress.json
        cy.visit('/')
        pageObjects.getTextOfPracticeForm().contains(textOfTheMainPage)
        cy.url().should('include', textOfTheUrl)
    })
    it('input first name', function () {
        pageObjects.getFirstName().type(firstName).should('be.visible')
    })

    it('input last name', function () {
        pageObjects.getLastName().type(lastName).should('be.visible')
    })
    it('input email', function () {
        pageObjects.getEmail().type(email).should('be.visible')
    })
    it('select gender', function () {
        pageObjects.getTypeRadioBtn().check('Female', { force: true })

    })

    it('input mobile number', function () {
        pageObjects.getMobile().click().type(randomPhoneNumber())
    })

    it('input date of birth', function () {
        // pageObjects.getCalendar().click().type('{selectAll}').type(randomDateOfBirth()).type('{enter}')
        pageObjects.getCalendar().click()
        pageObjects.getCalendar().should('be.visible')
        pageObjects.getYearFromCalendar().select(birthYear)
        pageObjects.getMonthFromCalendar().select(birthMonth)
        pageObjects.getDayFromCalendar().first().click()

    })

    it('input favorite subject from dropdown', function () {
        pageObjects.getSubjects().type(`${subject1}{enter}`)
        pageObjects.getSubjects().type(`${subject2}{enter}`)
        //removal of 1 of subjects to test removal functionality
        pageObjects.getRemovalXbtn().eq(1).click()

    })
    it('input hobbies', function () {
        pageObjects.getHobbies().click({ force: true });
    })

    it('upload file', function () {
        //upload file to the input field
        pageObjects.getUploadFile().attachFile('funny.jpeg')

    })

    it('input address', function () {
        pageObjects.getCurrentAddress().type(address)

    })

    it('select state and city', function () {
        pageObjects.getSelectState().click().find(`#react-select-3-option-${randomCommonSelectionForDifferentPurposes(1)}`).click()
        pageObjects.getSelectCity().click().find('#react-select-4-option-0').click()

    })

    it('click on submit button', function () {
        pageObjects.getSubmitBtn().click({ force: true })
        pageObjects.getSuccesfulSubmitionText().should('be.visible').should('contain', message)
    })

    it('close opened window', function () {
        pageObjects.getCloseWindow().click()
        //verification of returning back to main page
        pageObjects.getTextOfPracticeForm().contains(textOfTheMainPage)

    });

})