import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function Seo() {
    const classes = useStyles();
    return (
        <div style={{marginTop:"15px"}}>
       <h2 style={{textAlign:""}}>Lateset blog posts</h2>

 <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}> Reading: IP Address </h2>
                <h2 style={{textAlign:""}}> Posted by | https://courses.lumenlearning.com/ </h2>
                   <p>
                  
       An Internet Protocol address (IP address) is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. An IP address serves two principal functions: host or network interface identification and location addressing. Its role has been characterized as follows: “A name indicates what we seek. An address indicates where it is. A route indicates how to get there.”
The designers of the Internet Protocol defined an IP address as a 32-bit number and this system, known as Internet Protocol Version 4 (IPv4), is still in use today. However, because of the growth of the Internet and the predicted depletion of available addresses, a new version of IP (IPv6), using 128 bits for the address, was developed in 1995. IPv6 was standardized as RFC 2460 in 1998, and its deployment has been ongoing since the mid-2000s.

IP addresses are usually written and displayed in human-readable notations, such as 172.16.254.1 (IPv4), and 2001:db8:0:1234:0:567:8:1 (IPv6).

The Internet Assigned Numbers Authority (IANA) manages the IP address space allocations globally and delegates five regional Internet registries (RIRs) to allocate IP address blocks to local Internet registries (Internet service providers) and other entities.

IP versions
Two versions of the Internet Protocol (IP) are in use: IP Version 4 and IP Version 6. Each version defines an IP address differently. Because of its prevalence, the generic term IP address typically still refers to the addresses defined by IPv4. The gap in version sequence between IPv4 and IPv6 resulted from the assignment of number 5 to the experimental Internet Stream Protocol in 1979, which however was never referred to as IPv5.





Decomposition of an IPv4 address from dot-decimal notation to its binary value.

In IPv4 an address consists of 32 bits which limits the address space to 4294967296 (232) possible unique addresses. IPv4 reserves some addresses for special purposes such as private networks (~18 million addresses) or multicast addresses (~270 million addresses).

IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1. Each part represents a group of 8 bits (octet) of the address. In some cases of technical writing, IPv4 addresses may be presented in various hexadecimal, octal, or binary representations.

Subnetting
In the early stages of development of the Internet Protocol, network administrators interpreted an IP address in two parts: network number portion and host number portion. The highest order octet (most significant eight bits) in an address was designated as the network number and the remaining bits were called the rest field or host identifier and were used for host numbering within a network.

This early method soon proved inadequate as additional networks developed that were independent of the existing networks already designated by a network number. In 1981, the Internet addressing specification was revised with the introduction of classful network architecture.

Classful network design allowed for a larger number of individual network assignments and fine-grained subnetwork design. The first three bits of the most significant octet of an IP address were defined as the class of the address. Three classes (A, B, and C) were defined for universal unicast addressing. Depending on the class derived, the network identification was based on octet boundary segments of the entire address. Each class used successively additional octets in the network identifier, thus reducing the possible number of hosts in the higher order classes (B and C). The following table gives an overview of this now obsolete system.

Historical classful network architecture
Class	Leading
bits	Size of network
number bit field	Size of rest
bit field	Number
of networks	Addresses
per network	Start address	End address
A	0	8	24	128 (27)	16,777,216 (224)	0.0.0.0	127.255.255.255
B	10	16	16	16,384 (214)	65,536 (216)	128.0.0.0	191.255.255.255
C	110	24	8	2,097,152 (221)	256 (28)	192.0.0.0	223.255.255.255
Classful network design served its purpose in the startup stage of the Internet, but it lacked scalability in the face of the rapid expansion of the network in the 1990s. The class system of the address space was replaced with Classless Inter-Domain Routing (CIDR) in 1993. CIDR is based on variable-length subnet masking (VLSM) to allow allocation and routing based on arbitrary-length prefixes.

Today, remnants of classful network concepts function only in a limited scope as the default configuration parameters of some network software and hardware components (e.g. netmask), and in the technical jargon used in network administrators’ discussions.




Private addresses
Early network design, when global end-to-end connectivity was envisioned for communications with all Internet hosts, intended that IP addresses be uniquely assigned to a particular computer or device. However, it was found that this was not always necessary as private networks developed and public address space needed to be conserved.

Computers not connected to the Internet, such as factory machines that communicate only with each other via TCP/IP, need not have globally unique IP addresses. Three ranges of IPv4 addresses for private networks were reserved in RFC 1918. These addresses are not routed on the Internet and thus their use need not be coordinated with an IP address registry.

Today, when needed, such private networks typically connect to the Internet through network address translation (NAT).

IANA-reserved private IPv4 network ranges
Start	End	No. of addresses
24-bit block (/8 prefix, 1 × A)	10.0.0.0	10.255.255.255	16777216
20-bit block (/12 prefix, 16 × B)	172.16.0.0	172.31.255.255	1048576
16-bit block (/16 prefix, 256 × C)	192.168.0.0	192.168.255.255	65536
Any user may use any of the reserved blocks. Typically, a network administrator will divide a block into subnets; for example, many home routers automatically use a default address range of 192.168.0.0 through 192.168.0.255 (192.168.0.0/24).

IPv4 address exhaustion
High levels of demand have decreased the supply of unallocated Internet Protocol Version 4 (IPv4) addresses available for assignment to Internet service providers and end user organizations since the 1980s. This development is referred to as IPv4 address exhaustion. IANA’s primary address pool was exhausted on 3 February 2011, when the last five blocks were allocated to the five RIRs.[5][6] APNIC was the first RIR to exhaust its regional pool on 15 April 2011, except for a small amount of address space reserved for the transition to IPv6, intended to be allocated in a restricted process.[7]

IPv6 addresses


Decomposition of an IPv6 address from hexadecimal representation to its binary value.

The rapid exhaustion of IPv4 address space prompted the Internet Engineering Task Force (IETF) to explore new technologies to expand the addressing capability in the Internet. The permanent solution was deemed to be a redesign of the Internet Protocol itself. This new generation of the Internet Protocol was eventually named Internet Protocol Version 6 (IPv6) in 1995. The address size was increased from 32 to 128 bits (16 octets), thus providing up to 2128 (approximately 3.403×1038) addresses. This is deemed sufficient for the foreseeable future.

The intent of the new design was not to provide just a sufficient quantity of addresses, but also redesign routing in the Internet by more efficient aggregation of subnetwork routing prefixes. The resulted in slower growth of routing tables in routers. The smallest possible individual allocation is a subnet for 264 hosts, which is the square of the size of the entire IPv4 Internet. At these levels, actual address utilization rates will be small on any IPv6 network segment. The new design also provides the opportunity to separate the addressing infrastructure of a network segment, i.e. the local administration of the segment’s available space, from the addressing prefix used to route traffic to and from external networks. IPv6 has facilities that automatically change the routing prefix of entire networks, should the global connectivity or the routing policy change, without requiring internal redesign or manual renumbering.

The large number of IPv6 addresses allows large blocks to be assigned for specific purposes and, where appropriate, to be aggregated for efficient routing. With a large address space, there is no need to have complex address conservation methods as used in CIDR.

All modern desktop and enterprise server operating systems include native support for the IPv6 protocol, but it is not yet widely deployed in other devices, such as residential networking routers, voice over IP (VoIP) and multimedia equipment, and network peripherals.

Private addresses
Just as IPv4 reserves addresses for private networks, blocks of addresses are set aside in IPv6. In IPv6, these are referred to as unique local addresses (ULA). RFC 4193 reserves the routing prefix fc00::/7 for this block which is divided into two /8 blocks with different implied policies. The addresses include a 40-bit pseudorandom number that minimizes the risk of address collisions if sites merge or packets are misrouted.[8]

Early practices used a different block for this purpose (fec0::), dubbed site-local addresses. However, the definition of what constituted sites remained unclear and the poorly defined addressing policy created ambiguities for routing. This address type was abandoned and must not be used in new systems.

Addresses starting with fe80:, called link-local addresses, are assigned to interfaces for communication on the attached link. The addresses are automatically generated by the operating system for each network interface. This provides instant and automatic communication between all IPv6 host on a link. This feature is required in the lower layers of IPv6 network administration, such as for the Neighbor Discovery Protocol.

Private address prefixes may not be routed on the public Internet.

IP subnetworks
IP networks may be divided into subnetworks in both IPv4 and IPv6. For this purpose, an IP address is logically recognized as consisting of two parts: the network prefix and the host identifier, or interface identifier (IPv6). The subnet mask or the CIDR prefix determines how the IP address is divided into network and host parts.

The term subnet mask is only used within IPv4. Both IP versions however use the CIDR concept and notation. In this, the IP address is followed by a slash and the number (in decimal) of bits used for the network part, also called the routing prefix. For example, an IPv4 address and its subnet mask may be 192.0.2.1 and 255.255.255.0, respectively. The CIDR notation for the same IP address and subnet is 192.0.2.1/24, because the first 24 bits of the IP address indicate the network and subnet.

IP address assignment
Internet Protocol addresses are assigned to a host either anew at the time of booting, or permanently by fixed configuration of its hardware or software. Persistent configuration is also known as using a static IP address. In contrast, in situations when the computer’s IP address is assigned newly each time, this is known as using a dynamic IP address.

Methods
Static IP addresses are manually assigned to a computer by an administrator. The exact procedure varies according to platform. This contrasts with dynamic IP addresses, which are assigned either by the computer interface or host software itself, as in Zeroconf, or assigned by a server using Dynamic Host Configuration Protocol (DHCP). Even though IP addresses assigned using DHCP may stay the same for long periods of time, they can generally change. In some cases, a network administrator may implement dynamically assigned static IP addresses. In this case, a DHCP server is used, but it is specifically configured to always assign the same IP address to a particular computer. This allows static IP addresses to be configured centrally, without having to specifically configure each computer on the network in a manual procedure.

In the absence or failure of static or stateful (DHCP) address configurations, an operating system may assign an IP address to a network interface using state-less auto-configuration methods, such as Zeroconf.

Uses of dynamic address assignment
IP addresses are most frequently assigned dynamically on LANs and broadband networks by the Dynamic Host Configuration Protocol (DHCP). They are used because it avoids the administrative burden of assigning specific static addresses to each device on a network. It also allows many devices to share limited address space on a network if only some of them will be online at a particular time. In most current desktop operating systems, dynamic IP configuration is enabled by default so that a user does not need to manually enter any settings to connect to a network with a DHCP server. DHCP is not the only technology used to assign IP addresses dynamically. Dialup and some broadband networks use dynamic address features of the Point-to-Point Protocol.

Sticky dynamic IP address
A sticky dynamic IP address is an informal term used by cable and DSL Internet access subscribers to describe a dynamically assigned IP address which seldom changes. The addresses are usually assigned with DHCP. Since the modems are usually powered on for extended periods of time, the address leases are usually set to long periods and simply renewed. If a modem is turned off and powered up again before the next expiration of the address lease, it will most likely receive the same IP address.

Address autoconfiguration
RFC 3330 defines an address block, 169.254.0.0/16, for the special use in link-local addressing for IPv4 networks. In IPv6, every interface, whether using static or dynamic address assignments, also receives a local-link address automatically in the block fe80::/10.

These addresses are only valid on the link, such as a local network segment or point-to-point connection, that a host is connected to. These addresses are not routable and like private addresses cannot be the source or destination of packets traversing the Internet.

When the link-local IPv4 address block was reserved, no standards existed for mechanisms of address autoconfiguration. Filling the void, Microsoft created an implementation that is called Automatic Private IP Addressing (APIPA). APIPA has been deployed on millions of machines and has, thus, become a de facto standard in the industry. In RFC 3927, the IETF defined a formal standard for this functionality, entitled Dynamic Configuration of IPv4 Link-Local Addresses.

Uses of static addressing
Some infrastructure situations have to use static addressing, such as when finding the Domain Name System (DNS) host that will translate domain names to IP addresses. Static addresses are also convenient, but not absolutely necessary, to locate servers inside an enterprise. An address obtained from a DNS server comes with a time to live, or caching time, after which it should be looked up to confirm that it has not changed. Even static IP addresses do change as a result of network administration (RFC 2072).



Routing
Photo at night of highway and city lightsIP addresses are classified into several classes of operational characteristics: unicast, multicast, anycast and broadcast addressing.

Unicast addressing
The most common concept of an IP address is in unicast addressing, available in both IPv4 and IPv6. It normally refers to a single sender or a single receiver, and can be used for both sending and receiving. Usually, a unicast address is associated with a single device or host, but a device or host may have more than one unicast address. Some individual PCs have several distinct unicast addresses, each for its own distinct purpose. Sending the same data to multiple unicast addresses requires the sender to send all the data many times over, once for each recipient.

Broadcast addressing
In IPv4 it is possible to send data to all possible destinations (“all-hosts broadcast”), which permits the sender to send the data only once, and all receivers receive a copy of it. In the IPv4 protocol, the address 255.255.255.255 is used for local broadcast. In addition, a directed (limited) broadcast can be made by combining the network prefix with a host suffix composed entirely of binary 1s. For example, the destination address used for a directed broadcast to devices on the 192.0.2.0/24 network is 192.0.2.255. IPv6 does not implement broadcast addressing and replaces it with multicast to the specially-defined all-nodes multicast address.

Multicast addressing
A multicast address is associated with a group of interested receivers. In IPv4, addresses 224.0.0.0 through 239.255.255.255 (the former Class D addresses) are designated as multicast addresses. IPv6 uses the address block with the prefix ff00::/8 for multicast applications. In either case, the sender sends a single datagram from its unicast address to the multicast group address and the intermediary routers take care of making copies and sending them to all receivers that have joined the corresponding multicast group.

Anycast addressing
Like broadcast and multicast, anycast is a one-to-many routing topology. However, the data stream is not transmitted to all receivers, just the one which the router decides is logically closest in the network. Anycast address is an inherent feature of only IPv6. In IPv4, anycast addressing implementations typically operate using the shortest-path metric of BGP routingand do not take into account congestion or other attributes of the path. Anycast methods are useful for global load balancing and are commonly used in distributed DNS systems.

Public addresses
A public IP address, in common parlance, is synonymous with a globally routable unicast IP address.

Both IPv4 and IPv6 define address ranges that are reserved for private networks and link-local addressing. The term public IP address often used excludes these types of addresses.

Modifications to IP addressing
IP blocking and firewalls
Firewalls perform Internet Protocol blocking to protect networks from unauthorized access. They are common on today’s Internet. They control access to networks based on the IP address of a client computer. Whether using a blacklist or a whitelist, the IP address that is blocked is the perceived IP address of the client, meaning that if the client is using a proxy server or network address translation, blocking one IP address may block many individual computers.

IP address translation
Multiple client devices can appear to share IP addresses: either because they are part of a shared hosting web server environment or because an IPv4 network address translator (NAT) or proxy server acts as an intermediary agent on behalf of its customers, in which case the real originating IP addresses might be hidden from the server receiving a request. A common practice is to have a NAT hide a large number of IP addresses in a private network. Only the “outside” interface(s) of the NAT need to have Internet-routable addresses.

Most commonly, the NAT device maps TCP or UDP port numbers on the side of the larger, public network to individual private addresses on the masqueraded network.

In small home networks, NAT functions are usually implemented in a residential gateway device, typically one marketed as a “router”. In this scenario, the computers connected to the router would have private IP addresses and the router would have a public address to communicate on the Internet. This type of router allows several computers to share one public IP address.

Diagnostic tools
Computer operating systems provide various diagnostic tools to examine their network interface and address configuration. Windows provides the command-line interface tools ipconfig and netsh and users of Unix-like systems can use ifconfig, netstat, route, lanstat, fstat, or iproute2 utilities to accomplish the task.

CC LICENSED CONTENT, SHARED PREVIOUSLY
IP Address. Provided by: Wikipedia. Located at: https://en.wikipedia.org/wiki/IP_address. License: CC BY-SA: Attribution-ShareAlike
Tiny house move. Authored by: Tammy Strobel. Located at: https://www.flickr.com/photos/rowdykittens/7944094174/. License: CC BY: Attribution
route-moutonniere Alger. Authored by: abdelkrim Sa. Located at: https://www.flickr.com/photos/algeria_imaging_pro/16554842499/. License: CC BY-NC-ND: Attribution-NonCommercial-NoDerivatives


                   </p>
                </CardContent >
                </Card >



                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  





            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Snaptube alternative</h2>
                   <p>
                    Install our app to use it like snapetube, Just click on add to home screen button and we are all set. Now you can use it like snaptube. (click on share button and select our downloader)
                   </p>
                </CardContent >
                </Card >
<Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}> Bill Gates </h2>
                   <p>
                    Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is most important.
                   </p>
                </CardContent >
            </Card >
<Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>  R. Buckminster Fuller </h2>
                   <p>
                    Humanity is acquiring all the right technology for all the wrong reasons.
                   </p>
                </CardContent >
            </Card >

<Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>  Bill Gates Fuller </h2>
                   <p>
                    The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.
                   </p>
                </CardContent >
            </Card >


            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Best Downloader</h2>
                   <p>
                    YouTube Video Downloader helps you to save Youtube videos to your device. You can choose from a variety of formats and qualities to download.
                   </p>
                </CardContent >
            </Card >

            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Download Youtube Shorts Video</h2>
                   <p>
                    Many youtube downloaders can't download videos from youtube shorts like snaptube, We can only download video from youtube shorts.
                   </p>
                </CardContent >
            </Card >
            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Easy</h2>
                   <p>
                    Simplest youtube downloader, Download different formats in just 2 clicks.
                   </p>
                </CardContent >
            </Card >

            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Safe</h2>
                   <p>
                    100% safe youtube downloader, Download videos without worries.
                   </p>
                </CardContent >
            </Card >
           
            <Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Download different Format</h2>
                   <p>
                    Download all video and audio formats conversion. You can easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO formats, etc.
                   </p>
                </CardContent >
            </Card >
        
<Card style={{marginTop:"15px"}}>
                <CardContent >
                <h2 style={{textAlign:""}}>Download fastest & easy way</h2>
                   <p>
                    Download all video and audio formats conversion. You can easily convert YouTube videos to Mp3, 3Gp, Mp4, WmA, M4A, FlV, Webm and Mo formats, etc.
                   </p>
                </CardContent >
            </Card >

            <p>By using our downloader you can easily convert YouTube videos to MP3, MP4, 3GP, WEBM, M4A files... and download them for free - this service works for computers, tablets and mobile devices. The videos are always converted in the highest available quality.</p>
        </div>
              
    )
}

export default Seo
