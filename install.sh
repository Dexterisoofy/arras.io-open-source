#!/bin/sh

# Check if the "ws" package is installed using npm
if npm list ws --depth=0 | grep -q 'ws@8.13.0'; then
    echo "Dependencies have already been installed!"
else
    echo "ws package not found. Installing dependencies."

    # Install the "ws" package using npm
    npm install ws

    # Check if the installation was successful
    if [ $? -eq 0 ]; then
        echo "Installation successful!"
    else
        echo "Error occurred during installation."
    fi
fi
