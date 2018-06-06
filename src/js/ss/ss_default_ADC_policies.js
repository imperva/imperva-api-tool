var defaultADCPolicies = {
	"Adobe ColdFusion Administrator Access Restriction":true,
	"Anti Google Hacking - 1":true,
	"Anti Google Hacking - 2":true,
	"Apache Expect Header XSS":true,
	"Appended Content Type Evasion":true,
	"ATO - Credential Stuffing - Low Risk API":true,
	"ATO - Credential Stuffing - Medium Risk API":true,
	"ATO - Credential Stuffing + Bot Enforcement":true,
	"ATO - Credential Stuffing Enforcement":true,
	"ATO - Device Intelligence + Anonymous Proxy Enforcement":true,
	"ATO - Device Intelligence + TOR IP Enforcement":true,
	"ATO - Device Intelligence for failed logins":true,
	"ATO - Device Intelligence for successful logins":true,
	"ATO - Device Intelligence High Risk Login Enforcement":true,
	"ATO - Device Intelligence Profiling":true,
	"ATO - Dictionary Attack + Bot Enforcement":true,
	"ATO - Dictionary Attack Enforcement":true,
	"ATO - Privileged Account Brute force + Bot Enforcement":true,
	"ATO - Privileged Account Brute force Enforcement":true,
	"Automated Site Reconnaissance/Access":true,
	"Automated Vulnerability Scanning":true,
	"BID-51086: Websense Triton Remote Command Execution":true,
	"BitTorrent DDoS":true,
	"Cross Site Request Forgery":true,
	"CVE-2010-2227: Apache Tomcat Invalid TE":true,
	"CVE-2010-3332: ASP Parameter Padding Oracle Brute Force":true,
	"CVE-2010-3332: ASP URL Padding Oracle Brute Force":true,
	"CVE-2010-4437: Oracle WebLogic Session Fixation":true,
	"CVE-2011-3190: Apache Tomcat AJP Message Injection Authentication Bypass":true,
	"CVE-2011-3192: Apache httpd Range Remote DOS":true,
	"CVE-2011-3368: Apache Malformed URI":true,
	"CVE-2011-3829: Support Incident Tracker Path Disclosure(and others)":true,
	"CVE-2011-3833: Support Incident Tracker File Upload PHP CE(and others)":true,
	"CVE-2011-4898: WordPress wp-admin/setup-config.php MySQL Credentials Disclosure(and others)":true,
	"CVE-2011-5057: Apache Struts Session Tampering Security Bypass Vulnerability":true,
	"CVE-2012-0053: Apache httpd Cookie Exposure":true,
	"CVE-2012-0297: Symantec Web Gateway ipchange.php Command Injection":true,
	"CVE-2012-0694: SugarCRM Unserialize PHP Code Execution":true,
	"CVE-2012-0911: Tiki Wiki CMS Groupware unserialize PHP CE":true,
	"CVE-2012-1670: PHP Grade Book Unauthenticated SQL Database Export":true,
	"CVE-2012-1823: PHP-CGI Query String Parameter Injection":true,
	"CVE-2012-1902: phpMyAdmin show config errors.php Path Disclosure":true,
	"CVE-2012-4255: MySQLDumper Multiple Script Direct Request Information Disclosure (and others)":true,
	"CVE-2012-4926: ImgPals Photo Host Admin Account Disactivation":true,
	"CVE-2012-5243: Banana Dance Information Disclosure":true,
	"CVE-2013-0135: PHP Address Book SQL Injection in Cookie":true,
	"CVE-2013-1668: CosCMS Remote Command Execution":true,
	"CVE-2013-1807: PHP-Fusion File Access":true,
	"CVE-2013-2143: Katello Input Validation":true,
	"CVE-2013-2301: OrbiTeam BCSW Information Disclosure":true,
	"CVE-2013-3350: Adobe ColdFusion Websocket Upgrade":true,
	"CVE-2013-4221: Restlet XML Deserialization":true,
	"CVE-2013-4727: Acora CMS Admin Access":true,
	"CVE-2013-4822: HP Code Execution":true,
	"CVE-2013-5760: QNAP Photo Station Access":true,
	"CVE-2013-6041: Webuzo Remote Command Execution":true,
	"CVE-2013-6227: Zoho plugin in Pydio File Upload":true,
	"CVE-2013-6492: Piranha Authentication Bypass":true,
	"CVE-2014-0095: Apache Tomcat DoS - Deprecated":true,
	"CVE-2014-0099: Apache Tomcat Request Smuggling":true,
	"CVE-2014-100009: Wordpress JS MultiHotel Full Path Disclosure":true,
	"CVE-2014-1610:MediaWiki Remote Command Execution":true,
	"CVE-2014-1637: CSSMS Disclose DB Backup":true,
	"CVE-2014-1683: SkyBlueCanvas Remote Command Execution":true,
	"CVE-2014-1908: WordPress Information Disclosure in Error Message - 1":true,
	"CVE-2014-1908: WordPress Information Disclosure in Error Message - 2":true,
	"CVE-2014-2268: vTiger Remote Command Execution":true,
	"CVE-2014-3139: Unitrends Authentication Bypass":true,
	"CVE-2014-3445: HandsomeWeb Unathenticated Backup":true,
	"CVE-2014-4725: WordPress MailPoet Unauthorized File Upload":true,
	"CVE-2014-4942: EasyCart Information Disclosure":true,
	"CVE-2014-6389: PHPCompta Remote Command Execution":true,
	"CVE-2014-8072: OpenMRS Admin Access":true,
	"CVE-2014-8723: GetSimple CMS Path Disclosure":true,
	"CVE-2014-8749: WordPress BulletProof Administrator Access Restriction":true,
	"CVE-2014-8949: WordPress Remote Command Execution":true,
	"CVE-2014-9177: Wordpress HTML5 MP3 Player Full Path Disclosure":true,
	"CVE-2014-9180: Eleanor CMS Open Redirect":true,
	"CVE-2014-9343: Snowfox CMS Open Redirect":true,
	"CVE-2014-9579: VDG Security Sense Configuration Disclosure":true,
	"CVE-2014-9611: Netsweeper Users And Privileges Management":true,
	"CVE-2015-1000008: WordPress MP3-jPlayer Plugin Path Disclosure":true,
	"CVE-2015-1371: FerretCMS File Upload":true,
	"CVE-2015-1456: Fortinet Admin Access":true,
	"CVE-2015-1648: Microsoft IIS Information Disclosure":true,
	"CVE-2015-2791: WordPress Delete Arbitrary Posts":true,
	"CVE-2015-2857: Accellion File Transfer Remote Code Execution":true,
	"CVE-2015-3271: Apache Tika Remote File Disclosure":true,
	"CVE-2015-4134: phpwind Open Redirect":true,
	"CVE-2015-4153: WordPress Local File Inclusion":true,
	"CVE-2015-6000: vTiger CRM Unauthorized File Upload":true,
	"CVE-2015-6928: CubeCart Information Disclosure":true,
	"CVE-2015-7339: JCE Joomla Unauthorized File Upload":true,
	"CVE-2015-7527: Cool Video Gallery Plugin Wordpress Remote Command":true,
	"CVE-2016-4010: Magento PHP code execution":true,
	"CVE-2016-6293: International Components for Unicode - DOS":true,
	"CVE-2016-6483: vBulletin SSRF":true,
	"CVE-2017-6070: CMS Made Simple Authorization Bypass Vulnerabilities":true,
	"CVE-2017-6526: DnaLIMS Authentication Bypass Vulnerabilities":true,
	"CVE-2017-8295: WordPress Unauthorized Password Reset":true,
	"Data Leakage - American Express Credit Card Numbers":true,
	"Data Leakage - Application Source Code":true,
	"Data Leakage - Developer Comments":true,
	"Data Leakage - Diner's Club / Carte Blanche Credit Card Numbers":true,
	"Data Leakage - Discover Credit Card Numbers":true,
	"Data Leakage - enRoute Credit Card Numbers":true,
	"Data Leakage - JCB Credit Card Numbers":true,
	"Data Leakage - MasterCard Credit Card Numbers":true,
	"Data Leakage - U.S Social Security Number":true,
	"Data Leakage - Visa, Long Credit Card Numbers":true,
	"Data Leakage - Visa, Short Credit Card Numbers":true,
	"Direct changes to data dictionary":true,
	"Directory Browsing Detection":true,
	"Directory Traversal (In Cookies/Parameters Value)":true,
	"Directory Traversal (In URL)":true,
	"Directory Traversal (In URL) - Basic Rule":true,
	"DoS Mitigation - Resource Response Time (Template Policy)":true,
	"DoS Mitigation - Resource Size (Template Policy)":true,
	"EBS - Suspected Access by a Non-Default User":true,
	"EBS - Suspected Activity in User Admin Tables":true,
	"EBS - Suspected Connection by a Default User":true,
	"EBS PCI - Unauthorized access to credit card no.":true,
	"EBS PCI - Unauthorized access to credit cardholder":true,
	"EBS PCI - Violation to credit card number table":true,
	"EBS PCI - Violation to credit cardholder":true,
	"eMail Hoarding":true,
	"Failed Login Attempts":true,
	"File - Access Outside of Business Hours":true,
	"File - All Access to PCI Data":true,
	"File - Data Modification Outside of Business Hours":true,
	"File - Ransomware Mitigation: Multiple Rename Operations":true,
	"File Download Injection":true,
	"File PCI â€“ Privileged Users Access":true,
	"FISMA - Unauthorized data access":true,
	"FISMA - Unauthorized data modification":true,
	"Fullwidth/Halfwidth Unicode Decoding":true,
	"Hazardous Content Types":true,
	"Hazardous HTTP request methods":true,
	"Hazardous HTTP request methods - Deprecated":true,
	"HIPAA - Attempt to backup database":true,
	"HIPAA - Unauthorized data access":true,
	"HIPAA - Unauthorized data modification":true,
	"HTML Injection":true,
	"HTTP Response Splitting Vulnerability":true,
	"HTTP/2 Protocol Policy":true,
	"IE Discussion Bar- Access to Internal Information":true,
	"IIS Code Upload":true,
	"INJ-18148: WebCalendar Pre-Auth Remote Code Injection":true,
	"INJ-18164: OpenCart Path Disclosure":true,
	"INJ-18742: Discuz Information Disclosure":true,
	"Invalid Content Encoding Header in Post Request":true,
	"Java Double Precision Non Convergence DoS":true,
	"Magento Unauthorized File Upload":true,
	"Malformed HTTP Attack (Non compatible HTTP Results Error code)":true,
	"Malicious File Upload":true,
	"MSSQL Data Leakage through Errors":true,
	"Oracle - Attempt to Create Wrapped Object":true,
	"Oracle - Attempt to Execute Database Export":true,
	"Oracle - PL/SQL Code Tampering":true,
	"Oracle Reports Unauthorized Access Restriction":true,
	"OS Command Injection via Cookie":true,
	"OS Commands injection":true,
	"PCI - Attempted users and privileges management privileged operations by non-privileged user":true,
	"PCI - Existence alerts of Track data":true,
	"PCI - Failed privileged operations on users and privileges management":true,
	"PCI - Unauthorized access to cardholder information":true,
	"PCI - Usage of default user accounts":true,
	"PCI - Violation to a cardholder information table":true,
	"PCI - Violations caused by admin":true,
	"PCI - Violations of privileged commands":true,
	"PCI - Violations to a cardholder information table":true,
	"PeopleSoft - Access to PeopleSoft Schema":true,
	"PeopleSoft - Changes by Non-Default Applications":true,
	"PeopleSoft - Changes by Non-Default Users":true,
	"PeopleSoft - Changes from Unknown IPs":true,
	"PeopleSoft - Changes to Login Tables":true,
	"PeopleSoft - Changes to User Admin Tables":true,
	"PeopleSoft - DB Management by Non-Default Apps":true,
	"PeopleSoft - DB Management by Non-Default Users":true,
	"PeopleSoft - DB Management from Unknown IPs":true,
	"PeopleSoft - Query of Identification Info Columns":true,
	"PeopleSoft - Query of Payment Card Info Columns":true,
	"PeopleSoft - Query of Personal Info Columns":true,
	"PeopleSoft - Querying Tables by Non-Default Users":true,
	"PeopleSoft - Querying Tables from Unknown IPs":true,
	"PeopleSoft - Querying with Unknown Application":true,
	"PHP Double Precision Non Convergence DoS":true,
	"Plain Vanilla Scanner Detection":true,
	"Privacy Violation - Credit Card Number Insertion":true,
	"Privacy Violation - Credit Card Number Insertion by Internal IP Address":true,
	"Privacy Violation - Credit Card Number Insertion by non Internal IP Address":true,
	"Recommended Policy for Database Applications - Legacy":true,
	"Recommended Policy for General Applications - Legacy":true,
	"Recommended Policy for Web Applications - Legacy":true,
	"Recommended Signatures Policy for Database Applications":true,
	"Recommended Signatures Policy for General Applications":true,
	"Recommended Signatures Policy for SharePoint Applications":true,
	"Recommended Signatures Policy for Web Applications":true,
	"SAP - Querying of Tables by Non-Default User":true,
	"SAP - Querying of Tables with a Non-Default Application":true,
	"SAP - Suspected Access to Tables with a Non-Default Application":true,
	"SAP - Suspected Activity in Accounting Documents Tables":true,
	"SAP - Suspected Activity in Confidential Financial Data and Vendor Tables":true,
	"SAP - Suspected Activity in Data Dictionary Tables":true,
	"SAP - Suspected Activity in Personal Info Tables":true,
	"SAP - Suspected Activity in User Administration Tables":true,
	"SAP - Suspected Activity in User Master Data Tables":true,
	"SAP - Suspected modification of SAP Metadata":true,
	"SAP - Suspected modifications in Tables by Non-Default User":true,
	"SAP PCI - Unauthorized access to credit cardholder":true,
	"SAP PCI - Unauthorized access to payment card no.":true,
	"SAP PCI - Violation to payment card number table":true,
	"SAP PCI - Violation to payment cardholder":true,
	"Sensitive Error Messages Leakage":true,
	"SharePoint - Abnormal Data Access":true,
	"SharePoint - Access Outside of Business Hours":true,
	"SharePoint - Add Site Collection Administrator":true,
	"SharePoint - All Access to PCI Data":true,
	"SharePoint - Block External Access to Central Administration":true,
	"SharePoint - Break Permission Inheritance":true,
	"SharePoint - Break Permission Level Inheritance":true,
	"SharePoint - Changes to Permission Level":true,
	"SharePoint - Create Folder":true,
	"SharePoint - Data Modification Outside of Business Hours":true,
	"SharePoint - Direct Access to Database":true,
	"SharePoint - External Access to Admin URLs":true,
	"SharePoint - Grant Permissions to all Authenticated Users":true,
	"SharePoint - Grant Permissions to all Domain Users":true,
	"SharePoint - Modify List of Site Collection Administrators":true,
	"SharePoint - Modify Permissions of Anonymous User Access":true,
	"SharePoint - User Attempt to Break Permission Inheritance":true,
	"SharePoint - User Attempt to Change Permission Level":true,
	"SharePoint PCI â€“ Privileged Users Access":true,
	"SOX - Data changes by administrator":true,
	"SOX - Direct changes to data dictionary":true,
	"SOX - Manual data changes":true,
	"SOX - Unauthorized data changes":true,
	"Suspected parameter tampering - Deprecated":true,
	"Suspicious File Access Attempt - 1":true,
	"Suspicious File Extension Access":true,
	"Suspicious Response Code":true,
	"System32 Access":true,
	"ThreatRadar - Anonymous Proxies":true,
	"ThreatRadar - Bot Protection - Allow Browsers Only 1":true,
	"ThreatRadar - Bot Protection - Allow Browsers Only 2":true,
	"ThreatRadar - Bot Protection - High Activity of Non-Crucial Bots":true,
	"ThreatRadar - Bot Protection - Malicious Bots 1":true,
	"ThreatRadar - Bot Protection - Malicious Bots 2":true,
	"ThreatRadar - Comment Spam IPs":true,
	"ThreatRadar - Emergency - Authenticated Sessions":true,
	"ThreatRadar - Emergency - Authenticated Sessions Signatures":true,
	"ThreatRadar - Emergency - Detection":true,
	"ThreatRadar - Emergency - Detection Signatures":true,
	"ThreatRadar - Emergency - General":true,
	"ThreatRadar - Emergency - General Signatures":true,
	"ThreatRadar - Emergency - GET Requests":true,
	"ThreatRadar - Emergency - GET Requests Signatures":true,
	"ThreatRadar - Emergency - POST Requests":true,
	"ThreatRadar - Emergency - POST Requests Signatures":true,
	"ThreatRadar - Malicious IPs":true,
	"ThreatRadar - Phishing URLs":true,
	"ThreatRadar - Remote File Inclusion (RFI) Signatures":true,
	"ThreatRadar - Scanner IPs":true,
	"ThreatRadar - Spamdexing Signatures":true,
	"ThreatRadar - SQL Injection IPs":true,
	"ThreatRadar - TOR IPs":true,
	"Unauthorized Privileged Operation - Deprecated":true,
	"Unsuccessful Directory Browsing":true,
	"WEB MISC Unauthorized File Access":true,
	"WEB-FRONTPAGE- Access to Internal Information":true,
	"WEB-FRONTPAGE- External Access to Internal Information":true,
	"WEB-FRONTPAGE-Access to Sensitive Internal Information":true,
	"Webdav Method Detection":true,
	"Websocket Upgrade":true,
	"WordPress Content Injection":true,
	"WordPress Drupal xmlrpc DoS":true,
	"WordPress WPtouch Unauthorized File Upload":true,
	"Wordpress XML-RPC System Multicall":true,
	"XCat boolean XPath injection":true,
	"XML External Entity Injection":true
}