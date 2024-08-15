// Initialisierung der Firebase-Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Konfiguration für Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBTMH5SzACrkyiXjJKmn646FpZ52te-BE",
    authDomain: "nand-studios.firebaseapp.com",
    projectId: "nand-studios",
    storageBucket: "nand-studios.appspot.com",
    messagingSenderId: "757182836081",
    appId: "1:757182836081:web:fcbd06ff53d632bbf7dad0",
    measurementId: "G-NW0JM7YR07"
};

// Initialisierung von Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Variablen für die Links
let CapyRunMobileDownloadLinkV = '';
let CamelSimulatorDownloadLinkV = '';
let BananaClickerDownloadLinkV = '';
let FallRunDownloadLinkV = '';
let SupermarketSimulatorDownloadLinkV = '';
let WebsiteVersionV = '';
let CamelSimulatorVersionV = '';
let BananaClickerVersionV = '';
let CapyRunVersionV = '';
let SupermarketSimulatorVersionV = '';

// Abrufen der Links aus der Firestore-Datenbank
const downloadDocRef = doc(db, 'links', 'linkdoc');
const versionDocRef = doc(db, 'links', 'versiondoc');

const downloadButtons = [
{ selector: '.CapyRunMobileDownloadButton', variable: 'CapyRunMobileDownloadLinkV' },
{ selector: '.CamelSimulatorDownloadButton', variable: 'CamelSimulatorDownloadLinkV' },
{ selector: '.BananaClickerDownloadButton', variable: 'BananaClickerDownloadLinkV' },
{ selector: '.FallRunDownloadButton', variable: 'FallRunDownloadLinkV' },
{ selector: '.SupermarketSimulatorDownloadButton', variable: 'SupermarketSimulatorDownloadLinkV' }
];

const versionTexts = [
{ selector: '.WebsiteVersionText', variable: 'WebsiteVersionV' },
{ selector: '.CapyRunVersionText', variable: 'CapyRunVersionV' },
{ selector: '.CamelSimulatorVersionText', variable: 'CamelSimulatorVersionV' },
{ selector: '.BananaClickerVersionText', variable: 'BananaClickerVersionV' },
{ selector: '.SupermarketSimulatorVersionText', variable: 'SupermarketSimulatorVersionV' }
];

function updateLinkAndLog(docSnapshot, dataVariable, buttonsArray) {
if (docSnapshot.exists()) {
const data = docSnapshot.data();
window[dataVariable] = data[dataVariable];
console.log(`Firebase-Link ${dataVariable}:`, window[dataVariable]);
buttonsArray.forEach(button => {
    document.querySelectorAll(button.selector).forEach(btn => {
        btn.href = window[dataVariable];
    });
});
}
}

function updateVersionTextAndLog(docSnapshot, dataVariable, textsArray) {
if (docSnapshot.exists()) {
const data = docSnapshot.data();
window[dataVariable] = data[dataVariable];
console.log(`Firebase-Link ${dataVariable}:`, window[dataVariable]);
textsArray.forEach(text => {
    document.querySelectorAll(text.selector).forEach(txt => {
        txt.textContent = window[dataVariable];
    });
});
}
}
getDoc(downloadDocRef).then(docSnapshot => {
updateLinkAndLog(docSnapshot, 'CapyRunMobileDownload', downloadButtons.slice(0, 1));
updateLinkAndLog(docSnapshot, 'CamelSimulatorDownload', downloadButtons.slice(1, 2));
updateLinkAndLog(docSnapshot, 'BananaClickerDownload', downloadButtons.slice(2, 3));
updateLinkAndLog(docSnapshot, 'FallRunDownload', downloadButtons.slice(3, 4));
updateLinkAndLog(docSnapshot, 'SupermarketSimulatorDownload', downloadButtons.slice(4, 5));
});

getDoc(versionDocRef).then(docSnapshot => {
updateVersionTextAndLog(docSnapshot, 'WebsiteVersion', versionTexts.slice(0, 1));
updateVersionTextAndLog(docSnapshot, 'CapyRunVersion', versionTexts.slice(1, 2));
updateVersionTextAndLog(docSnapshot, 'CamelSimulatorVersion', versionTexts.slice(2, 3));
updateVersionTextAndLog(docSnapshot, 'BananaClickerVersion', versionTexts.slice(3, 4));
updateVersionTextAndLog(docSnapshot, 'SupermarketSimulatorVersion', versionTexts.slice(4, 5));
});