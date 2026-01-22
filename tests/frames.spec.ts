import { test, expect, Frame } from '@playwright/test';

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total number of frames
    const frames = page.frames();
    console.log(`Total number of frames: ${frames.length}`);


    //using page.frame()
    const pageframe : Frame | null = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html"});
    // either url or name of the frame.
    if(pageframe)
    {
        await pageframe.locator("[name = 'mytext2']").fill("Hello");
        //here we are not using page.locator because the element is inside the frame 

        await pageframe.waitForTimeout(3000);

        expect( await pageframe.locator("[name = 'mytext2']").inputValue()).toBe("Hello");

       await pageframe.fill("[name = 'mytext2']", "Hello"); // another way to fill the input

    }
    //using frame locator ()
    const frameLocator = await page.frameLocator('[src = "frame_1.html"]');
    frameLocator.locator("name=mytext1").fill("Welcome");
    // here we are using frame locator to locate the frame and then the element inside the frame
});

test('Nested/inner/child Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const nestedFrame : Frame | null = 
    await page.frame ({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" })  // outer frame

    if(nestedFrame)
    {
    await nestedFrame.locator("[name='mytext3']").fill("Welcome to Frame 3");   
    await nestedFrame.waitForTimeout(3000);

    const childFrames = nestedFrame.childFrames();
    console.log(`Total number of child frames in Frame 3: ${childFrames.length}`);

    const radio = await childFrames[0].getByLabel("I am a human"); // inner frame
    // const radio = await childFrames[0].getByText("I am a human"); // inner frame
    //check getByLabel locator here vs GetByRole or GetByText

    
    await radio.check();
    // await nestedFrame.waitForTimeout(5000);
    // await childFrames[0].waitForTimeout(3000);
    // await page.waitForTimeout(5000);
    await expect(radio).toBeChecked();


    }
    
    // playwright built in locator code.
    
    //playwright built in locator usage in frame:

    page.frameLocator('[src="frame_3.html"]').getByRole('radio', { name: 'I am a human' }).check();

    page.frame({ url: "abc" })?.getByPlaceholder('Type here')?.fill('some text');


    //getByLabel vs getByText:
    // getByLabel is used to locate form elements like input, select, textarea etc. based on their associated label text.
    // getByText is used to locate any element based on its visible text content.
});