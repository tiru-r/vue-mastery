<script setup vapor>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="hero">
    <div class="hero-background">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    
    <div class="container hero-content" :class="{ visible: isVisible }">
      <div class="hero-badge">
        <span class="badge-icon">⚡</span>
        <span>Vue 3.6 Vapor Mode</span>
      </div>
      
      <h1 class="hero-title">
        Build Apps at
        <span class="gradient-text">Lightning Speed</span>
      </h1>
      
      <p class="hero-description">
        Experience the future of Vue.js with Vapor Mode. 
        Up to 65% smaller bundles, 40% faster rendering, 
        zero Virtual DOM overhead.
      </p>
      
      <div class="hero-cta">
        <button class="btn btn-primary glow">
          <span>Get Started</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <button class="btn btn-secondary">
          <span>Documentation</span>
        </button>
      </div>
      
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-value gradient-text">65%</span>
          <span class="stat-label">Smaller Bundle</span>
        </div>
        <div class="stat">
          <span class="stat-value gradient-text">40%</span>
          <span class="stat-label">Faster Render</span>
        </div>
        <div class="stat">
          <span class="stat-value gradient-text">0</span>
          <span class="stat-label">VDOM Overhead</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--color-primary);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--color-secondary);
  bottom: -10%;
  right: -5%;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--color-accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
}

.badge-icon {
  font-size: 1.2em;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, var(--font-size-5xl));
  font-weight: 800;
  margin-bottom: var(--space-md);
  line-height: 1.1;
}

.hero-description {
  font-size: var(--font-size-lg);
  max-width: 600px;
  margin: 0 auto var(--space-xl);
  color: var(--text-secondary);
}

.hero-cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-2xl);
}

.hero-stats {
  display: flex;
  gap: var(--space-xl);
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.stat-value {
  font-size: var(--font-size-3xl);
  font-weight: 800;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: var(--space-lg);
  }
  
  .stat-value {
    font-size: var(--font-size-2xl);
  }
}
</style>
