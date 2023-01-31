class AppError extends Error {
    constructor(message, status) {
        super();
        console.log(`THHISSSSS ${this}`)
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;