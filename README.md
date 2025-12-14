# yt-rco

A lightweight Browser Extension that automatically skips YouTube age-restriction overlays by appending `&rco=1` to video URLs.

## Description

**yt-rco** automatically adds the `&rco=1` parameter to YouTube video URLs, skipping the manual "I understand and continue" prompt for age-restricted content. This extension only works for users who have already verified their age with YouTube.

## Installation

### From GitHub (Local / Developer Mode)

1. Download or clone this repository.
2. Open Chrome (or another Chromium-based browser) and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked**.
5. Select the `yt-rco` folder containing the 'manifest.json' and icon files.

### From Chrome Web Store (Future)

- When published, you can install directly from the Chrome Web Store by searching for **yt-rco**.

## Requirements

- **Chromium-based browser** (tested on Chrome, Microsoft Edge, Brave, Opera)
- **Age-verified YouTube account** - This extension only works if your account is already age-verified with YouTube. It does not bypass age restrictions for unverified accounts.

## How It Works

The extension monitors YouTube watch pages and automatically appends `&rco=1` to the URL when:
- You're on a `/watch` page
- The URL doesn't already contain `rco=1`
- The extension is enabled (default)

The page will reload with the parameter added, automatically bypassing the age-restriction overlay for verified users.

## Features

- ✅ Automatic age-restriction overlay skipping
- ✅ Lightweight and fast
- ✅ No popup or manual interaction required — install and forget
- ✅ Minimal permissions (storage only)

## Permissions

- `storage` — used to store the extension's enabled/disabled state. No other data is accessed or transmitted.

## Version

Current version: **1.3**

## Author

**Kryptamyr**

## License
This project is open source under the MIT License. See [LICENSE](LICENSE) for details.

