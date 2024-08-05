<template>
  <div class="login">
    <div class="logo-container">
      <LogoStrategos />
    </div>
    <CompanyTag />
    <div class="login-box">
      <p class="p-labels">Usuário</p>
      <input
        class="inputs"
        v-model="username"
        @input="username = $event.target.value.toUpperCase()"
      />

      <p class="p-labels">Senha</p>
      <div class="password-container">
        <input
          :type="showPassword ? 'text' : 'password'"
          class="inputs password-input"
          v-model="password"
        />
        <i
          :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="toggleShowPassword"
          class="password-icon"
        ></i>
      </div>

      <p class="p-labels">Base de dados</p>
      <select v-model="selectedDatabaseUrl" class="inputs mb-15">
        <option
          v-for="database in databases"
          :key="database.BA_URL_CONNEXAO"
          :value="database.BA_URL_CONNEXAO"
        >
          {{ database.BA_NOME }}
        </option>
      </select>

      <button class="primary-button centered-buttons" @click="login">
        Entrar <i class="icon-mg fa-solid fa-right-to-bracket"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CompanyTag from "../components/AllPages/CompanyTag.vue";
import LogoStrategos from "../components/AllPages/LogoStrategos.vue";

export default {
  name: "LoginApp",
  components: {
    CompanyTag,
    LogoStrategos,
  },
  data() {
    return {
      selectedDatabaseUrl: null,
      databases: [],
      isLoading: false,
      error: null,
      showPassword: false,
      username: "",
      password: "",
    };
  },
  computed: {
    selectedDatabaseName() {
      const selectedDatabase = this.databases.find(
        (database) => database.BA_URL_CONNEXAO === this.selectedDatabaseUrl
      );
      return selectedDatabase ? selectedDatabase.BA_NOME : "";
    },
  },
  methods: {
    async fetchDatabases() {
      try {
        const response = await axios.get("http://localhost:3000/BASES_ALL");
        this.databases = response.data;
      } catch (error) {
        console.error("Erro ao buscar bases de dados:", error);
        alert(
          "Ocorreu um erro ao buscar as bases de dados. Por favor, tente novamente."
        );
      }
    },

    async login() {
      if (!this.username || !this.password || !this.selectedDatabaseUrl) {
        alert("Todos os campos devem estar preenchidos.");
        return;
      }

      try {
        console.log(`Trying to authenticate user: ${this.username}`);
        const authResponse = await axios.get(
          `${this.selectedDatabaseUrl}/USUARIO_AUTENTICA/${this.username}/${this.password}`
        );
        console.log("Authentication response:", authResponse.data);

        if (!authResponse.data) {
          alert("Usuário ou senha incorretos.");
          return;
        }

        console.log("Checking user permissions...");
        const permissionUrl = `${this.selectedDatabaseUrl}/USUARIO_BASE_PERMITE/${this.username}/${this.selectedDatabaseName}`;
        console.log("Permission URL:", permissionUrl);
        const permResponse = await axios.get(permissionUrl);
        console.log("Permissions response:", permResponse.data);

        if (permResponse.data.success == false) {
          const mainBaseResponse = await axios.get(
            `${this.selectedDatabaseUrl}/USUARIO_BASE_PRINCIPAL/${this.username}`
          );
          alert(
            `Acesso não permitido para a base selecionada. Sua base principal é: ${mainBaseResponse.data.base}`
          );
          return;
        }

        console.log("Fetching user details...");
        const userResponse = await axios.get(
          `${this.selectedDatabaseUrl}/USUARIO/${this.username}`
        );
        console.log("User details response:", userResponse.data);
        if (userResponse.data.EXPIRA_SENHA <= 0) {
          alert("Sua senha expirou. Por favor, troque sua senha.");
          return;
        }

        console.log("Redirecionando para a base correta...");
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: this.username,
            databaseUrl: this.selectedDatabaseUrl,
            databaseName: this.selectedDatabaseName,
          })
        );

        window.location.href = "/home";
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    this.fetchDatabases();
  },
};
</script>
