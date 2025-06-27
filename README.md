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

- [Introduction](#introduction)
  - [What is Linux](#what-is-Linux)
  - [History of Linux](#history-of-linux)
  - [Linux distros](#linux-distros)
  - [Linux System Architecture](#linux-system-architecture)
- [Study Plan](#study-plan)
- [Linux Commands(basics)](#linux-commands-basics)
  - [Directory](#directory)
  - [Advanced Navigation](#advanced-navigation)

# Introduction

**Linux** is a free and open-source operating system that powers everything from personal computers and smartphones to servers, supercomputers, routers, and embedded devices. At its core, Linux is known for its stability, security, flexibility, and developer-friendliness, making it a favorite among programmers, system administrators, and tech enthusiasts.

### What is Linux

Linux refers to the **kernel** — the central part of the operating system that directly interacts with the hardware and manages system resources like memory, CPU, devices, and processes.
However, when people say "Linux," they often mean a Linux distribution (distro), which is the kernel plus essential tools, libraries, and a user interface — forming a complete operating system.
But to understand Linux we have to start from Unix.

Popular Linux distributions include:

<ul>
  <li>Ubuntu, Debian (user-friendly, general-purpose)</li>
   <li>Fedora, Red Hat Enterprise Linux (enterprise environments)</li>
   <li>Arch, Gentoo (customization-focused)</li>
   <li>Kali Linux (security and penetration testing)</li>
   <li>Android (yes, it's based on the Linux kernel!)</li>
</ul>

Studying Linux is more than learning an OS — it’s about understanding how computers work at a deeper level.

#### History of Linux

The history of Unix dates back to the **mid-1960s**, when the Massachusetts Institute of Technology (MIT), AT&T Bell Labs, and General Electric collaborated on an ambitious project called <a href="https://en.wikipedia.org/wiki/Multics">MULTICS</a> — the Multiplexed Information and Computing Service. The goal was to create a sophisticated, multi-user, time-sharing operating system.

Although **AT&T** eventually withdrew from the project, the ideas behind **MULTICS** deeply influenced computer scientists at Bell Labs. In **1969**, **Ken Thompson** and **Dennis Ritchie** developed a simpler alternative, initially called **UNICS** (Uniplexed Information and Computing Service) — a pun on MULTICS. This system was later renamed <a href="https://en.wikipedia.org/wiki/Unix">Unix</a>.

Unix’s importance lies not only in its elegant and modular design, but in how it reshaped the development of operating systems. One of its most groundbreaking moments came in **1973**, when Thompson and Ritchie rewrote the Unix <a href="https://en.wikipedia.org/wiki/Kernel_(operating_system)">kernel</a> in C, a new high-level language they designed. This made Unix highly portable — it could be run on different hardware platforms with minimal changes — and laid the foundation for modern operating systems.

Over time, Unix became the blueprint for countless OS families, including Linux, BSD, macOS, Android (via Linux), and more. Its philosophy of building small, composable tools that do one thing well continues to influence software design today.

The <ins>Linux kernel</ins> was created in 1991 by **Linus Torvalds**, a Finnish computer science student. Frustrated by the limitations of MINIX (a teaching-oriented Unix-like OS), he started developing his own Unix-compatible kernel as a personal project.

On August 25, **1991**, Linus announced his work on a new free operating system kernel in a Usenet post. It was initially small, but quickly gained attention and contributions from programmers around the world.

By combining the Linux kernel with tools from the GNU Project (like compilers, shells, and utilities), it became a full-fledged free and open-source operating system, often called GNU/Linux.

Since then, the Linux kernel has evolved into a massive, modular, and highly portable system, powering everything from servers and smartphones (like Android) to supercomputers and embedded devices.

Today, it’s one of the largest and most actively developed open-source projects in the world.

#### Linux distros

🧷 What is a Linux Distribution (Distro)?

A Linux distribution is a complete operating system built around the Linux kernel, bundled with a package manager, desktop environment, libraries, drivers, system utilities, and often a default init system (like systemd).

Distros are tailored for different purposes: general use, servers, security, embedded systems, minimal installations, etc.

🧱 Core Components of Any Distro

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kernel</td>
      <td>The core of the OS, manages hardware and system resources.</td>
      <td>Linux kernel</td>
    </tr>
    <tr>
      <td>Init System</td>
      <td>Manages system startup and services.</td>
      <td>systemd, SysVinit, OpenRC</td>
    </tr>
    <tr>
      <td>Package Manager</td>
      <td>Installs, updates, and removes software packages.</td>
      <td>apt, dnf, pacman, zypper</td>
    </tr>
    <tr>
      <td>Shell</td>
      <td>Command-line interface for interacting with the system.</td>
      <td>bash, zsh, fish</td>
    </tr>
    <tr>
      <td>Core Utilities</td>
      <td>Essential command-line tools and libraries.</td>
      <td>GNU coreutils, glibc</td>
    </tr>
    <tr>
      <td>Desktop Environment</td>
      <td>Graphical user interface (optional).</td>
      <td>GNOME, KDE Plasma, XFCE</td>
    </tr>
    <tr>
      <td>Applications</td>
      <td>Pre-installed or available software for daily tasks.</td>
      <td>Firefox, LibreOffice, GIMP</td>
    </tr>
    <tr>
      <td>Documentation</td>
      <td>Manuals and help files for users and admins.</td>
      <td>man pages, info, distro wikis</td>
    </tr>
  </tbody>
</table>

🔢 Major Families of Linux Distros

Understanding distro families helps you choose wisely and recognize compatibility.

1. Debian-based

   ✅ Popular: Ubuntu, Linux Mint, Pop!\_OS, Kali

   🧰 Uses dpkg, apt for packages

   🧠 Known for stability, vast repositories

   🔧 Great for: general desktop use, servers, development

2. Red Hat-based

   ✅ Popular: Fedora, RHEL, CentOS Stream, AlmaLinux, Rocky Linux

   🧰 Uses rpm, dnf or yum

   🧠 Enterprise-focused, SELinux support, used in industry

   🔧 Great for: enterprise servers, sysadmin training

3. Arch-based

   ✅ Popular: Arch Linux, Manjaro, EndeavourOS

   🧰 Uses pacman

   🧠 Rolling release, minimal, highly customizable

   🔧 Great for: learning internals, DIY systems

4. Gentoo-based

   ✅ Gentoo, Calculate Linux

   🧠 Source-based, compiled packages (emerge)

   🔧 Ideal for: deep optimization, performance tuning

5. Independent/Other

   openSUSE (uses zypper, based on YaST tools)

   Slackware (very Unix-like, minimal)

   NixOS (declarative system config)

   Alpine Linux (musl libc, minimal, used in containers)

#### 🏗️ Linux System Architecture

The Linux system architecture’s main levels are:

| Layer                     | Role                                                              |
| ------------------------- | ----------------------------------------------------------------- |
| **User Applications**     | Programs users interact with directly.                            |
| **User Space Libraries**  | Standard libraries apps use to interact with the kernel.          |
| **Kernel**                | Core of the OS, manages hardware, processes, memory, filesystems. |
| **Drivers & VFS**         | Hardware abstraction, handles devices and filesystems uniformly.  |
| **System Call Interface** | Entry point for apps to request services from the kernel.         |
| **Hardware**              | Physical devices managed and accessed through the kernel.         |

🧱 1. Hardware Layer

**What it is:** The physical components of the machine.

**Examples:**

- CPU
- RAM
- Disk (HDD/SSD)
- Network interfaces
- GPUs, USB devices

**Role:** Executes instructions, handles data transfer, I/O operations.

⚙️ 2. Kernel Layer (Kernel Space)

**The core of the OS**, running in privileged mode and managing all system operations.

Key Components:

| Subsystem                     | Function                                                |
| ----------------------------- | ------------------------------------------------------- |
| **Process Scheduler**         | Handles multitasking by scheduling which process runs.  |
| **Memory Manager**            | Manages physical and virtual memory.                    |
| **Device Drivers**            | Interface between hardware and the OS.                  |
| **VFS (Virtual File System)** | Abstracts filesystem operations (ext4, FAT, NTFS, etc). |
| **Network Stack**             | Manages TCP/IP, sockets, and network communication.     |
| **System Call Interface**     | Gateway for user apps to access kernel features.        |

🧩 3. System Libraries (User Space)

**What they are:** Shared libraries providing APIs used by applications to interact with the system.

**Examples:**

- `glibc` (C standard library)
- `libssl`, `libcurl`, `libX11`

**Role:**

- Translate high-level functions (e.g., `open()`, `malloc()`) into system calls.
- Provide abstraction and code reuse.

💻 4. User Processes / Applications

**What they are:** Programs run by users or the system.

**Examples:**

- CLI: `bash`, `ls`, `top`, `gcc`
- GUI: Firefox, VS Code
- Daemons: `cron`, `sshd`, `NetworkManager`

**Role:** Interface with users and provide application functionality.

🔐 5. Shell and CLI(Command-Line Interface)

> Note: CLI - It's a text-based interface that allows users to interact with the operating system or
> software by typing commands into a terminal or console.

**Examples:** `bash`, `zsh`, `fish`

**Role:**

- Command-line interface to interact with the OS.
- Runs scripts, automates tasks, executes commands.

📦 6. Package Management Layer

**Examples:**

- Debian/Ubuntu: `apt`, `dpkg`
- Fedora: `dnf`, `rpm`
- Arch: `pacman`

**Role:**

- Install, remove, and manage software.
- Resolve dependencies and maintain package metadata.

🔁 Interaction Flow

```text
[ User Application ]
        ↓
[ System Libraries (glibc, etc.) ]
        ↓
[ System Call Interface ]
        ↓
[ Kernel Subsystems ]
        ↓
[ Device Drivers ]
        ↓
[ Physical Hardware ]
```

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

📘 Resource: _How Linux Works_ by Brian Ward  
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

# 🧭 Linux Commands(basics)

### Directory

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

📂 2. List Files: <code>ls</code>

Shows files and directories in the current directory.

Useful options:

<code>-l</code> (long format)

<code>-a</code> (include hidden files)

<code>-h</code> (human-readable file sizes)

🚶‍♂️ 3. Change Directory: <code>cd</code>

Changes your current working directory.

```bash
cd /path/to/directory
```

Shortcuts:

<code>cd ~</code> → go to your home directory

<code>cd ..</code> → go up one level

<code>cd -</code> → switch to previous directory

Examples:

```bash
cd ..
cd ~/Downloads
cd /etc

```

🗂️ 4. Tree-Like View (Optional): <code>tree</code>

Shows a directory and its contents recursively (you may need to install it).

```bash
sudo apt install tree      # Debian/Ubuntu
sudo dnf install tree      # Fedora/RHEL
tree
```

🔍 5. Locate Files & Directories
<code>find</code>: Search in real-time

```bash
find /path -name "filename"
```

<code>locate</code>: Search using an indexed database

First update the database:

```bash
sudo updatedb
```

then:

```bash
locate filename
```

📌 6. Absolute vs Relative Paths

Absolute path: starts from <code>/</code> (root), e.g.,
`bash /home/user/docs`

Relative path: based on current location, e.g.,

```bash
../docs
```

#### Advanced Navigation

<code>pushd</code> and <code>popd</code> — Directory Stack

They let you jump between directories without losing your place.

```bash
pushd /etc       # Save current dir and go to /etc
popd             # Go back to where you were
```

💡 Great for switching back and forth between two locations.

<code>dirs</code> — View Directory Stack

```bash
dirs
```

Shows all directories in your stack (used with <code>pushd/popd</code>).

<code>ls</code> with sorting and filtering

```bash
ls -lt           # Sort by modification time
ls -ltr          # Reverse order
ls -lhS          # Sort by size, human-readable
```

💡 Combine with <code>head</code> or <code>tail</code> for top/bottom N files:

```bash
ls -lhS | head -n 5
```
