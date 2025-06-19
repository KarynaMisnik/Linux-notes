# Linux Notes

_“The Linux philosophy is 'laugh in the face of danger'. Oops. Wrong one. 'Do it yourself' – that's it.”_  
— Linus Torvalds

A comprehensive guide and resource hub for understanding Linux as an Operating System, tailored for academic study and exploration. Covers Linux architecture, system internals, command-line usage, shell scripting, and key concepts relevant for students and enthusiasts.

<div>
<img src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'/>
<img src='https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=Wikipedia&color=000000&logo=Wikipedia&logoColor=FFFFFF&label=' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=W3Schools&color=04AA6D&logo=W3Schools&logoColor=FFFFFF&label=' />
<img src='https://img.shields.io/static/v1?style=for-the-badge&message=YouTube&color=FF0000&logo=YouTube&logoColor=FFFFFF&label=' />
</div>

## Menu

* [Introduction](#introduction)
  - [What is Linux](#what-is-Linux)
* [Study Plan](#study-plan)
* [Linux Commands](#linux-commands)
  - [Basics](#basics)
  

# Introduction

**Linux** is a free and open-source operating system that powers everything from personal computers and smartphones to servers, supercomputers, routers, and embedded devices. At its core, Linux is known for its stability, security, flexibility, and developer-friendliness, making it a favorite among programmers, system administrators, and tech enthusiasts.

### What is Linux

Linux refers to the **kernel** — the central part of the operating system that directly interacts with the hardware and manages system resources like memory, CPU, devices, and processes.
However, when people say "Linux," they often mean a Linux distribution (distro), which is the kernel plus essential tools, libraries, and a user interface — forming a complete operating system.

Popular Linux distributions include:

<ul>
  <li>Ubuntu, Debian (user-friendly, general-purpose)</li>
   <li>Fedora, Red Hat Enterprise Linux (enterprise environments)</li>
   <li>Arch, Gentoo (customization-focused)</li>
   <li>Kali Linux (security and penetration testing)</li>
   <li>Android (yes, it's based on the Linux kernel!)</li>
</ul>

Studying Linux is more than learning an OS — it’s about understanding how computers work at a deeper level.

# Study Plan

### 🐧 Learning Linux: Study Roadmap

This document outlines my learning path as I dive deeper into Linux to understand how it works from the ground up — both practically and theoretically.

---

## ✅ Phase 1: Command Line Mastery

**Objective:** Build confidence using the Linux terminal.

### Topics to Learn:
- Navigation: `cd`, `ls`, `pwd`, `find`, `locate`
- File management: `cp`, `mv`, `rm`, `mkdir`, `touch`, `cat`, `less`
- Text processing: `grep`, `sed`, `awk`
- Permissions: `chmod`, `chown`, `umask`
- Redirects and pipes: `>`, `>>`, `<`, `|`, `tee`
- Disk usage: `du`, `df`, `mount`, `umount`
- Package managers: `apt`, `dnf`, `pacman` (based on distro)

🛠️ Practice: Solve OverTheWire Bandit challenges (<a href="https://overthewire.org/wargames/bandit/">Link</a>)

---

## ✅ Phase 2: System Architecture

**Objective:** Understand how Linux is structured internally.

### Topics to Learn:
- User space vs Kernel space
- System calls and kernel interfaces
- Shells: `bash`, `zsh`, `sh`
- Init systems: `systemd`, `init`, runlevels, targets
- Understanding the boot process

📘 Resource: *How Linux Works* by Brian Ward  
🔗 Project idea: Build your own minimal Linux system with [Linux From Scratch](http://www.linuxfromscratch.org/)

---

## ✅ Phase 3: Process and Memory Management

**Objective:** Learn how Linux handles programs and memory.

### Topics to Learn:
- Processes: `ps`, `top`, `htop`, `nice`, `kill`
- Foreground/background jobs: `fg`, `bg`, `jobs`, `&`
- Memory: `free`, `vmstat`, `/proc/meminfo`
- Swapping and paging
- Signals and inter-process communication (IPC)

---

## ✅ Phase 4: Filesystems and Storage

**Objective:** Learn how Linux organizes, stores, and accesses data.

### Topics to Learn:
- Filesystem layout: `/etc`, `/usr`, `/home`, `/var`, `/dev`, `/proc`
- Filesystem types: ext4, btrfs, xfs
- Mounting and unmounting: `mount`, `umount`, `/etc/fstab`
- Inodes and file metadata
- Hard and symbolic links: `ln`, `stat`

🔧 Exercise: Create and mount a virtual disk using `dd`, `mkfs`, and `mount`

---

## ✅ Phase 5: Shell Scripting & Automation

**Objective:** Automate tasks and boost efficiency.

### Topics to Learn:
- Bash syntax: variables, conditionals, loops, functions
- Input/output and arguments
- Script debugging: `set -x`, `bash -x`
- Cron jobs: `crontab -e`
- Environment variables

🛠️ Project idea: Write a backup script or a system monitor

---

## ✅ Phase 6: Networking & Security Basics

**Objective:** Understand Linux in the context of communication and protection.

### Topics to Learn:
- IP and interfaces: `ip`, `ifconfig`, `ping`, `traceroute`
- Ports and sockets: `netstat`, `ss`, `lsof`
- User management: `adduser`, `passwd`, `usermod`, `groups`
- File permissions and ownership
- Firewalls: `iptables`, `ufw`, `firewalld`

---

## ✅ Phase 7: Logging & Troubleshooting

**Objective:** Learn how to monitor and fix issues.

### Topics to Learn:
- System logs: `journalctl`, `/var/log/`
- Boot logs: `dmesg`
- Monitoring tools: `top`, `iotop`, `lsof`, `strace`
- Log rotation: `logrotate`

---

## 📚 Bonus (Advanced Topics)

- Kernel modules and custom compilation
- Linux system programming (with C)
- Using containers: Docker, Podman
- Orchestration: Kubernetes (k3s or Minikube)
- Configuration management: Ansible, Puppet

---

# 🧭 Linux Commands 

### Basics

The command line lets you move around the filesystem, inspect directories, and execute actions. Here are the essential commands and concepts for navigating in Linux.


📁 1. Current Directory: <code>pwd</code>

Prints the present working directory — where you are in the filesystem.

```shell
pwd
```

Example output:

```shell
/home/yourusername/Documents
```
