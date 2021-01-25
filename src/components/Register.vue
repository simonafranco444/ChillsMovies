<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xl2 xs12 sm8>
          <v-card class="elevation-12">
            <v-toolbar dark color="#26C6DA">
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  label="Username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :counter="6"
                  :rules="passwordRules"
                  type="password"
                  label="password"
                  required
                ></v-text-field>

                <div v-if="validationErrors.length">
                  <div>
                    Please resolve the following errors before proceeding.
                    <ul>
                      <li
                        v-for="(error, index) in validationErrors"
                        :key="`error-${index}`"
                      />
                      {{
                        error
                      }}
                    </ul>
                  </div>
                </div>

                <v-btn @click.prevent="validate()" class="button is-success">
                  Register
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      email: null,
      password: null,
      authUser: null,
      validationErrors: [],
    };
  },
  methods: {
    validate() {
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (/.+@.+/.test(this.email) !== true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }

      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) !== true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }

      if (this.validationErrors.length <= 0) {
        this.signUp();
      }
    },

    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          alert("Successfully registered! Please login.");
          this.$router.push("/prova");
        })
        .catch((error) => {
          console.log("Failed!", error);
        });
    },
  },
};
</script>