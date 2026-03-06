<template>
  <GenericLegalPage :title="title" :sections="sections" />
</template>

<script setup lang="ts">
const title = "Datenschutzerklärung";

const sections = [
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
      "• Recht auf Auskunft (Art. 15 DSGVO): Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.",
      "• Recht auf Berichtigung (Art. 16 DSGVO): Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.",
      "• Recht auf Löschung (Art. 17 DSGVO): Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.",
      "• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
      "• Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.",
      "• Widerspruchsrecht (Art. 21 DSGVO): Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.",
      "• Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Sie haben das Recht, Ihre erteilte Einwilligung jederzeit zu widerrufen.",
      "• Beschwerderecht (Art. 77 DSGVO): Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.",
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
];

useSeoMeta({
  title: "Datenschutz",
  ogTitle: "Datenschutz",
  description: "Datenschutz",
  ogDescription: "Datenschutz",
})
</script>
