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

- [History of Operating Systems](#history-of-operating-systems)
  - [Multithreaded and Multicore Chips](#multithreaded-and-multicore-chips)
- [Operating System Variants](#operating-system-variants)
- [Operating Systems Concepts](#operating-systems-concepts)
  - [Ontogeny Recapitulates Phylogeny](#ontogeny-recapitulates-phylogeny)
- [System Calls](#system-calls)
- [Operating System Structure](#operating-system-structure)
  - [Monotholic Systems](#monotholic-systems)
  - [Layered Systems](#layered-systems)
- [Review Questions](#review-questions)
- [Computer Hardware](#computer-hardware)
- [Introduction of Linux](#introduction)
  - [What is Linux](#what-is-Linux)
  - [History of Linux](#history-of-linux)
  - [Linux distros](#linux-distros)
  - [Linux System Architecture](#linux-system-architecture)
- [Study Plan](#study-plan)
- [Linux Commands(basics)](#linux-commands-basics)
  - [Directory](#directory)
  - [Advanced Navigation](#advanced-navigation)
  - [File Management](#file-management)
  - [Text processing](#text-processing)
  - [Permissions](#permissions)
  - [Redirects and pipes](#redirects-and-pipes)
  - [Disk usage](#disk-usage)
  - [Package managers](#package-managers)

# History of Operating Systems

1️⃣ First Generation (1940s – early 1950s) – <ins>Vacuum Tubes</ins>

**Hardware:** Plugboards and switches

**OS:** no operating systems.

Programmers configured the machine by manually wiring plugboards or flipping switches.

Input/output was done with paper tape or very primitive punched cards, but those carried data, not really “programs” in the modern sense.

<ins>Characteristic:</ins> Programs were hard-wired into the machine.

**Examples:** ENIAC (1945), UNIVAC I (1951) – purely batch processing by humans.

2️⃣ Second Generation (**mid-1950s – 1960s**) – <ins>Transistors</ins>

**Hardware:** Code was punched into cards, which were fed into a card reader.

**OS:** The OS (actually a simple “monitor program”) read jobs from punch cards one by one → batch processing. This eliminated the need to rewire the computer for every program.

Programming method: Punch cards for batch processing

Programs were written in assembly language or early high-level languages (FORTRAN, COBOL).

<ins>Characteristic:</ins> Punch cards allowed more flexible and automated program input.

**Examples:** IBM 7090 series, IBM 1401 with early monitor programs.

3️⃣ Third Generation (**1960s – 1970s**) – <ins>Integrated Circuits</ins>

**Hardware:** Integrated circuits, more reliable, faster.

**OS:** Multiprogramming and time-sharing systems emerged.

<ins>Characteristics:</ins>

🔹 OS could run multiple programs concurrently, sharing CPU and I/O.

🔹 Introduction of spooling for I/O devices (like printers).

🔹 Basic resource management – memory, CPU scheduling.

🔹 Users could interact with the computer via terminals.

**Examples:** IBM System/360 with OS/360, DEC PDP series with RT-11.

#### Spooling

**Spooling** stands for Simultaneous Peripheral Operations On-Line. It’s a technique used by operating systems to manage slow I/O devices (like printers) efficiently while letting the CPU continue processing other tasks.

🔹 How it works

Output/input data is temporarily stored in a buffer (usually on disk or memory).

The CPU doesn’t wait for the slow device to finish; it keeps executing other instructions.

The OS or a separate program then feeds the data to the device at its own pace.

4️⃣ Fourth Generation (**1970s – 1990s**) – <ins>Microprocessors</ins>

**Hardware:** Microprocessors and personal computers became common.

**OS:** PC operating systems and GUI-based OS started.

<ins>Characteristics:</ins>

🔹 Introduction of graphical user interfaces (GUI) – more user-friendly.

🔹 Support for personal computing and networking.

🔹 Advanced multiprocessing, file systems, and security features.

**Examples:**

Microsoft DOS, Windows 3.x

Apple Macintosh System Software

UNIX variants (BSD, System V)

5️⃣ Fifth Generation (**1990s – Present**) – <ins>Modern Computing</ins>

**Hardware:** Powerful microprocessors, multi-core CPUs, Internet connectivity.

**OS:** Modern operating systems supporting multimedia, networking, mobility, and distributed computing.

<ins>Characteristics:</ins>

🔹 Fully graphical OS with multitasking and multi-user support.

🔹 Support for mobile devices, cloud computing, and virtualization.

🔹 Security, scalability, and real-time capabilities are emphasized.

**Examples:**

Windows 10/11

macOS

Linux distributions (Ubuntu, Fedora)

Android, iOS (for mobile platforms)

## Review Questions

❓ For what reason an OS is a resource manager?

> Modern OS are multi-tasking. Applications have to share some resources/hardware.

🔹 An Operating System (OS) manages the computer’s resources: CPU, memory, storage, I/O devices, etc.

I🔹 n a multi-tasking environment, multiple programs run **concurrently**.

🔹 The OS allocates resources fairly, prevents conflicts, and ensures each application can access the hardware safely.

This is why we call the OS a resource manager.

❓ What is POSIX?

POSIX (Portable Operating System Interface) is a set of standards defined by IEEE.

<ins>Its goal:</ins> make programs portable across different UNIX-like operating systems.

POSIX defines:

🔹 APIs (system calls)

🔹 Command-line shells and utilities

🔹 File system behavior, process control, signals, etc.

> POSIX is the IEEE standard that defines a portable UNIX interface.

❓ Which kernel is running in Android OS?

Android OS is based on the **Linux kernel**, although the user space and application framework are customized by Google.

The Linux kernel in Android handles:

🔹 Process and memory management

🔹 File system access

🔹 Hardware drivers and device control

🔹 Networking

## Computer Hardware

The **CPU (Central Processing Unit)** is the “brain” of the computer, fetching and executing instructions in a cycle until a program finishes. Each CPU has its own instruction set (e.g., x86 vs. ARM), making them incompatible. To speed up execution, CPUs use registers to store variables, results, and instructions. Special registers, like the program counter, track the address of the next instruction.

The **Program Status Word (PSW)** register stores condition codes, CPU priority, mode (user/kernel), and control bits, playing a key role in system calls and I/O. When switching tasks, the operating system must save and restore all registers. Modern CPUs use pipelining, allowing multiple instructions to be fetched, decoded, and executed simultaneously for better performance.

A superscalar CPU has multiple execution units (e.g., integer, floating-point, Boolean) and can fetch and execute several instructions simultaneously, often out of order, with hardware ensuring correct results. CPUs also support two modes: kernel mode, with full hardware access (used by the OS), and user mode, with restricted access (used by applications or parts of embedded systems).

User programs run in user mode, with restricted instructions (no I/O or memory protection). To access OS services, they make system calls via the TRAP instruction, which switches execution to kernel mode. The OS performs the request, then returns control to the program. Other traps may occur due to hardware exceptions (e.g., divide by zero, underflow), and the OS decides whether to terminate, ignore, or pass control back to the program.

#### Multithreaded and Multicore Chips

Moore’s law observes that transistor counts on chips double about every 18 months, though physical limits will eventually stop this trend. Extra transistors enable designs like superscalar CPUs and larger caches, but diminishing returns push further innovations. One major advance is multithreading (hyperthreading), which allows a CPU to keep the state of multiple threads and switch between them rapidly. While not true parallelism, it reduces idle time and improves efficiency.

Multithreading makes each thread look like a separate CPU to the OS, which can lead to inefficient scheduling if threads share one CPU while others sit idle. Modern CPUs now use multicore designs, with many independent cores (some chips exceeding 60), requiring multiprocessor-capable operating systems. GPUs, with thousands of small cores, excel at parallel tasks (like graphics or encryption) but are poorly suited for general OS execution.

#### Memory

Memory must balance speed, size, and cost, so computers use a hierarchy. At the top are CPU registers—extremely fast but tiny (<1 KB). Below that is cache memory, which stores frequently used data in small, fast storage near the CPU. Accessing cache is quick (a few cycles), but a cache miss forces slower main memory access. Modern systems often use multiple cache levels (L1, L2, L3) with decreasing speed and increasing size.

Caching improves performance whenever some data is used more often than others. Operating systems use it for files, path lookups, and even network addresses. Key design issues include: when to add items to the cache, where to place them, which items to evict, and where to store evicted items.

In CPU caches, new items are typically added on a cache miss, with placement determined by memory address bits. Modified data is written back to its original memory location. Modern CPUs use multiple caches: small, very fast L1 caches (for instructions and data, ~16 KB each) and larger, slower L2 caches (several MB), which reduce memory access delays.

On multicore chips, caches can be shared among cores (Intel) or private to each core (AMD), each approach having trade-offs in complexity and consistency. Main memory (RAM) is the primary storage for CPU requests not in cache, typically ranging from hundreds of MB to several GB. Some systems also include non-volatile memory like ROM, which retains data without power and is used for bootloaders or low-level device control.

EEPROM and flash memory are non-volatile and rewritable, though slower than RAM, making them useful for firmware updates and portable devices. Flash is intermediate in speed between RAM and disk but wears out after many erase cycles. CMOS memory is volatile and powered by a small battery, storing system time, date, and configuration settings with minimal power consumption.

#### Disks

Magnetic disks (hard drives) are much cheaper and larger than RAM but far slower. Data is stored on spinning platters in tracks and sectors, accessed by a mechanical arm. Average access times include 1–10 ms for arm movement and 5–10 ms for rotation, with transfer rates ranging from 50 MB/s to 160 MB/s.

SSDs (Solid State Drives) store data in flash memory without moving parts, offering non-volatile storage like disks but faster access. Virtual memory allows programs larger than physical RAM by storing parts on disk and using RAM as a cache, with address translation handled by the MMU. Context switches in multiprogramming systems may require flushing caches and updating MMU mappings, which can be costly for performance.

#### I/O Devices

I/O devices consist of a controller and the device itself. The controller, often a small embedded computer, translates OS commands (e.g., read sector 11,206) into device-specific operations, handling complex details like disk geometry, bad sectors, and data assembly. The device presents a simple, standardized interface (e.g., SATA disks) so any compatible controller can operate it.

Device drivers are software that allow the OS to communicate with controllers. Each controller requires a specific driver, usually running in kernel mode. Drivers can be installed by relinking the kernel, loading at boot, or dynamically while the system runs—the last method is common for hot-pluggable devices like USB and IEEE 1394.

Device registers allow drivers to communicate with controllers, either mapped into the OS address space or accessed via a special I/O port space using IN/OUT instructions. I/O methods include busy waiting, where the driver polls the device until the operation completes, which ties up the CPU.

A second I/O method uses interrupts. The driver starts the device and returns, allowing the OS to do other work. When the device finishes, it signals the interrupt controller, which notifies the CPU. The CPU reads the device number to identify which device completed the operation, enabling efficient multitasking without busy waiting.

When an interrupt occurs, the CPU saves the program counter and PSW, switches to kernel mode, and uses the interrupt vector to find the device’s handler. The handler queries the device, completes the I/O, and returns control to the interrupted program. A third I/O method uses DMA (Direct Memory Access), allowing data transfer without CPU intervention; the DMA signals an interrupt when done. Interrupts can be temporarily disabled to handle timing conflicts, with the controller prioritizing multiple pending interrupts.

#### Buses

As CPUs and memory became faster, single-bus architectures became a bottleneck, leading to multiple buses (cache, memory, PCIe, PCI, USB, SATA, DMI) with different speeds and purposes. The PCIe bus is the main high-speed bus, using serial point-to-point connections instead of older shared parallel buses, supporting multiple lanes for parallel data transfer. PCIe is continually upgraded (e.g., 2.0 → 3.0 → 4.0) to match the speed of modern peripherals.

Legacy PCI devices connect through separate hub processors, forming a tree of buses. Modern systems use multiple buses: DDR3 for memory, PCIe for graphics, DMI for hubs, USB for peripherals, and SATA for disks. Each CPU core has dedicated and shared caches, adding additional bus traffic. USB allows hot-pluggable connections of slower I/O devices, with speeds increasing from 12 Mbps (USB 1.0) to 5 Gbps (USB 3.0).

SCSI buses provide high-performance connections for disks and other bandwidth-heavy devices, mainly in servers and workstations (up to 640 MB/s). The OS must detect and configure peripherals, a task simplified by Plug and Play, which automatically assigns interrupts and I/O addresses, replacing the old manual DIP-switch setup that often caused conflicts.

#### Booting the Computer

The boot process begins with the BIOS on the motherboard, which performs basic I/O, checks RAM and devices, and scans buses to detect peripherals. It then selects a boot device (from CMOS settings) and loads the bootloader from its first sector, which in turn loads the operating system. The OS then queries the BIOS for device configuration and loads necessary device drivers.
After loading device drivers into the kernel, the operating system initializes tables, starts background processes, and launches the login program or GUI.

## Operating System Variants

#### Mainframe Operating Systems

Mainframe operating systems handle massive I/O and multiple jobs simultaneously. They provide batch processing (non-interactive jobs), transaction processing (many small requests per second), and timesharing (multiple remote users). Examples include OS/390, though UNIX variants like Linux are increasingly replacing them.

#### Server Operaring Systems

Server operating systems run on powerful computers to serve multiple users over a network, providing services like printing, file sharing, and web hosting. Examples include Solaris, FreeBSD, Linux, and Windows Server 201x.

#### Multiprocessor Operating Systems

Multiprocessor and parallel systems connect multiple CPUs into a single system, requiring specialized operating systems for communication, connectivity, and consistency. Modern multicore personal computers also need OS support for multiple cores. Many popular OSes, including Windows and Linux, support multiprocessor environments.

#### Personal Computer Operating Systems

Personal computer operating systems focus on supporting a single user with multiprogramming, handling dozens of programs at once. They are widely used for tasks like word processing, spreadsheets, games, and Internet access. Examples include Linux, FreeBSD, Windows 7/8, and macOS.

#### Handheld Operating Systems

Handheld computers—including tablets, smartphones, and PDAs—feature multicore CPUs, sensors, and significant memory, running sophisticated operating systems. The market is dominated by Android and iOS, with a large ecosystem of third-party applications.

#### Embedded Operating Systems

Embedded systems run on the computers that control devices that are not gen-
erally thought of as computers and which do not accept user-installed software.
Typical examples are microwave ovens, TV sets, cars, DVD recorders, traditional
phones, and MP3 players. The main property which distinguishes embedded sys-
tems from handhelds is the certainty that no untrusted software will ever run on it.
You cannot download new applications to your microwave oven—all the software
is in ROM. This means that there is no need for protection between applications,
leading to design simplification. Systems such as Embedded Linux, QNX and
VxWorks are popular in this domain.

#### Sensor-Node Operating Systems

Networks of tiny sensor nodes are being deployed for numerous purposes.
These nodes are tiny computers that communicate with each other and with a base
station using wireless communication. Sensor networks are used to protect the
perimeters of buildings, guard national borders, detect fires in forests, measure
temperature and precipitation for weather forecasting, glean information about
enemy movements on battlefields, and much more.
The sensors are small battery-powered computers with built-in radios. They
have limited power and must work for long periods of time unattended outdoors,
frequently in environmentally harsh conditions. The network must be robust
enough to tolerate failures of individual nodes, which happen with ever-increasing
frequency as the batteries begin to run down.
Each sensor node is a real computer, with a CPU, RAM, ROM, and one or
more environmental sensors. It runs a small, but real operating system, usually one
that is event driven, responding to external events or making measurements period-
ically based on an internal clock. The operating system has to be small and simple
because the nodes have little RAM and battery lifetime is a major issue. Also, as
with embedded systems, all the programs are loaded in advance; users do not sud-
denly start programs they downloaded from the Internet, which makes the design
much simpler. TinyOS is a well-known operating system for a sensor node.

#### Real-time Operating Systems

Real-time operating systems (RTOS) prioritize meeting time-sensitive deadlines. Hard real-time systems guarantee actions occur at precise times (e.g., industrial process control, avionics), while soft real-time systems tolerate occasional deadline misses (e.g., digital audio, smartphones). RTOS may be implemented as tightly coupled libraries without full protection (e.g., eCos). Handheld, embedded, and real-time systems often overlap, with soft real-time aspects and preloaded software only.

#### Smart Card Operating Systems

Smart card operating systems run on tiny, credit-card-sized devices with severe CPU and memory constraints. Some handle a single function (e.g., payments), while others support Java applets, requiring multiprogramming, scheduling, and resource protection within a minimal OS.

## Operating Systems Concepts

#### Processes

Processes are programs in execution, each with an address space (executable code, data, stack) and associated resources like registers, open files, and related processes. In multiprogramming systems, the OS switches between processes, saving their state so they can resume exactly where they left off. Most OSes store process information in a process table, while the address space is called the core image.

Process-management system calls handle creation, termination, memory management, and waiting for child processes. Processes can form process trees, with parent and child processes cooperating via interprocess communication (IPC). Processes can also set timers or notifications to handle asynchronous events, such as network message timeouts.

Signals are software interrupts (like timers or hardware traps). When a signal arrives the OS saves the process’s state, runs a signal handler (e.g., to retransmit a message), then restores the process.
Users and protection: each user has a UID (and belongs to groups with GIDs). Processes inherit the UID of their creator. One special UID — the superuser/Administrator — can bypass many protection rules.

#### Address Spaces

Main memory holds executing programs. Simple OSs run one program at a time, while sophisticated OSs allow multiple programs simultaneously, using hardware-enforced protection to prevent interference. Each process has its own address space, which may exceed physical memory. Virtual memory lets the OS keep part of a process in RAM and part on disk, creating the illusion of a large contiguous address space. Managing memory and address spaces is a core OS function.

#### Files

A file system is a core OS feature that provides a consistent, device-independent way to manage data. The OS offers system calls to create, remove, read, and write files. Files are organized into directories (folders) to group related files together. Additional system calls allow creating and deleting directories, as well as adding or removing files from them. Directories can contain both files and other directories.

Both processes and files are organized hierarchically as trees, but they differ in depth, lifetime, and access control:

Process trees are shallow (usually ≤3 levels), short-lived (minutes), and only parents can control/access child processes.

File/directory trees are often deeper (4–5+ levels), long-lived (years), and can be accessed by a wider group beyond the owner.

Files are identified by their path names:

Absolute path: starts from the root directory / (e.g., /Faculty/Prof.Brown/Courses/CS101).

Relative path: starts from the process’s current working directory (e.g., Courses/CS101 if the working directory is /Faculty/Prof.Brown).

Processes can change their current working directory via a system call.

File opening and permissions:

Before a file can be read or written, it must be opened.

The OS checks permissions; if allowed, it returns a file descriptor (a small integer) for subsequent operations.

If access is denied, an error code is returned.

Mounted file systems in UNIX:

UNIX allows different file systems (e.g., hard disk, CD-ROM, USB drive) to be attached (“mounted”) into a single directory tree.

Before mounting: separate file systems cannot be accessed together.

After mounting: the external file system appears under a chosen directory in the root tree, allowing unified access (e.g., files on a CD-ROM mounted at /b can be accessed as /b/x and /b/y).

Mounting usually occurs on empty directories, because existing files at the mount point become inaccessible while the external system is mounted.

Multiple disks can all be mounted into a single tree, maintaining device independence.

Special files in UNIX:

UNIX treats I/O devices as files so they can be read/written with the same system calls as regular files.

Two kinds of special files:

Block special files – for devices with randomly addressable blocks (e.g., disks). Programs can read/write specific blocks directly.

Character special files – for devices that handle character streams (e.g., printers, modems).

Special files are conventionally located in the /dev directory (e.g., /dev/lp for the printer).

Pipes:

Pipes are pseudofiles used to connect processes for communication.

One process writes to the pipe as if it were an output file; another reads from it like an input file.

The implementation of pipes is similar to files, making interprocess communication look like ordinary file I/O.

The only way to detect that a file is actually a pipe is via a special system call.

#### Input/Output

I/O in Computers and Operating Systems:

All computers need input devices (keyboards, sensors, etc.) and output devices (monitors, printers, etc.) to interact with users.

The operating system is responsible for managing these devices.

Every OS includes an I/O subsystem to handle this management.

Some I/O software is device-independent, meaning it works with many devices in the same way.

Other parts, such as device drivers, are device-specific, tailored to control particular hardware.

#### Protection

Operating System Security

Computers store sensitive information, such as emails, business plans, and tax returns.

The operating system manages security to ensure that only authorized users can access files and resources.

Example – UNIX File Permissions:

Each file has a 9-bit protection code, divided into three 3-bit fields:

Owner – permissions for the file’s owner

Group – permissions for users in the owner’s group

Others – permissions for everyone else

Each 3-bit field uses the rwx convention:

r = read

w = write

x = execute

Example: rwxr-x--x

Owner: read, write, execute

Group: read, execute

Others: execute only

For directories, x means search permission, and - indicates the absence of a permission.

Additional Security Considerations:

Protecting the system from unauthorized users, viruses, and other threats is also a key responsibility of the operating system.

#### The Shell

The Operating System vs. Programs That Use It

Operating system (OS): The code that executes system calls and manages hardware and resources.

Programs like editors, compilers, linkers, and shells are not part of the OS, even though they heavily use OS features.

Example – The UNIX Shell

The shell (e.g., sh, csh, ksh, bash) is a command interpreter that serves as the main interface between the user and the OS (unless using a GUI).

When a user logs in:

The shell starts with the terminal as standard input and output.

It displays a prompt (e.g., $) to signal it is ready for commands.

When the user types a command, e.g., date:

The shell creates a child process to run the program.

The shell waits for the child process to finish.

Once finished, the shell displays the prompt again for the next command.

1. Redirection of Input and Output

Standard output (stdout) redirection:

```bash
date > file
```

ends the output of the date command into the file file instead of the terminal.

Standard input (stdin) redirection:

```bash
sort < file1 > file2
```

Reads input from file1, sorts it, and writes the output to file2.

2. Pipes

Using output from one program as input to another:

```bash
cat file1 file2 file3 | sort > /dev/lp
```

cat concatenates three files.

sort organizes all lines alphabetically.

Output is sent to /dev/lp, usually the printer.

3. Background Execution

Ampersand (&) runs a command in the background:

```bash
cat file1 file2 file3 | sort > /dev/lp &
```

The shell immediately returns a prompt.

User can continue other work while the command runs.

4. Graphical User Interfaces (GUIs)

GUI is just a program running on top of the OS, similar to a shell.

Linux: Users can choose GUIs like Gnome or KDE, or even run no GUI (terminal only).

Windows: The default GUI (Explorer) can be replaced by another program, though few users do this.

#### Ontogeny Recapitulates Phylogeny

Key Ideas:

Haeckel’s concept:

Ontogeny recapitulates phylogeny → Embryo development (ontogeny) mirrors the evolutionary stages of the species (phylogeny).

Example (simplified/incorrect for humans): a human embryo passes through “fish” and “pig” stages before becoming human.

Analogy to computers:

Each new class of computers (mainframe → minicomputer → personal computer → handheld → embedded → smart card) seems to repeat stages its ancestors went through, in both hardware and software.

Innovations build on what came before, much like evolution.

Technology drives adoption:

Just as the Romans lacked cars because the technology didn’t exist, computers exist because we can now build them cheaply, not because there was a long-standing human desire.

Technological capability shapes what systems appear and how they evolve.

Takeaway:
The evolution of computing isn’t just market demand—it’s largely technology-driven, and each new type of system often retraces steps its predecessors took, incorporating lessons and limitations along the way.

Key Points:

Technology can make ideas obsolete, then revive them:

Unlike biology, where extinction is permanent, in computing an “extinct” idea may reappear if technological conditions change.

Example: Cache memory appeared when CPUs became faster than memory, might vanish if memory surpasses CPU, then reappear if CPU speeds outpace memory again.

Obsolete concepts still matter:

Understanding why an idea became obsolete helps predict if it might become useful again in the future.

Execution paradigms illustrate the pendulum effect:

Early computers: hardwired instruction sets → fastest but inflexible.

Microprogramming (IBM 360): interpreted “hardware instructions” → flexible, made hardwired execution obsolete.

RISC computers: direct execution faster → microprogramming becomes obsolete.

Modern interpretation (Java applets): network delays make execution speed less critical → interpretation resurges.

Takeaway:
Computing ideas are not permanently extinct; they resurface depending on relative performance trade-offs in hardware and software. Understanding the “why” behind obsolescence is crucial to predicting future relevance.

#### Large Memories

Key Points:

Memory constraints drove low-level programming:

IBM 7090/7094 (late 1950s–1964): ~128 KB memory → assembly language for both programs and operating systems to conserve memory.

High-level languages emerged when resources improved:

FORTRAN, COBOL compilers became good → assembly language declined.

Minicomputers (e.g., PDP-1, 4 KB memory) → assembly language resurged due to tight memory.

Microcomputers and embedded systems repeated this pattern:

Early 1980s microcomputers: 4 KB memory → assembly language dominant.

Embedded computers (same CPUs as microcomputers) → assembly used initially.

Modern trend toward high-level languages as resources grow:

Personal computers: abundant memory → C, C++, Java, etc.

Smart cards: small memory → sometimes Java interpreted, not compiled.

Takeaway:
The hardware limits of memory and CPU power repeatedly dictate the software approach. When resources are scarce, low-level programming dominates; when resources expand, high-level languages flourish. This cyclical pattern mirrors the earlier discussion about obsolescence and revival of ideas.

#### Protection Hardware

Key Points:

Early mainframes (IBM 7090/7094):

No protection hardware → monoprogramming only.

A buggy program could crash the OS or entire machine.

IBM 360:

Introduced primitive protection hardware → allowed multiprogramming (multiple programs in memory, taking turns running).

Monoprogramming became obsolete… temporarily.

Early minicomputers (PDP-1, PDP-8):

No protection hardware → back to monoprogramming.

Later, PDP-11 added protection hardware → multiprogramming and eventually UNIX.

Early microcomputers (Intel 8080):

Again, no protection hardware → single-program operation.

Multiprogramming possible only with Intel 80286 and newer CPUs.

Embedded systems today:

Often lack protection hardware, so typically run only one program at a time.

Takeaway:

Just like the earlier memory constraints affecting programming languages, the presence or absence of hardware protection repeatedly dictated whether multiprogramming could be supported. Concepts like multiprogramming become “obsolete” and then resurface depending on hardware evolution.

Key Points:

Mainframes:

Initially: No protection hardware → single-program operation, simple OS.

Later: Added protection hardware → multiprogramming → full timesharing.

Minicomputers:

Initially: No protection hardware → ran one program at a time.

Later: Gained protection hardware → ran multiple programs.

Microcomputers (early PCs):

Initially: Very small memory (≈4 KB) → could not support high-level languages or multiprogramming.

Later: Memory and hardware improvements → multiprogramming, modern OS features.

Handhelds and smart cards:

Followed the same pattern → started simple, gradually gained more advanced OS capabilities as hardware improved.

Underlying Principle:

Software development is dictated by technology.

Limitations in memory or protection hardware forced simpler OS design; improvements enabled more complex functionality.

Takeaway:

The evolution of operating systems is cyclical and technology-driven. Hardware dictates what software can do, and as hardware evolves, software features like multiprogramming, high-level languages, and timesharing are reincarnated across generations of computing devices.

#### Disks

Key Points:

Early Mainframes (1950s–1960s):

Primarily magnetic-tape based: programs read from tape, compiled, run, and results written back to tape.

No disks, no file system initially.

IBM RAMAC (1956): First hard disk, 5 million 7-bit characters (~medium-res photo), occupied ~4 m², very expensive (~$35,000/year).

Led to primitive file systems.

CDC 6600 (1964):

Fastest computer of its time.

Allowed “permanent files” with user-assigned names, creating a single-level directory.

Mainframes eventually evolved to complex hierarchical file systems, e.g., MULTICS.

Minicomputers (e.g., PDP-11, 1970):

Standard disk: RK05, 2.5 MB, compact compared to RAMAC.

Initially had single-level directories.

Microcomputers (early PCs, CP/M):

Floppy disks, single-level directory system.

File system concepts were still simple, mirroring early minicomputers.

Takeaway:

File systems evolved alongside storage technology: from no disks → single-level directories → hierarchical directories.

Early computers were constrained by capacity and cost, limiting the complexity of storage management.

#### Virtual memory

Key Points:

Virtual Memory:

Allows programs larger than physical RAM to run by swapping pages between RAM and disk.

First appeared on mainframes, then adopted by minicomputers and later microcomputers.

Enabled dynamic linking: programs could load libraries at runtime instead of compiling them in.

MULTICS was the first system to support this feature.

Recycling of Ideas:

Many concepts originate in one context, become obsolete, then reappear in new contexts:

Assembly language → revived in early microcomputers

Monoprogramming → reappears in tiny embedded systems

Single-level directories → reused in early PCs

This demonstrates the technological pendulum: ideas are dependent on hardware capabilities and system requirements.

Broader Insight:

Studying older concepts and algorithms is valuable because they may resurface in modern contexts like embedded systems or smart cards.

Essentially, virtual memory is an example of a concept that started in high-end systems and trickled down over time, while older “obsolete” ideas often re-emerge in constrained environments.

## System Calls

1. What Are System Calls?

A system call (syscall) is a controlled entry point into the operating system kernel. It allows a user program to request a service from the OS that cannot be performed in user mode, such as accessing hardware, creating processes, or performing I/O.

Key idea: User programs cannot directly access hardware for safety and protection; they must go through the OS using system calls.

2. Why System Calls Exist

Protection: Prevents user programs from crashing the system or accessing other processes’ memory.

Abstraction: Hides hardware complexity (e.g., disk layout, device registers) behind clean APIs.

Resource management: Allows the OS to manage CPU, memory, and I/O devices efficiently.

3. How System Calls Work

User program executes a library function (e.g., open(), read())

Library code triggers a software interrupt or trap

CPU switches to kernel mode

OS executes the requested service

Result is returned to the user program

CPU switches back to user mode

Think of it as a door between user mode and kernel mode, controlled and secure.

4. Categories of System Calls

System calls can be broadly classified into several categories:

a. Process Control

Purpose: Manage processes (creation, execution, termination, scheduling).

Examples:

fork() → create a new process

exec() → replace process memory with a new program

exit() → terminate a process

wait() → wait for a child process to finish

b. File Management

Purpose: Access, create, manipulate files and directories.

Examples:

open(), close() → open/close a file

read(), write() → read from/write to a file

unlink() → delete a file

mkdir(), rmdir() → create/remove directories

c. Device Management

Purpose: Communicate with I/O devices through device drivers.

Examples:

ioctl() → device-specific operations

read(), write() → on special files representing devices

d. Information Maintenance

Purpose: Obtain system or process information, or modify it.

Examples:

getpid() → get process ID

alarm() → set a timer

time() → get current time

e. Communication

Purpose: Enable interprocess communication (IPC).

Examples:

pipe() → create a pipe between processes

shmget() → allocate shared memory

msgget() → create message queues

socket() → network communication

5. Mechanism Details

System Call Invocation: Usually via a software interrupt, trap, or a special CPU instruction (syscall in x86-64).

Kernel Mode: System calls execute in privileged kernel mode, which can directly access hardware.

Return Values: Typically indicate success or failure, with -1 or an error code on failure.

Libraries: C standard library (libc) often wraps system calls for easier usage (e.g., printf() calls write() internally).

6. Examples

```c
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main() {
    int fd = open("file.txt", O_RDONLY);  // system call
    if (fd == -1) {
        perror("open failed");
        return 1;
    }

    char buffer[100];
    ssize_t n = read(fd, buffer, 100);   // system call
    write(1, buffer, n);                 // system call (stdout)
    close(fd);                            // system call

    return 0;
}
```

Here, open(), read(), write(), close() are direct system calls handled by the kernel.

7. Important Concepts Related to System Calls

Blocking vs Non-blocking: Some system calls may block the process until completion (e.g., read()), others return immediately (e.g., fcntl() with O_NONBLOCK).

Signals and Interrupts: Certain system calls can be interrupted by signals (e.g., timers, I/O events).

File Descriptors: Numeric handles returned by the OS to identify files, sockets, or devices.

Context Switching: When a syscall occurs, CPU switches from user to kernel mode, saving the process state.

8. Practical Considerations

System calls are slower than library functions because of the user-to-kernel mode switch.

Minimizing syscalls in performance-critical applications is often desirable.

Security: Only kernel can enforce access permissions, so system calls are the gatekeepers for protected resources.

# Introduction of Linux

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

## Operating System Structure

#### Monotholic Systems

1. Definition

A monolithic OS is one in which the entire operating system runs as a single program in kernel mode. All the services—process management, memory management, file systems, device drivers, and system calls—are compiled into one large executable.

Key idea: Everything lives in kernel space and can directly call any other part of the OS.

2. Structure and Organization

The OS is a collection of procedures (functions or modules).

Each procedure can freely call any other procedure if needed.

No inherent restrictions on access or communication between procedures.

Implication:

Efficiency: Calls are simple and fast since they are just normal function calls within the same address space.

Complexity: Thousands of procedures calling each other can make the system hard to understand, maintain, or extend.

3. Compilation and Linking

Compile each procedure (or file) into object code.

Link all object files into a single kernel executable.

The OS now runs as one big binary in kernel mode.

Note: Unlike modular or microkernel approaches, there’s no strict encapsulation; every function can access all data and functions of the OS.

4. Pros of Monolithic Design

High performance: Direct function calls within a single address space are faster than inter-process communication.

Simple execution model: Only one program (the OS kernel) is running in kernel mode.

Full access to hardware: Since everything is in kernel mode, all procedures can manipulate hardware or resources directly.

5. Cons of Monolithic Design

Reliability: A bug in any procedure can crash the entire OS.

Maintainability: Hard to isolate, modify, or debug parts of the OS.

Lack of information hiding: All procedures can access all other procedures and internal data structures.

6. Examples

UNIX (traditional versions like early BSD)

Linux kernel

MS-DOS (early versions)

Summary Table

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Definition</td>
      <td>Entire OS runs as a single program in kernel mode, with all services compiled into one executable.</td>
    </tr>
    <tr>
      <td>Structure</td>
      <td>Procedures can freely call each other without restrictions, leading to high efficiency but complexity.</td>
    </tr>
    <tr>
      <td>Advantages</td>
      <td>High performance, simple execution model, full hardware access.</td>
    </tr>
    <tr>
      <td>Disadvantages</td>
      <td>Low reliability, difficult to maintain, lack of modularity.</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>UNIX, Linux kernel, MS-DOS.</td>
    </tr>
  </tbody>
</table>

Key Insight: The monolithic design trades safety and modularity for speed and simplicity. Modern operating systems (like Linux) mitigate some of the risks with modular kernels, where some components can be loaded/unloaded dynamically, but the basic monolithic principle still applies.

**System Calls in Monolithic Systems**

Even in a monolithic OS, there is structure behind how user programs access OS services.

**How a system call works**

User program sets up parameters for the system call (usually on the stack or in registers).

Trap instruction is executed.

This switches the CPU from user mode to kernel mode.

It also transfers control to a predefined entry point in the OS.

Operating system fetches parameters and identifies which system call was requested.

System call table lookup:

The OS has a table of pointers, where each entry corresponds to a system call.

Slot k points to the procedure that implements system call k.

The service procedure executes, performs the operation, and returns control to the user program.

> This mechanism provides a controlled way for user programs to access
> privileged OS functions safely, even in a monolithic kernel.

Suggested OS Structure

Even though the kernel is monolithic, it can be organized into layers or components:

Main program / dispatcher

Receives requests (system calls) and invokes the correct service procedure.

Service procedures

One for each system call.

Example: read(), write(), fork(), exec() in UNIX.

Utility procedures

Helper routines used by many service procedures.

Example: routines for copying data between user and kernel memory, managing common data structures, or validating parameters.

Diagrammatically:

```bash
User Program
      |
  Trap Instruction
      |
  Main OS Dispatcher
      |
 -------------------
| Service Procedures |
 -------------------
      |
 -------------------
| Utility Procedures |
 -------------------
```

**Loadable Extensions**

Many monolithic OSes still support dynamically loadable modules, which lets you extend functionality without rebooting the OS:

UNIX/Linux: Shared libraries (.so files)

Windows: Dynamic-Link Libraries (.dll files)

These often include:

Device drivers

File system modules

Network protocols

Example: C:\Windows\system32 on Windows contains thousands of .dll files that the OS and programs can use dynamically.

**Key Points to Remember**

System calls are the interface between user programs and kernel services.

Trap instruction ensures safety by switching to kernel mode.

Monolithic OS can still be modular internally, with service procedures and utility routines.

Loadable extensions provide flexibility without redesigning or rebooting the kernel.

#### Layered Systems

**Concept of Layered OS**

A layered operating system is structured as a hierarchy of layers, each built upon the layer below it:

Lowest layer: Handles the most fundamental functions, usually very close to the hardware.

Higher layers: Use services provided by the layers below, adding more sophisticated functionality.

Each layer only interacts directly with the layer immediately beneath it.

Advantages:

Easier to understand, design, and debug, since each layer is relatively independent.

Crashes or bugs in higher layers are less likely to corrupt lower layers.

Clear information hiding: higher layers do not need to know the internal workings of lower layers.

Disadvantages:

Slightly less efficient than monolithic systems, because service calls may have to pass through multiple layers.

**The THE System**

Developed by E. W. Dijkstra (1968) at Technische Hogeschool Eindhoven.

Implemented on an Electrologica X8 computer with 32K of 27-bit words.

It was a simple batch system, but very influential for OS design.

Layer Structure of THE System

The THE system had 6 layers:

Layer 0 – CPU Scheduling and Multiprogramming

Allocates the processor among processes.

Handles interrupts and timer expiration.

Provides basic multiprogramming, so that higher layers can run sequential processes without worrying about concurrent execution.

Layers 1–5 – Higher-Level Services

Sequential processes built on top of layer 0.

Each layer provided more sophisticated services, such as:

File management

I/O device management

Interprocess communication

User interface and job control

Each layer only interacts with the layer immediately below it.

Layered design ensures modularity, abstraction, and a clear separation of concerns.

**Key Takeaways**

Layered OSes generalize the idea of modularity in monolithic systems.

Each layer offers a well-defined interface to the layer above.

THE system demonstrated that complex OS functionality could be structured in layers, simplifying development and debugging.

Modern OS designs often combine monolithic kernels with layered concepts to balance efficiency and modularity.

```bash
Layer 5: User-level job control and batch processing
        - Provides interface for submitting and controlling jobs
        - Uses services from lower layers for I/O and file access

Layer 4: I/O management
        - Handles input/output devices
        - Provides abstraction to upper layers

Layer 3: Interprocess communication
        - Manages communication between processes
        - Ensures synchronization and data transfer

Layer 2: Memory management
        - Allocates and protects memory for processes
        - Provides virtual memory abstractions

Layer 1: Device drivers and low-level routines
        - Provides basic access to hardware devices
        - Called by higher-level services

Layer 0: CPU scheduling and multiprogramming
        - Allocates CPU to processes
        - Handles interrupts and timer events
        - Provides basic multiprogramming capabilities
```

**How it works:**

Each layer uses only the services of the layer directly below it.

Layer 0 is closest to the hardware; Layer 5 is closest to the user.

This design provides modularity, abstraction, and better maintainability compared to a purely monolithic system.

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
