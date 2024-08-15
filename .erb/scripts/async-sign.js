const { signAsync } = require('@electron/osx-sign')

function getEntitlementsForFile (filePath) {
    if (filePath.startsWith('.erb')) {
        return './.erb/configs/entitlements.plist'
    }
}

// Information found at https://www.electronjs.org/docs/latest/tutorial/mac-app-store-submission-guide/
signAsync({
    app: '/path/to.your.app',
    // To Publish, this must be >> identity: 'Apple Distribution',
    identity: 'Apple Development',
    provisioningProfile: '/path/to/your.provisionprofile',
    optionsForFile: (filePath) => ({
        entitlements: getEntitlementsForFile(filePath)
    })
})