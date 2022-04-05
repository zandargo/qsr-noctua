<template>
  <q-list padding>
    <!-- //* Drawer Section: -->
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="login" />
      </q-item-section>

      <q-item-section>
        Entrar
      </q-item-section>
    </q-item>

    <!-- //* Drawer Section: -->
    <q-item active clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="star" />
      </q-item-section>

      <q-item-section>
        Favoritos
      </q-item-section>
    </q-item>

    <!-- //* Drawer Section: -->
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="email" />
      </q-item-section>

      <q-item-section>
        Mensagens
      </q-item-section>
    </q-item>

    <!-- //* Drawer Section: -->
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>

      <q-item-section>
        Configurações
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>

export default {
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
