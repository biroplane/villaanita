<template>
  <v-footer height="500">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-card
            flat
            class="transparent"
          >
            <v-card-title />
            <v-card-text>
              <v-img
                :src="require('@/assets/logo.png')"
                width="100"
              />
              <p class="pt-4">
                70038 Terlizzi (BA)<br>
                Strada Provinciale 2, 23<br>
                Tel. +39 080 9141484 - 346 1045661<br>
                info@villaanita.net<br>
                P. IVA 07759950723<br>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                text
                color="primary"
              >
                <v-icon>mdi-telephone</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-container fluid>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  dense
                  label="Nome"
                  outlined
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  dense
                  label="Mail"
                  validate-on-blur=""
                  outlined
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  dense
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
              </v-col>
              <v-col
                cols="2"
                offset="10"
              >
                <v-btn
                  outlined
                  block
                >
                  Invia.
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
$color-pack: false;
@import "~@/assets/scss/main.scss";
@import "~@/assets/scss/variables.scss";
</style>
