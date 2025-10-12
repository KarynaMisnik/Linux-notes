# Operating Systems(Linux) Notes

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

- [Introduction of Linux](#introduction)
 - [What is Linux](#what-is-Linux)
 - [History of Linux](#history-of-linux)
- [Linux distros](#linux-distros)
- [Linux System Architecture](#linux-system-architecture)
- [Root user and sudo](#root-user-and-sudo)
- [Users and user groups](#users-and-user-groups)
- [Installing programs](#installing-programs)

- [Linux Commands(basics)](#linux-commands-basics)
  - [Directory](#directory)
  - [Advanced Navigation](#advanced-navigation)
  - [File Management](#file-management)
  - [Text processing](#text-processing)
  - [Permissions](#permissions)
  - [Redirects and pipes](#redirects-and-pipes)
  - [Disk usage](#disk-usage)
  - [Package managers](#package-managers)

## Introduction of Linux

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

## Linux distros

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

## 🏗️ Linux System Architecture

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

- CPU(Central Processing Unit): performs calculations and controls operations
- RAM: used to store data and programs.
- Disk (HDD/SSD)
- Network interfaces
- GPUs, USB devices

**Role:** Executes instructions, handles data transfer, I/O operations.

Among all hardware, main memory is the most essential. It’s just a large area that holds 0s and 1s (binary data).

The CPU reads instructions and data from memory, processes them, and then writes results back to memory. All data going to or from devices passes through main memory.

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

## Root user and sudo

🧑‍💻 Understanding the Root User and <code>sudo</code> in Linux
🔹 What Is the Root User?

The root user (also called superuser) is the administrator of a Linux system.
It has unrestricted access to all files, commands, and system resources.
The root user account: Has UID 0
Home directory: <code>/root</code>
Prompt symbol: <code>#</code> (instead of <code>$</code> for normal users)

⚠️ Caution: Actions performed as root can change or even break the entire system — use it only when necessary.

🔹 Normal User vs Root User
| User Type | Example Prompt | Permissions | Typical Use |
| ----------- | ---------------- | ------------------------ | ---------------------------------- |
| Normal user | `alex@ubuntu:~$` | Limited (own files only) | Daily operations |
| Root user | `root@ubuntu:~#` | Full control of system | System maintenance, administration |

🔹 What Is <code>sudo</code?

**sudo** stands for “superuser do”.
It allows a normal user to run specific commands with <ins>root</ins> privileges.
When using sudo, you are asked for your own password, not the root password.
Only users listed in <code>/etc/sudoers</code> can use it.

Example:

```bash
sudo apt update
```

→ Executes the command as root.

🔹 Why Use sudo Instead of Logging In as Root
| `root` Login | `sudo` Command |
| ------------------------ | --------------------------------------------- |
| Full access all the time | Temporary, per-command access |
| No activity logging | Every action logged in `/var/log/auth.log` |
| Easy to break system | Safer — requires explicit privilege each time |

🔹 Useful Related Commands

```bash
whoami        # show current username
sudo whoami   # check if sudo privileges work
sudo -i       # open root shell
exit          # leave root shell
```

## 👥 Users and user groups

Linux is a **multi-user** operating system, meaning multiple users can access the same system simultaneously — each with their own permissions, files, and privileges.

🔹 What Is a User?

A user is an account that represents a person, service, or process using the system.
Each user has:
Username → unique login name
UID (User ID) → numeric ID assigned by the system
Home directory → user’s personal working directory (e.g., <code>/home/alex</code>)
Shell → command interpreter (e.g., <code>/bin/bash</code>)

You can view all users in the file:

```bash
cat /etc/passwd
```

Example otput:

```bash
alex:x:1000:1000:Alex Smith:/home/alex:/bin/bash
```

Fields (separated by <code>:</code>):

1. Username
2. Password placeholder (<code>x</code>) — actual password stored in /etc/shadow
3. UID (user ID)
4. GID (primary group ID)
5. Comment (user’s full name or description)
6. Home directory
7. Default shell

🔹 What Is a Group?

A group is a collection of users that share access permissions.
Groups simplify administration — instead of assigning permissions to individual users, you assign them to a group.

View all groups:

```bash
cat /etc/group
```

Example output:

```bash
developers:x:1001:alex,jordan
```

1. Group name: developers
2. GID (Group ID): 1001
3. Members: alex, jordan

🧰 Managing Users
➕ Add a New User

```bash
sudo adduser username
```

Creates:
A new user account
Home directory <code>/home/username</code>
Default shell <code>/bin/bash</code>

Set password:

```bash
sudo passwd username
```

Or add a new user with these parameters:

```bash
useradd -d homedir -g groupname -m -s shell -u userid accountname
```

| Option         | Description                                              |
| -------------- | -------------------------------------------------------- |
| `-d homedir`   | Specify the user’s **home directory** path.              |
| `-g groupname` | Set the user’s **primary group**.                        |
| `-m`           | **Create the home directory** if it doesn’t exist.       |
| `-s shell`     | Define the user’s **default shell** (e.g., `/bin/bash`). |
| `-u userid`    | Assign a specific **User ID (UID)**.                     |
| `accountname`  | The **username** (login name) of the new account.        |

✏️ Modify a User

```bash
sudo usermod [options] username
```

Common options:
| Option | Description | Example |
| ----------------- | -------------------------- | --------------------------------------- |
| `-l newname` | Change username | `sudo usermod -l newalex alex` |
| `-d /new/home -m` | Move home directory | `sudo usermod -d /home/newalex -m alex` |
| `-s /bin/zsh` | Change default shell | `sudo usermod -s /bin/zsh alex` |
| `-aG groupname` | Add to supplementary group | `sudo usermod -aG sudo alex` |

❌ Delete a User

```bash
sudo deluser username
```

or (remove home too):

```bash
sudo deluser --remove-home username
```

👥 Managing Groups
➕ Add a Group
Following example creates a group with default values:

```bash
sudo addgroup groupname
```

To create a new group account with following parameters:

```bash
groupadd [-g gid [-o]] [-r] [-f] groupname
```

| Option   | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `-g gid` | Specify a custom **Group ID (GID)** for the new group.                  |
| `-o`     | Allow creating a group with a **duplicate GID** (used with `-g`).       |
| `-r`     | Create a **system group** (GID < 1000).                                 |
| `-f`     | **Do not fail** if the group already exists; exit successfully instead. |

✏️ Modify a Group

```bash
sudo groupmod -n newgroup oldgroup
```

❌ Delete a Group

```bash
sudo delgroup groupname
```

➕ Add a User to a Group

```bash
sudo usermod -aG groupname username
```

🔎 Check User’s Groups

```bash
groups username
```

or for current user:

```bash
groups
```

🧩 Important Files
| File | Description |
| -------------- | ------------------------ |
| `/etc/passwd` | List of user accounts |
| `/etc/shadow` | Encrypted user passwords |
| `/etc/group` | Group information |
| `/etc/gshadow` | Secure group passwords |

🔐 Password Management

Change your own password:

```bash
passwd
```
Change another user’s password:

```bash
sudo passwd username
```
Lock / unlock a user account:

```bash
sudo usermod -L username   # lock
sudo usermod -U username   # unlock
```

🧱 System vs Normal Users
| Type | UID Range | Description |
| ------------- | --------- | -------------------------------------------------- |
| System users | 0–999 | Used by system services (e.g., `daemon`, `syslog`) |
| Regular users | 1000+ | Real people (e.g., `alex`, `student`) |
| Root user | 0 | Full administrative privileges |

## Installing programs

🧭 1️⃣ Using the Graphical Interface (GUI)
🟢 Ubuntu Software Center (App Store)

Easiest way for beginners.
GUI tool that installs software from official repositories and Snap Store.

Steps:
Open Ubuntu Software (orange shopping bag icon).
Search for the app (e.g., “GIMP”).

Click Install.

👉 Behind the scenes, this uses Snap or APT packages.

🧭 2️⃣ Using the APT Package Manager (from Repositories)
🟩 Install from official repos

```bash
sudo apt update
sudo apt install package_name
```
APT installs <code>.deb</code> packages and handles dependencies automatically.

🧭 3️⃣ Using .DEB Packages (manually downloaded)
🟦 Install downloaded <code>.deb</code> file

You can download apps directly from official websites.
```bash
sudo dpkg -i package_name.deb
sudo apt -f install   # fix missing dependencies
```
or, using APT for simplicity:
```bash
sudo apt install ./package_name.deb
```
🧭 4️⃣ Using Snap Packages
🟪 Snap (containerized apps)

Snaps are self-contained apps maintained by Canonical.
```bash
sudo snap install package_name
```
To list or remove snaps:
```bash
snap list
sudo snap remove package_name
```


## 🧭 Linux Commands(basics)

#### Directory

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

🐧 <code>pushd</code> and <code>popd</code> — Directory Stack

They let you jump between directories without losing your place.

```bash
pushd /etc       # Save current dir and go to /etc
popd             # Go back to where you were
```

💡 Great for switching back and forth between two locations.

🐧 <code>dirs</code> — View Directory Stack

```bash
dirs
```

Shows all directories in your stack (used with <code>pushd/popd</code>).

🐧 <code>ls</code> with sorting and filtering

```bash
ls -lt           # Sort by modification time
ls -ltr          # Reverse order
ls -lhS          # Sort by size, human-readable
```

💡 Combine with <code>head</code> or <code>tail</code> for top/bottom N files:

```bash
ls -lhS | head -n 5
```

🐧 <code>readlink</code> and <code>realpath</code> — Resolve symlinks

```bash
readlink -f somefile
realpath somefile
```

Tells you the actual target of a symlink or canonical path.

🐧 <code>namei</code> — Break down a path

```bash
namei -l /etc/passwd
```

Shows each part of a path and its permissions — helpful when debugging permission issues.

🐧 <code>stat</code> — Detailed file metadata

```bash
stat filename
```

Shows size, owner, permissions, access/modify/change times, inode, etc.

🐧 <code>find</code> with powerful filters

```bash
find . -type f -size +100M -name "*.mp4"
```

Find all MP4 files larger than 100 MB.

```bash
find /var/log -mtime -3        # modified in last 3 days
find /home -user yourname      # owned by a user
find . -empty                  # find empty files and dirs
```

🐧 <code>file</code> — Detect file type

```bash
file filename
```

Helps identify actual file type, not just by extension.

🐧 <code>basename</code> and <code>dirname</code> — Break up paths

```bash
basename /etc/hosts   → "hosts"
dirname /etc/hosts    → "/etc"
```

Useful in shell scripts when parsing file paths.

🐧 <code>du</code> and <code>ncdu</code> — Disk usage

```bash
du -sh *           # See size of items in current dir
ncdu               # (must install) – interactive CLI disk usage explorer
```

🐧 <code>xargs</code> + <code>find</code> — Power combos

```bash
find . -type f -name "*.bak" | xargs rm
```

Deletes all <code>.bak</code> files in the current tree. Safer than a simple <code>rm -r</code>.

#### 🗂️ File Management

🐧 <code>cp</code> — Copy files and directories

```bash
cp file.txt backup.txt
```

Copies <code>file.txt</code> to <code>backup.txt</code>.

```bash
cp -r folder1 folder2
```

Copies the entire <code>folder1</code> directory into a new <code>folder2</code> directory.

🐧 <code>mv</code> — Move or rename files

```bash
mv file.txt /home/user/Documents/
```

Moves <code>file.txt</code> to the <code>Documents</code> folder.

```bash
mv oldname.txt newname.txt
```

Renames <code>oldname.txt</code> to <code>newname.txt</code>.

🐧 <code>rm</code> — Remove files or directories

```bash
rm file.txt
```

Deletes <code>file.txt</code>.

```bash
rm -r old_folder/
```

Deletes the directory <code>old_folder</code> and its contents.

⚠️ Be careful with rm — it doesn't ask for confirmation by default!

🐧 <code>mkdir</code> — Make new directories

```bash
mkdir my_project
```

Creates a directory named <code>my_project</code>.

```bash
mkdir -p projects/python/scripts
```

Creates nested directories, all at once.

🐧 <code>touch</code> — Create empty files or update timestamps

```bash
touch newfile.txt
```

Creates an empty file named <code>newfile.txt</code> (or updates its timestamp if it exists).

```bash
touch file1.txt file2.txt
```

Creates two empty files at once.

🐧 <code>cat</code> — View or concatenate files

```bash
cat file.txt
```

Displays the content of <code>file.txt</code> in the terminal.

```bash
cat file1.txt file2.txt > combined.txt
```

Combines two files into <code>combined.txt</code>.

🐧 <code>less</code> — View large files page by page

```bash
less bigfile.log
```

Opens <code>bigfile.log</code> in scrollable view mode (use ↑ ↓ / PgUp PgDn / q to quit).

### 📄 Text Processing Commands

🐧 <code>grep</code> — Search for text patterns

```bash
grep "error" logfile.txt
```

Finds and prints all lines in <code>logfile.txt</code> that contain the word error.

```bash
grep -i "warning" logfile.txt
```

Like above, but case-insensitive (Warning, warning, etc.).

```bash
grep -r "TODO" src/
```

Recursively searches for <code>TODO</code> in all files under <code>src/</code>.

```bash
grep -n "main" program.c
```

Shows line numbers of lines containing <code>main</code> in <code>program.c</code>.

🐧 <code>sed</code> — Stream editor (find/replace, transform text)

```bash
sed 's/foo/bar/' file.txt
```

Replaces first occurrence of <code>foo</code> with bar on each line of <code>file.txt</code>.

```bash
sed 's/foo/bar/g' file.txt
```

Replaces all occurrences of <code>foo</code> with <code>bar</code> on each line.

```bash
sed -i 's/localhost/127.0.0.1/g' config.conf
```

Edits <code>config.conf</code> in-place, replacing <code>localhost</code> with <code>127.0.0.1</code>.

```bash
sed -n '5,10p' file.txt
```

Prints only lines 5 to 10.

🐧 <code>awk</code> — Field-based text processing

```bash
awk '{print $1}' file.txt
```

Prints the first column of each line (columns are space/tab-delimited by default).

```bash
awk -F: '{print $1}' /etc/passwd
```

Prints the first field from each line of <code>/etc/passwd</code>, using <code>:</code> as the field separator.

```bash
awk '{sum += $2} END {print sum}' data.txt
```

Sums up all values in the second column of <code>data.txt</code>.

```bash
awk '$3 > 100 {print $1, $3}' data.txt
```

Prints the first and third columns only if the third column is greater than 100.

### 🔐 Permissions

🐧 <code>chmod</code> — Change file or directory permissions

Set **read (r)**, **write (w)**, and **execute (x)** permissions for user, group, others.

```bash
chmod u+x script.sh
```
Adds execute <code>(x)</code> permission to the user (owner) on <code>script.sh</code>.
```bash
chmod go-w file.txt
```
Removes <code>write (w)</code> permission for group and others.

```bash
chmod u=rwx,g=rx,o= file.txt
```
Sets:
user = rwx, group = rx, others = none.

**Octal (numeric) mode**

| Octal | Permission |
| ----- | ---------- |
| 7     | rwx        |
| 6     | rw-        |
| 5     | r-x        |
| 4     | r--        |
| 0     | ---        |

```bash
chmod 755 script.sh
```
Sets:
user=rwx, group=rx, others=rx
```bash
chmod 644 file.txt
```
Sets:
user=rw-, group=r--, others=r--

🐧 <code>chown</code> — Change owner and/or group of a file
```bash
chown alice file.txt
```

Changes owner of <code>file.txt</code> to user alice.
```bash
chown alice:developers file.txt
```

Changes owner to <code>alice</code> and group to <code>developers</code>.
```bash
chown :developers file.txt
```

Changes only <code>group</code> to <code>developers</code>.
```bash
chown -R alice: /home/alice/
```

Recursively changes owner of all files in <code>/home/alice/</code> to <code>alice</code>.

🐧 <code>umask</code> — Set default permissions for new files and directories

<code>umask</code> defines which permission bits to turn off by default.
```bash
umask
```

Outputs e.g. 0022 (default for many distros)
```bash
umask 0027
```

New files will default to:
<code>rw-r-----</code> (640) for files
<code>rwxr-x---</code> (750) for directories
Because umask subtracts bits from 666 for files and 777 for directories.

### Redirects and pipes

🐧 <code>></code> – Redirect Output (Overwrite)

Redirects the standard output (stdout) of a command to a file, overwriting its contents.

```bash
echo "Hello World" > output.txt
```

Creates (or overwrites) <code>output.txt</code> with <code>"Hello World"</code>.

🐧 <code>>></code> – Redirect Output (Append)

Appends the output to the end of a file instead of overwriting it.
```bash
echo "New line" >> output.txt
```

Adds <code>"New line"</code> to the end of <code>output.txt</code> without removing existing content.

🐧 <code><</code> – Redirect Input

Takes input from a file instead of the keyboard.
```bash
wc -l < file.txt
```
Counts lines in file.txt by feeding its content as input to wc.

🐧 <code>|</code> – Pipe

Sends the output of one command as input to another.

```bash
ls -l | grep ".txt"
```
Lists files in long format and filters only <code>.txt</code> files.
```bash
dmesg | less
```
Sends kernel log output into <code>less</code> for scrollable viewing.

🐧 <code>tee</code> – Output to Screen and File

Reads from standard input and writes both to the screen and a file.

```bash
echo "Log entry" | tee log.txt
```
Displays <code>Log entry</code> on the screen and saves it to <code>log.txt</code>.
```bash
echo "Another entry" | tee -a log.txt
```
Appends to <code>log.txt</code> (<code>-a</code> means append) while still showing it.

🐧 Usage Together

Redirects and pipes are often combined:

```bash
cat access.log | grep "ERROR" | tee errors.log
```
Filters only lines with <code>"ERROR"</code> and saves them to <code>errors.log</code>, while displaying them live.

### Disk usage

🐧 <code>du</code> — Disk Usage

Shows the disk space used by files and directories.
```bash
du
```
Displays disk usage of the current directory and its subdirectories.
```bash
du -h
```
Human-readable format (KB, MB, GB).
```bash
du -sh /var/log
```
Shows total size of <code>/var/log</code> directory in a human-readable format.

```bash
du -ah --max-depth=1
```
Displays size of all files/directories at one level deep.

🐧 <code>df</code> — Disk Free Space

Reports available and used space on mounted filesystems.

```bash
df
```
Displays disk usage in blocks.

```bash
df -h
```
Human-readable format (more common).

```bash
df -T
```
Shows filesystem type (e.g., ext4, xfs).

🐧 <code>mount</code> — Mount Filesystems

Mounts a filesystem (e.g., external drive, ISO, partition) to a directory.
```bash
sudo mount /dev/sdb1 /mnt
```
Mounts the partition <code>/dev/sdb1</code> to <code>/mnt</code>.
```bash
mount | grep sdb1
```
Checks if <code>/dev/sdb1</code> is mounted.

```bash
sudo mount -o ro /dev/sr0 /mnt/cdrom
```
Mounts a device as read-only.

🐧 <code>umount</code> — Unmount Filesystems

Unmounts a previously mounted filesystem.

```bash
sudo umount /mnt
```
Unmounts the device mounted at <code>/mnt</code>.

```bash
sudo umount /dev/sdb1
```
Unmounts by specifying the device instead of the directory.

Typical Workflow

1. Check connected devices:
```bash
lsblk
```
2. Mount a device:
```bash
sudo mount /dev/sdb1 /mnt
```
3. Check disk usage:
```bash
df -h /mnt
```
4. Unmount when done:
```bash
sudo umount /mnt
```
### Package managers

Package managers are tools that help you install, update, remove, and manage software packages on your system. Different distributions use different package managers.

🐧 APT (Advanced Package Tool)
> Note: Used by: Debian, Ubuntu, Linux Mint

```bash
sudo apt update
```
Updates the package list (metadata from repositories).

```bash
sudo apt upgrade
```
Upgrades all installed packages to their latest versions.
```bash
sudo apt install vim
```
Installs the <code>vim</code> package.
```bash
sudo apt remove vim
```
Removes the <code>vim</code> package (config files may remain).
```bash
sudo apt purge vim
```
Removes the <code>vim</code> package and its configuration files.

```bash
apt search nginx
```
Searches for the <code>nginx</code> package.

🐧 DNF (Dandified YUM)
> Note: Used by: Fedora, Red Hat Enterprise Linux (RHEL), CentOS (8+)

```bash
sudo dnf check-update
```
Checks for available updates.

```bash
sudo dnf update
```
Updates all packages.

```bash
sudo dnf install git
```
Installs the <code>git</code> package.

```bash
sudo dnf remove git
```
Removes the <code>git</code> package.

```bash
dnf search httpd
```
Searches for the <code>httpd</code> package.

🐧 Pacman
> Note: Used by: Arch Linux, Manjaro

```bash
sudo pacman -Syu
```
Synchronizes packages and updates the system.

```bash
sudo pacman -S neofetch
```
Installs the <code>neofetch</code> package.

```bash
sudo pacman -R neofetch
```
Removes the <code>neofetch</code> package.
```bash
pacman -Ss firefox
```
Searches for <code>firefox</code> in repositories.

```bash
pacman -Qi neofetch
```
Shows detailed information about the <code>neofetch</code> package.

Summary
📍 APT → Debian-based systems (e.g., Ubuntu, Mint)
📍 DNF → Red Hat/Fedora family
📍 Pacman → Arch-based systems

All three handle:
✅ Updating package lists
✅ Installing/removing software
✅ Upgrading systems
✅ Searching repositories
