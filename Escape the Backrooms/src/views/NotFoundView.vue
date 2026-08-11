<template>
  <div class="not-found-view" role="status" aria-label="404">
    <span class="status-code">404</span>
  </div>
</template>

<style scoped>
.not-found-view {
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.status-code {
  color: #ffd700;
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(4rem, 14vw, 10rem);
  font-weight: 700;
  letter-spacing: 0.08em;
}
</style>
