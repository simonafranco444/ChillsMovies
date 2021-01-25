<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xl2 xs12 sm8>
          <v-card class="elevation-12">
            <v-toolbar dark color="#26C6DA">
              <v-toolbar-title>Login</v-toolbar-title>
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

                <v-btn @click.prevent="validate()" class="button is-success">
                  Login
                </v-btn>
                <div v-if="validationErrors.length">
                  <div class="content">
                    Please resolve the following error(s) before proceeding.
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
        this.validationErrors.push("Password cannot be empty");
      }
      if (/.{6,}/.test(this.password) !== true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }

      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.authUser = user;
        })
        .then((response) => {
          alert("Successfully logged in");
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log("Failed!", error);
        });
    },

    signOut() {
      firebase
        .auth()
        .signOut((user) => {
          this.authUser = user;
        })
        .then((response) => {
          console.log("Success! ", response);
        })
        .catch((error) => {
          console.log("Failed!", error);
        });
    },
  },
};
</script>