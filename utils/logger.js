const winston=require("winston");

const logger = winston.createLogger({
    level: 'info', // logging level: 'info' logs everything from info, warn, and error. Adjust as necessary.
    // format: winston.format.combine(
    //     winston.format.label({ label: process.env.APP_NAME }),
    //     winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    //     logFormat
    // )
    format: winston.format.json(),
    
    transports: [
        new winston.transports.Console()
    ]
});

module.exports=logger
