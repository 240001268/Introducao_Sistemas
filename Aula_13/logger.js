class Logger {
 
    constructor(name) {
        this.name = name
 
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }

    error(message) {
        console.error(`[${this.name} ERROR] ${message}`)
    }

}

module.exports = Logger; // Exporting the Logger class

