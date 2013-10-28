#!/bin/bash

NODE_VERSION=v0.10.21

#Test de la version de Node installée
isNodeInstalled=`command -v nodejs`
currentNodeVersion=`node -v`
if [ "$isNodeInstalled" == "" ] || [ $currentNodeVersion != $NODE_VERSION ]
	then 
		echo "Nodejs is not installed => KO"
		echo "Updating NodeJS..."
		sudo apt-get install python-software-properties
		sudo add-apt-repository ppa:chris-lea/node.js
		sudo apt-get update
		sudo apt-get install nodejs
		sudo apt-get install npm
		echo "NodeJS version => OK."
	else
		echo "NodeJS version => OK."
fi

#Test si GIT est installé
currentGitVersion=`command -v git`
if [ "$currentGitVersion" == "" ]
	then
		echo "Installing GIT..."
		sudo apt-get install git
		echo "GIT install => OK."
	else
		echo "GIT is already installed => OK."
fi

#Clone du repo GIT
echo "GIT repository cloning..."
if [ -d copytodigiposte ]
	then 
		cd copytodigiposte
		git pull
	else git clone https://github.com/neilerua/copytodigiposte.git 
fi
echo "GIT repository cloned => OK."

#Installation des paquets NodeJS nécessaires
cd copytodigiposte
sudo npm link
sudo npm update