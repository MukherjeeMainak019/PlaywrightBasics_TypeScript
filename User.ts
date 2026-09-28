export class User {

    static getUserName(): string {
        return "Mainak";
    }

    getUserRole(): string {
        return "Admin";
    }
}

//The export makes the class available to other TypeScript files.