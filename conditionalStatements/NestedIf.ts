let age: number = 20;
let hasTicket: boolean = true;

if (age >= 18) {

    if (hasTicket) {
        console.log("You can enter.");
    } else {
        console.log("You need a ticket.");
    }

} else {
    console.log("You must be 18 or older.");
}