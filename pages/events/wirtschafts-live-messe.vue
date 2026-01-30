<template>
  <EventsEventPage
    title="WIRTSCHAFTS LIVE MESSE"
    subtitle="Besuchen Sie uns auf der Messe"
    :header-image="headerImage"
    content-header="Über die Veranstaltung:"
    :description="eventDescription"
    :location="eventLocation"
  />
</template>

<script setup lang="ts">
// FIXME JSC Placeholder - replace with actual image
const headerImage = '/images/events/summer-sale.jpg'; 

const eventDescription = [
  'Die Wirtschaft-Live-Messe der Schülerunternehmen findet jedes Jahr abwechselnd an eine Berufsschule in Niedersachsen statt. Dort stellen ca. 20 Schülerunternehmen aus ganz Niedersachsen aus und messen sich in den Wettbewerben "bester Messestand", "bester Messebandbeitrag", "bester Imagefilm" und "beste Fotopräsentation der Geschäftsidee".',
  'Die Messe bietet den Jugendlichen die Möglichkeit, ihre Geschäftsideen und Produkte einer breiten Öffentlichkeit vorzustellen. Ziel der Messe ist es, unternehmerisches Denken und Handeln praxisnah zu fördern, wirtschaftliche Kompetenzen zu stärken und den Austausch zwischen Schüler/-innen, Schulen, Wirtschaft und Politik zu unterstützen.',
]; 
// FIXME JSC check for correct coordinates 52.870271624240516, 9.598559460718183 

const eventLocation = {
  name: 'BBS Walsrode',
  address: 'Am bhf 80, 29664 Walsrode',
  coordinates: {
    lat: 52.870271624240516,
    lng: 9.598559460718183,
  },
};

defineOptions({
  name: 'WirtschaftsLiveMessePage',
});
</script>

