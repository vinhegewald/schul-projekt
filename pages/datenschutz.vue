<template>
  <GenericLegalPage :de="de" :en="en" />
</template>

<script setup lang="ts">
const de = {
  title: "Datenschutzerklärung",
  sections: [
    {
      heading: "1. Datenschutz auf einen Blick",
      paragraphs: [
        "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      ],
    },
    {
      heading: "2. Verantwortliche Stelle",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        "Print 4 Future",
        "Schülerfirma der BBS1 Lüneburg",
        "Spillbrunnenweg 1",
        "21337 Lüneburg",
        "E-Mail: info@bbs1-lueneburg.de",
        "Telefon: 0413186300",
      ],
    },
    {
      heading: "3. Datenerfassung auf dieser Website",
      paragraphs: [
        "Für die Bearbeitung von Kontaktanfragen verarbeiten wir Ihre E-Mail-Adresse sowie Ihren Vor- und Nachnamen. Zur Übermittlung Ihrer Nachrichten nutzen wir den Dienst EmailJS, an den diese Daten weitergegeben werden. Wir setzen keine Cookies, Analyse-Tools oder Tracking-Dienste ein.",
        "Beim Besuch der Website werden automatisch technische Informationen durch Ihren Browser an unseren Server übermittelt. Diese Daten werden ausschließlich zur technischen Bereitstellung der Website verwendet und nicht gespeichert oder ausgewertet.",
        "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
        "• Browsertyp und Browserversion",
        "• Verwendetes Betriebssystem",
        "• Referrer URL",
        "• Hostname des zugreifenden Rechners",
        "• Uhrzeit der Serveranfrage",
        "• IP-Adresse",
        "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.",
      ],
    },
    {
      heading: "4. Kontaktformular",
      paragraphs: [
        "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
        "Rechtsgrundlage: Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit durch eine Nachricht an uns widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.",
        "Speicherdauer: Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
        "Bereitstellung der Daten: Die Angabe Ihrer personenbezogenen Daten im Kontaktformular ist freiwillig. Ohne Ihre Daten können wir Ihre Anfrage jedoch nicht bearbeiten.",
      ],
    },
    {
      heading: "5. OpenStreetMap",
      paragraphs: [
        "Wir nutzen den Kartendienst OpenStreetMap (OSM). Anbieter ist die OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom.",
        "Wenn Sie eine Seite mit eingebetteter OpenStreetMap-Karte aufrufen, wird eine Verbindung zu den Servern von OpenStreetMap hergestellt. Dabei können Daten wie Ihre IP-Adresse an OpenStreetMap übertragen werden.",
        "Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.",
        "Weitere Informationen finden Sie in der Datenschutzerklärung von OpenStreetMap: https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      ],
    },
    {
      heading: "6. Ihre Rechte als betroffene Person",
      paragraphs: [
        "Sie haben folgende Rechte:",
        "• Recht auf Auskunft (Art. 15 DSGVO)",
        "• Recht auf Berichtigung (Art. 16 DSGVO)",
        "• Recht auf Löschung (Art. 17 DSGVO)",
        "• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "• Widerspruchsrecht (Art. 21 DSGVO)",
        "• Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)",
        "• Beschwerderecht (Art. 77 DSGVO)",
        "Zuständige Aufsichtsbehörde für Niedersachsen: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover, Telefon: 0511/120-4500, E-Mail: poststelle@lfd.niedersachsen.de",
      ],
    },
    {
      heading: "7. Externe Links",
      paragraphs: [
        "Diese Website enthält Links zu externen Websites Dritter (z.B. Google Maps), auf deren Inhalte wir keinen Einfluss haben. Beim Klick auf externe Links werden Sie auf die jeweilige Website weitergeleitet und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
        "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      ],
    },
    {
      heading: "8. Änderungen der Datenschutzerklärung",
      paragraphs: [
        "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.",
        "Stand: Dezember 2025",
      ],
    },
  ],
};

const en = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "1. Privacy at a Glance",
      paragraphs: [
        "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified.",
      ],
    },
    {
      heading: "2. Responsible Party",
      paragraphs: [
        "The party responsible for data processing on this website is:",
        "Print 4 Future",
        "Student company of BBS1 Lüneburg",
        "Spillbrunnenweg 1",
        "21337 Lüneburg",
        "Email: info@bbs1-lueneburg.de",
        "Phone: 0413186300",
      ],
    },
    {
      heading: "3. Data Collection on This Website",
      paragraphs: [
        "For processing contact requests, we process your email address as well as your first and last name. To transmit your messages, we use the service EmailJS, to which this data is passed. We do not use cookies, analytics tools, or tracking services.",
        "When visiting the website, technical information is automatically transmitted by your browser to our server. This data is used solely for the technical provision of the website and is neither stored nor evaluated.",
        "The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:",
        "• Browser type and version",
        "• Operating system used",
        "• Referrer URL",
        "• Hostname of the accessing computer",
        "• Time of the server request",
        "• IP address",
        "This data is not merged with other data sources. The collection of this data is based on Art. 6(1)(f) GDPR.",
      ],
    },
    {
      heading: "4. Contact Form",
      paragraphs: [
        "If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.",
        "Legal basis: Data processing is based on your consent (Art. 6(1)(a) GDPR). You can revoke this consent at any time by sending us a message.",
        "Storage period: The data you enter in the contact form will remain with us until you request deletion, revoke your consent to storage, or the purpose for data storage no longer applies.",
        "Provision of data: The provision of your personal data in the contact form is voluntary. However, without your data we cannot process your request.",
      ],
    },
    {
      heading: "5. OpenStreetMap",
      paragraphs: [
        "We use the map service OpenStreetMap (OSM). The provider is the OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom.",
        "When you access a page with an embedded OpenStreetMap map, a connection to the servers of OpenStreetMap is established. Data such as your IP address may be transmitted to OpenStreetMap.",
        "The use of OpenStreetMap is in the interest of an appealing presentation of our online offerings. This constitutes a legitimate interest within the meaning of Art. 6(1)(f) GDPR.",
        "For more information, please see OpenStreetMap's privacy policy: https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      ],
    },
    {
      heading: "6. Your Rights as a Data Subject",
      paragraphs: [
        "You have the following rights:",
        "• Right of access (Art. 15 GDPR)",
        "• Right to rectification (Art. 16 GDPR)",
        "• Right to erasure (Art. 17 GDPR)",
        "• Right to restriction of processing (Art. 18 GDPR)",
        "• Right to data portability (Art. 20 GDPR)",
        "• Right to object (Art. 21 GDPR)",
        "• Right to withdraw consent (Art. 7(3) GDPR)",
        "• Right to lodge a complaint (Art. 77 GDPR)",
        "Competent supervisory authority for Lower Saxony: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover, Phone: 0511/120-4500, Email: poststelle@lfd.niedersachsen.de",
      ],
    },
    {
      heading: "7. External Links",
      paragraphs: [
        "This website contains links to external third-party websites, the content of which we have no influence over. The respective provider or operator of the linked pages is always responsible for their content.",
      ],
    },
    {
      heading: "8. Changes to This Privacy Policy",
      paragraphs: [
        "We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services.",
        "As of: December 2025",
      ],
    },
  ],
};
</script>
