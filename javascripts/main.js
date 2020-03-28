const now = new Date();
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
document.write("<a href='https://www.mechanicalloom.com/'><img class='center' id='logo' alt'Mechanical Loom Logo' src='img/mechanical-loom-logo.png'/></a>");