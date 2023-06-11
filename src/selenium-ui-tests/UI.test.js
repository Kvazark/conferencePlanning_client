import { Builder,Capabilities, until, By } from 'selenium-webdriver';

describe('UI Test Login', () => {
    let driver;
    beforeEach(async () => {
        driver = await new Builder()
            .withCapabilities(Capabilities.chrome())
            .build();
    });

    afterEach(async () => {
        await driver.quit();
    });
    it('Clicking the button changes the text to Hello World', async () => {
        await driver.get('http://localhost:3000/login');

        const emailInput = await driver.findElement(By.id('input-log1'));
        const passwordInput = await driver.findElement(By.id('input-log2'));
        const submitButton = await driver.findElement(By.id('login-btn'));

        await emailInput.sendKeys('moderator3@example.com');
        await passwordInput.sendKeys('P@ssw0rd');
        await submitButton.click();
        await driver.wait(until.urlIs('http://localhost:3000/moderator/mainPageModerator'), 5000)

    });
});