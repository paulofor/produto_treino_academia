export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools


cordova build android --release -- --keystore=/home/usuario/NovaDigicom.key --storePassword=Digicom2004 --alias=chaveDigi --password=Digicom2004
