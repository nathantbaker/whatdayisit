const now = new Date();
const monthNumber = now.getMonth();
let month;
const day = now.getDate();
const year = now.getFullYear();

switch (monthNumber) {
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'February';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
        break;
    default:
        break;
}

const dayOfWeek = now.getDay();
switch (dayOfWeek) {
    case 0:
        document.write('<h1>Sunday</h1>');
        break;
    case 1:
        document.write('<h1>Monday</h1>');
        break;
    case 2:
        document.write('<h1>Tuesday</h1>');
        break;
    case 3:
        document.write('<h1>Wednesday</h1>');
        break;
    case 4:
        document.write('<h1>Thursday</h1>');
        break;
    case 5:
        document.write('<h1>Friday</h1>');
        break;
    case 6:
        document.write('<h1>Saturday</h1>');
        break;
    default:
        document.write('<h1>Who knows...</h1>');
        break;
}

document.write(`<h2>${month.toUpperCase()} ${day}, ${year}</h2>`);
document.write("<a href='https://www.mechanicalloom.com/'><img class='center' id='logo' alt'Mechanical Loom Logo' src='img/mechanical-loom-logo.png'/></a>");