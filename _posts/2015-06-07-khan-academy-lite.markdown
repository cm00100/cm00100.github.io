---
layout: post
title:  "Welcome to Jekyll!"
permalink: /blog/khan-academy-lite.html
---

Materials used to build the system:

Raspberry Pi (Model B, 512 MB RAM), Raspberry Pi case, power supply, 64 GB SD Card, Raspbian OS, Khan Academy Lite files/scripts, KA Lite software, mobile device or computer, Python, Wi-Fi USB adapter (Raspberry Pi WiPi adaptor or Edimax EW-7811Un), ethernet cable, HDMI cable, monitor.


First Progress:
At first we were going to try the KA-PI installation as described in the procedure section i the first milestone, which requires an SD card to burn the KA-PI image files into the card, but we decided to go with the KA Lite installation process, which is a more complex installation process than the KA-PI installation. It is reasonable to go with KA Lite since it is named as our actual project from the start. We are including a hotspot so that more users can be connected and have the use of the khan academy files for proper use. We learned about the capability of the Raspberry Pi of using it as a server. We can apply this new technique for other uses by using other content offline. We’ve also learned that there is the need of leadership and most important group communication is important to have the project done. At this time, the right materials for the project are being gathered to implement the system successfully. We have been trying to decide whether to use the Raspberry Pi Wi-Pi USB adapter or the Edimax EW-7811Un, which are two Wi-Fi USB modules. According to our research, we found that the Raspberry Pi Wi-Pi adapter supported a higher number of tablet connections than the Edimax EW-7811Un. The Raspberry Pi WiPi is a 802.11n compliant wireless client for Raspberry Pi installation. Drivers are built into the Raspberry Pi software release, and like most other adapters it supports WPA and WPA2 security features. Its Wireless Speed 11n is up to 150Mbps, 11g: up to 54Mbs, 11b: up to 11Mbps Frequency Range 2.4~2.4835GHz. For our project, we will use the Wi-Pi Raspberry Pi 802.11n Wireless Adapter for our Raspberry Pi system server.

Second Progress:

Since the Raspberry Pi does not read all SD cards, I was concerned about the SD card I decided to use for our Raspberry Pi. At first, we used NOOBS to install the operating system into the SD card, but the Raspberry Pi was not reading it and failed to operate. I decided to rewrite the SD card and install an operating system, which is Raspbian distributed by Debian Wheezy by writing it into the SD card using Win32DiskImager.

This is what I found out for this specific SD card we used and its compatibility:

SanDisk Ultra 64GB UHS-I/Class 10 Micro SDXC Memory Card Up to 48MB/s With Adapter- SDSDQUAN-064G-G4A: 
Raspbian wheezy 2015-02-16 succeeded as a stand alone image, but failed to boot up with NOOBS.

The Raspberry Pi successfully booted and operated with Raspbian wheezy. In order to view the user interface of the operating system and begin using it as a computer to perform the installation and configuration, we hooked up an HDMI cord from the Raspberry Pi onto an HDTV monitor with an HDMI port. The screen displayed successfully and we were prompted to enter a few commands. It asked to input a login name and a password. Afterwards, we wanted to load the graphical user interface, so we typed startx

There were several scripts I needed to install to run the server successfully. The first step was to update the operating system before installing and configuring any software into it. 
I also had to check that python was up to date, otherwise I was going to face some issues installing the KA Lite server:

python -V
sudo apt-get update
sudo apt-get upgrade

Internet connection was required for installation, so I used an ethernet cable in this case, which connected successfully:

git clone https://github.com/learningequality/ka-lite.git
./setup_unix.sh.

Issue 1: While trying to install the KA Lite package, I encountered an error which prevented me from completing the installation:

fatal: write error: No space left on device MiB | 127 KiB/s
fatal: index-pack failed
! ! ! Failed to download kalite files

I found out that the image is of a 2GB partition. I checked how much memory the system contained and it only had 142 MiB out of 2 GiB. That’s how much memory I was given while the SD actually contained 58 GB of free space. It took me a while to figure out how to increase the memory. 

Solution 1: There are several ways to increase the memory, but I chose a better option.  What I needed to do was for the partition to fill the whole card. On the terminal, I used the command sudo raspi-configuration and selected the option to increase the file system. After this completed, I rebooted the system and checked that the system finally contained the memory that the SD card contains. The Raspberry Pi now had 58 GiB free space available, and KA Lite installed successfully on the terminal.



First Test (connection):
The ethernet was still connected to the raspberry pi when it booted up and the server started. I entered the IP address that was provided from the terminal to input it on a browser in a different computer and on another mobile device. It worked successfully. 
I also  chose for it to be optimized and to run in the background automatically when the Raspberry Pi booted up.

Ports:
8008 (which will use optimization)
7007 (which will not use optimizations)

With ethernet cable and internet connection to connect to KA Lite server:
http://192.168.1.202:8008/ (Success)
http://127.0.0.1:8008/ (Failed)

Second Test:
I wanted to boot up the raspberry pi by just connecting the power supply of the raspberry pi without an ethernet cable and an HDMI. 

Issue 2: The raspberry pi turned on successfully, but the KA Lite server started unsuccessfully. Devices were not able to connect to the KA Lite server. So it turned out that the KA Lite server cannot connect to other devices without some form of network connection. 
Solution 2: The solution for this was to install a Wi-Fi adapter by using scripts in the Raspberry Pi terminal. In this case, I used the Wi-Pi adapter from the Raspberry Pi website (Wi-Pi Raspberry Pi 802.11n Wireless Adapter). The Wi-Fi installed successfully and I also installed a script to connect to the Khan Academy Lite website by using these commands on the terminal:

sudo git clone https://github.com/learningequality/ka-lite-pi-scripts.git
cd /ka-lite-pi-scripts
sudo ./configure.sh
cd /ka-lite-pi-scripts
sudo ./use_wipi.sh

To complete the access point configuration:
sudo python ./configure_network_interfaces.py
sudo insserv hostapd

The script for the khan academy network configuration installed successfully. An IP address called http://1.1.1.1:8008/ was provided and any mobile device or computer with a browser was able to browse into the website and begin using the Khan Academy website offline. 

Third Test:

Now that the Wi-Pi adapter was installed and working, what I wanted to do was to have the server boot up automatically and stay that way by just powering up the Raspberry Pi device. 

Issue 3: The server did boot up successfully and devices were able to connect to it, but the connection was lost after a while. 
Solution 3: The solution for this was to connect the Raspberry Pi into a monitor and let the black screen with all the words load up without needing to login, and then just remove the HDMI cable to save up power. Removing the HDMI from the Raspberry Pi did not affect anything, so it was all good. This way, the Raspberry Pi and the KA Lite server was able to stay on longer. If I wanted to turn off the server and Raspberry Pi safely, I could just connect the Raspberry Pi back into the monitor and enter sudo poweroff

As for power supply, there are many options for powering up the raspberry pi. A power generator, solar power, external batteries, and etc.

Any device; computer, laptop, tablet, or mobile phone with wireless connection was able to input http://1.1.1.1:8008/ onto their browser and browse into the Khan Academy website and begin using the features offline. I tested this method on five different devices in the same room. Videos can also be viewed by downloading them into the SD card for users to watch. All devices had no problem connecting to the server and were able to use the Khan Academy features. With a little bit of improvement, I can bring this device into the real world.

