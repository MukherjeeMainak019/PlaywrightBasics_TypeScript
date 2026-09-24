// Split string and extract desired substring

const input: string = "br-cpPeAnfNniQ8HSAI-g_K5b7VKg!MB82Eyl_yqapovLSwu4evINcMUQLMGFr02huseeyJ-p46z6I1YZ5dB4HmvIUiyPosH7sQvZ-0Mdjb30FDAlCW-ST0vt86w$";

// Method 1: Using split() with '-' delimiter
const parts: string[] = input.split('-');
console.log("Split parts:", parts);

// Method 2: Using substring and indexOf
const output1: string = input.substring(input.indexOf('-0Mdjb30FDAlCW') + 1, input.indexOf('-ST0vt86w'));
console.log("Method 1 - Using substring:", output1);

// Method 3: Using regex to extract
const output2: string | null = input.match(/-(\w+30FDAlCW)-/)?.[1] || null;
console.log("Method 2 - Using regex:", output2);

// Method 4: Using split and find
const output3: string | undefined = parts.find(part => part.includes('0Mdjb30FDAlCW'));
console.log("Method 3 - Using split and find:", output3);

// Method 5: Direct regex match (most concise)
const output4: string[] = input.match(/(\w+30FDAlCW)/g) || [];
console.log("Method 4 - Direct regex match:", output4[0]);

console.log("\nFinal Output:", output1);
