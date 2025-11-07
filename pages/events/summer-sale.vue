<template>
  <EventPage
    title="SAVE THE DATE"
    subtitle="SUMMER SALE: 15.07 - 18.07.25"
    :header-image="headerImage"
    content-header="Ich bin eine Überschrift:"
    :description="eventDescription"
    :location="eventLocation"
  />
</template>

<script setup lang="ts">
const headerImage = '/images/events/summer-sale.jpg';

const eventDescription = [
  'Unsere Schülerfirma ist ein kreatives und innovatives Startup-Projekt der Schüler/-innen der HA25B der einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg. Wir haben uns auf den Bereich 3D-Druck spezialisiert und setzen unsere Ideen mit viel Motivation und Teamgeist in die Tat um.',
  'In einem Design-Thinking-Prozess haben wir durch Interviews mit potenziellen Kunden herausgefunden, welche Produkte gefragt sind – diese entwickeln und produzieren wir nun. Außerdem arbeiten wir in einer Kooperation mit der gewerblichen BBS II: Dort gefertigte Holzprodukte vermarkten wir als angehende Handelsprofis.',
  'Als Schülerunternehmen setzen wir auf Teamarbeit, Kreativität und gegenseitige Unterstützung. Jede Idee zählt, jeder Beitrag ist wertvoll. Wir sind ein offenes Team, das sich stetig weiterentwickelt und innovative Lösungen für spannende Projekte schafft.',
  'Unser Ziel: Mit unseren Produkten einen echten Mehrwert für die Gemeinschaft zu bieten – und dabei Erfahrung für unsere berufliche Zukunft zu sammeln.',
];

const eventLocation = {
  name: 'BBS1 Lüneburg',
  address: 'Spillbrunnenweg 1, 21337 Lüneburg, Deutschland',
  coordinates: {
    lat: 53.2467,
    lng: 10.4108,
  },
};

defineOptions({
  name: 'SummerSalePage',
});
</script>

