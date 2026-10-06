const puppeteer = require('puppeteer');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set viewport to a typical desktop size
    await page.setViewport({ width: 1440, height: 900 });
    
    console.log('Navigating to aestheticdesignconstruction.com...');
    await page.goto('https://aestheticdesignconstruction.com/', { waitUntil: 'networkidle2' });
    
    console.log('Taking screenshot...');
    // We want the entire header/hero section. The viewport is 1440x900 so a full screenshot of the viewport should be perfect.
    await page.screenshot({ 
        path: 'C:\\Users\\Caleb_Cannon\\Workspace\\Pineforge Digital Offical\\Development\\Pineforge Digital Official Website\\public\\images\\aesthetic_design_mockup.png',
        clip: { x: 0, y: 0, width: 1440, height: 1000 }
    });
    
    console.log('Screenshot saved!');
    await browser.close();
})();
