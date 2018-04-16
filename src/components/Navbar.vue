<template>
  <nav class="navbar justify-content-between">
  <a class="navbar-brand">K-A-N-B-A-N</a>
  <form class="form-inline">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addtask">
      New Task
    </button>
  </form>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  background: rgba(white, white, white, 0.5)
}
.navbar-brand{
  color: white;
}
</style>
