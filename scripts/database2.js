
    
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
    
        // Abrufen der Links aus der Firestore-Datenbank
        var downloadDocRef = doc(db, 'links', 'linkdoc');
        var versionDocRef = doc(db, 'links', 'versiondoc');
    
        getDoc(downloadDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var capyRunData = docSnapshot.data();
                CapyRunMobileDownloadLinkV = capyRunData.CapyRunMobileDownload;
                console.log('Firebase-Link:', CapyRunMobileDownloadLinkV); // Logge den Firebase-Link
                var capyRunButtons = document.querySelectorAll('.CapyRunMobileDownloadButton');
                capyRunButtons.forEach(button => {
                    button.href = CapyRunMobileDownloadLinkV;
                });
            }
        });

        getDoc(downloadDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var camelSimulatorData = docSnapshot.data();
                CamelSimulatorDownloadLinkV = camelSimulatorData.CamelSimulatorDownload;
                console.log('Firebase-Link:', CamelSimulatorDownloadLinkV);
                document.querySelectorAll('.CamelSimulatorDownloadButton').forEach(button => {
                    button.href = CamelSimulatorDownloadLinkV;
                });
            }
        });

        getDoc(downloadDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var bananaClickerData = docSnapshot.data();
                BananaClickerDownloadLinkV = bananaClickerData.BananaClickerDownload;
                console.log('Firebase-Link BananaClicker:', BananaClickerDownloadLinkV);
                var bananaClickerDownloadButtons = document.querySelectorAll('.BananaClickerDownloadButton');
                bananaClickerDownloadButtons.forEach(button => {
                button.href = BananaClickerDownloadLinkV;
                });
            }
        });

        getDoc(downloadDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var fallRunData = docSnapshot.data();
                FallRunDownloadLinkV = fallRunData.FallRunDownload;
                console.log('Firebase-Link FallRun:', FallRunDownloadLinkV);
                var fallRunDownloadButtons = document.querySelectorAll('.FallRunDownloadButton');
                fallRunDownloadButtons.forEach(button => {
                button.href = FallRunDownloadLinkV;
                });
            }
        });

        getDoc(downloadDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var SupermarketSimulatorData = docSnapshot.data();
                SupermarketSimulatorLinkV = SupermarketSimulatorData.SupermarketSimulatorDownload;
                console.log('Firebase-Link SupermarketSimulator:', SupermarketSimulatorDownloadLinkV);
                var SupermarketSimulatorDownloadButtons = document.querySelectorAll('.SupermarketSimulatorDownloadButton');
                SupermarketSimulatorDownloadButtons.forEach(button => {
                button.href = SupermarketSimulatorDownloadLinkV;
                });
            }
        });

        getDoc(versionDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var versionData = docSnapshot.data();
                WebsiteVersionV = versionData.WebsiteVersion;
                console.log('Firebase-Link BananaClicker:', WebsiteVersionV);
                var WebsiteVersionTexts = document.querySelectorAll('.WebsiteVersionText');
                WebsiteVersionTexts.forEach(button => {
                button.textContent = WebsiteVersionV;
                });
            } 
        });

        getDoc(versionDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var versionData = docSnapshot.data();
                CapyRunVersionV = versionData.CapyRunVersion;
                console.log('Firebase-Link CapyRun:', CapyRunVersionV);
                var CapyRunVersionTexts = document.querySelectorAll('.CapyRunVersionText');
                CapyRunVersionTexts.forEach(button => {
                button.textContent = CapyRunVersionV;
                });
            }
        });

        getDoc(versionDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var versionData = docSnapshot.data();
                CamelSimulatorVersionV = versionData.CamelSimulatorVersion;
                console.log('Firebase-Link CamelSimulator:', CamelSimulatorVersionV);
                var CamelSimulatorVersionTexts = document.querySelectorAll('.CamelSimulatorVersionText');
                CamelSimulatorVersionTexts.forEach(button => {
                button.textContent = CamelSimulatorVersionV;
                });
            }
        });

        getDoc(versionDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var versionData = docSnapshot.data();
                BananaClickerVersionV = versionData.BananaClickerVersion;
                console.log('Firebase-Link BananaClicker:', BananaClickerVersionV);
                var BananaClickerVersionTexts = document.querySelectorAll('.BananaClickerVersionText');
                BananaClickerVersionTexts.forEach(button => {
                button.textContent = BananaClickerVersionV;
                });
            }
        });

        getDoc(versionDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                var versionData = docSnapshot.data();
                SupermarketSimulatorVersionV = versionData.SupermarketSimulatorVersion;
                console.log('Firebase-Link SupermarketSimulator:', SupermarketSimulatorVersionV);
                var SupermarketSimulatorVersionTexts = document.querySelectorAll('.SupermarketSimulatorVersionText');
                SupermarketSimulatorVersionTexts.forEach(button => {
                button.textContent = SupermarketSimulatorVersionV;
                });
            }
        });