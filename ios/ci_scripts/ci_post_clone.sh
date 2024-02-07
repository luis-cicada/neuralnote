#!/bin/sh


# Install Node.js using Homebrew.
brew install node

# Install Yarn using Homebrew.
brew install yarn

# Install CocoaPods using Homebrew.
brew install cocoapods

# Update CocoaPods to the latest version.
brew upgrade cocoapods

# Install node modules.
yarn

# Install dependencies you manage with CocoaPods.
pod install