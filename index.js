/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';


inquirer.prompt([
    {
        name: "URL",
        message: "Enter the URL: ",
        type: 'input'
    }
]).then(function (answer) {
    const url = answer.URL;
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
    var qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qrcode.png'));
})



