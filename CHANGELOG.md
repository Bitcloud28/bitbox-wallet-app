# Changelog

## [Unreleased]
- Add support for BIP-86 taproot receive addresses
- Show coin subtotals in 'My portfolio'
- Transaction details: make transaction ID copyable without opening the block explorer
- Improve account loading speed when there are many transactions in the account
- Desktop: add a configuration option using the environment variable `BITBOXAPP_RENDER` to enable
  users to turn off forced software rendering. Use `BITBOXAPP_RENDER=auto` to use Qt's default
  rendering backend.

## 4.31.1 [2022-02-07]
- Bundle BitBox02 Multi firmware version v9.9.1
- Add a file picker dialog to choose where to export a CSV to
- Fix display of server name and checking the server connection in 'Connect your own full node'
- Add support for Swedish krona (SEK)

## 4.31.0 [tagged 2022-01-13, released 2022-01-18]
- Bundle BitBox02 firmware version v9.9.0
- Support sending to Bitcoin taproot addresses
- Fix opening 'transactions export' CSV file
- Add Dutch translation
- Add support for Norwegian krone (NOK)
- Migrated the frontend from preact to React

## 4.30.0 [released 2021-11-17]
- Add Buy CTA on empty Account overview and summary views
- Fix an Android app crash when opening the app after first rejecting the USB permissions
- Change label to show 'Fee rate' or 'Gas price' for custom fees
- Change label 'Send all' label to 'Send selected coins' if there is a coin selection
- Improve information about using the passphrase feature
- Temporary disable Chromium sandbox on linux due to #1447

## 4.29.1 [tagged 2021-09-07, released 2021-09-08]
- Verify the EIP-55 checksum in mixed-case Ethereum recipient addresses
- Disable GPU acceleration introduced in v4.29.0 due to rendering artefacts on Windows
- Changed default currency to USD
- Support copying address from transaction details

## 4.29.0 [released 2021-08-03]
- Add support for the Address Ownership Proof Protocol (AOPP), i.e.: handle 'aopp:?...' URIs. See https://aopp.group/.
- Add fee options for Ethereum based on priority, and the ability to set a custom gas price
- Add a guide entry: How to import my transactions into CoinTracking?
- Updated to Qt 5.15 from Qt 5.12 for Linux, macOS and Windows
- Revamped account-info view to show account keypath, scriptType etc.
- Allow disabling accounts in 'Manage accounts'.
- Prevent screen from turning off while the app is in foreground on Android
- Allow entering the BitBox02 startup settings in 'Manage device' to toggle showing the firmware hash at any time
- More user-friendly messages for first BitBox02 firmware install
- Use hardware accelerated rendering in Qt if available

## 4.28.2 [released 2021-06-03]
- Fix a conversion rates updater bug

## 4.28.1 [released 2021-05-28]
- Restore lost transaction notes when ugprading to v4.28.0.
- Improve error message when EtherScan responds with a rate limit error.

## 4.28.0 [released 2021-05-27]
- Bundle BitBox02 v9.6.0 firmware
- New feature: add additional accounts
- Remove the setting 'Separate accounts by address type (legacy behavior)'. BitBox02 accounts are now always unified.
- Validate socks proxy url
- Display the BitBox02 secure chip version (from v9.6.0)

## 4.27.0 [released 2021-03-17]
- Buy ERC20 tokens using Moonpay
- Remove CryptoCompare; use Coingecko for latest conversion rates. Fixes rate limiting issues, especially for VPN/Tor users.
- Bundle BitBox02 v9.5.0 firmware
- Run BitBoxApp installer as admin by default on Windows
- Close a running BitBoxApp instance on Windows when installing an update to ensure success
- Show blockchain connection errors in detail
- Connect default BTC/LTC full nodes on port 443 to work around firewalls blocking the 5XXXX ports
- Remove confusing disabled copy button in the receive screen

## 4.26.0 [released 2021-02-25]
- Activate antiklepto for Ethereum and ERC20 transactions
- Show nonce in Ethereum transaction details
- Fix QR-code scanning on Linux
- Remove BitBox02 random number button
- Allow camera access in iframe for Moonpay
- Bring back BitBox02 wallet create/restore success screen
