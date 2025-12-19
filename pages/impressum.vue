<template>
  <GenericLegalPage :title="title" :sections="sections" />
</template>

<script setup lang="ts">
const title = "Impressum";
//FIXME JSC check for correct information
const sections = [
  {
    heading: "Angaben gemäß § 5 TMG",
    paragraphs: [
      "Print 4 Future",
      "Schülerfirma der BBS1 Lüneburg",
      "Spillbrunnenweg 1",
      "21337 Lüneburg",
    ],
  },
  {
    heading: "Kontakt",
    paragraphs: ["E-Mail: info@bbs1-lueneburg.de", "Telefon: 0413186300"],
  },
  // Add more sections as needed
];
</script>
