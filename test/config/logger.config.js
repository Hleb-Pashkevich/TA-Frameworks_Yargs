const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const rotateTransport = new winston.transports.DailyRotateFile({
    frequency:'1d',
    filename: 'combined-log-rotate-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '1m',
    maxFiles: '2d',
    auditFile: 'logs-audit.json',
    level: 'info'
});

rotateTransport.on('rotate', function (oldFilename, newFilename) {
    console.log( `Log file was changed FROM ${oldFilename} to ${newFilename}.`);
});

const logger = winston.createLogger({
    level: 'debug',
    message:'Combined daily logs',
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        rotateTransport
    ],
    format: winston.format.simple()
});

module.exports = logger;

// const logger = winston.createLogger({
//     level: 'debug',
//     transports: [
//         new winston.transports.Console({level: 'debug' }),
//         new winston.transports.File({ filename: 'combined.log', level: 'info' }),
//         new DailyRotateFile({
//             filename: './log',
//             datePattern: 'yyyy-MM-dd.',
//             prepend: true,
//             localTime: true,
//             level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
//         })
//     ],
//     format: winston.format.simple()
//
// });
//
// module.exports = logger;