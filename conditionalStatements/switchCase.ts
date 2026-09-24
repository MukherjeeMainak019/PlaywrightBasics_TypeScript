var weeknumber : number = 7;

switch (weeknumber) { // here the condition is being checked
    case 1: console.log("Sunday");break;
    case 2: console.log("Monday");break;
    case 3: console.log("Tuesday");break;
    case 4: console.log("Wednesday");break;
    case 5: console.log("Thursday");break;
    case 6: console.log("Friday");break;
    case 7: console.log("Saturday");break;
    default: console.log("Invalid week number");
}   

const browser : String = "Chrome";
switch (browser) { // here the condition is being checked
    case "Chrome": 
    //logic to launch Chrome driver
    // Webdriver driver = new ChromeDriver();
    console.log("Chrome browser");
    break;
    case "Firefox": 
    //logic to launch Firefox driver
    // Webdriver driver = new geckodriver();
    console.log("Firefox browser");
    break;
    case "Safari": console.log("Safari browser");break;
    case "Edge": console.log("Edge browser");break;
    default: console.log("Unknown browser");
} 