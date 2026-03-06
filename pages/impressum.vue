<template>
  <GenericLegalPage :de="de" :en="en" />
</template>

<script setup lang="ts">
const de = {
  title: "Impressum",
  sections: [
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
  ],
};

const en = {
  title: "Imprint",
  sections: [
    {
      heading: "Information according to § 5 TMG",
      paragraphs: [
        "Print 4 Future",
        "Student company of BBS1 Lüneburg",
        "Spillbrunnenweg 1",
        "21337 Lüneburg",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Email: info@bbs1-lueneburg.de", "Phone: 0413186300"],
    },
  ],
};
</script>
