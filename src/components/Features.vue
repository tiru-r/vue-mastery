<script setup vapor>
import { ref, onMounted } from 'vue'

const features = ref([
  {
    icon: '⚡',
    title: 'No Virtual DOM',
    description: 'Vapor mode compiles templates directly to DOM operations, eliminating VDOM diffing overhead.'
  },
  {
    icon: '📦',
    title: 'Smaller Bundles',
    description: 'Up to 65% reduction in bundle size for lightweight, fast-loading applications.'
  },
  {
    icon: '🚀',
    title: 'Faster Rendering',
    description: '40% faster complex list updates with direct DOM manipulation and fine-grained reactivity.'
  },
  {
    icon: '🧩',
    title: 'Gradual Adoption',
    description: 'Mix Vapor and traditional components in the same app. Adopt at your own pace.'
  },
  {
    icon: '💡',
    title: 'Same Vue API',
    description: 'Use the Composition API you already know. Just add vapor to your script tag.'
  },
  {
    icon: '🔧',
    title: 'Bun Powered',
    description: 'Built with Bun for blazing fast development, installs, and builds.'
  }
])

const visibleCards = ref(new Set())

onMounted(() => {
  features.value.forEach((_, index) => {
    setTimeout(() => {
      visibleCards.value.add(index)
    }, 200 + index * 100)
  })
})
</script>

<template>
  <section class="features">
    <div class="container">
      <div class="features-header">
        <h2>Why <span class="gradient-text">Vapor Mode</span>?</h2>
        <p>Experience Vue.js reimagined for maximum performance</p>
      </div>
      
      <div class="features-grid">
        <article 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card glass-card"
          :class="{ visible: visibleCards.has(index) }"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: var(--space-2xl) 0;
  position: relative;
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.features-header h2 {
  font-size: clamp(2rem, 5vw, var(--font-size-4xl));
  margin-bottom: var(--space-md);
}

.features-header p {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-lg);
}

.feature-card {
  padding: var(--space-xl);
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
  display: inline-block;
  animation: float 4s ease-in-out infinite;
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.feature-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: var(--space-lg);
  }
}
</style>
