# How does routing work for?

Domains, routing, DNS.

Domain: a human friendly address of a website. Computers commuicate using IOP address but that is not user friendly to people but the domain is.

- The address settings live in a "zone file" on the authoritative name server for the domain.

Record type: A, CNAME, TXT, MX, AAAA (common ones)
Key of record type: Each record can have multiple entries and many values

## Registrar: A list that keeps track of TLD's (top level domains like .com, .net, .org etc)

## Name server

- Holds info about the settings of the domain.

# Routing

- How computer figures out how to get the data you want via other computers

# DNS

Network of hierarchical nameservers and lookup between them.

- Recursor: Between you and other nameservers. Assembles info from the others.
- Root NS (name servers) - 13 of them (+ their copies). They know where the TLD nameservers are.
- TLD NS - A network for each TLD. They know where the authorative NS are for a domain in that NS
- Authorative nameserver: Hold info about one specific domain. Has info on its own.

<!-- https://www.cloudflare.com/learning/dns/what-is-dns/ -->
<!-- https://www.whatsmydns.net/ -->
<!-- https://dnsspy.io/ -->
