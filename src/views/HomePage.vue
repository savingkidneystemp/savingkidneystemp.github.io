<script setup>
// HomePage component
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <!-- Add your main headline here -->
            Making a Difference Together
          </h1>
          <p class="hero-subtitle">
            <!-- Add your tagline or brief description here -->
           Raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease
          </p>
          <div class="hero-actions">
            <RouterLink to="/donate" class="btn btn-primary btn-lg">
              Donate Now
            </RouterLink>
            <RouterLink to="/about" class="btn btn-outline btn-lg">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Lives Impacted</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Years of Service</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Volunteers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">$0</span>
            <span class="stat-label">Funds Raised</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Preview Section -->
    <section class="section mission-preview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-subtitle">
            <!-- Add your mission statement preview here -->
            Our mission is to bring awareness to kidney health! Health & Awareness, Inc is a 501 (c)(3) organization that educates individuals in the community by raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease.
          </p>
        </div>
        <div class="mission-content">
          <RouterLink to="/mission" class="btn btn-secondary">
            Learn About Our Mission
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Programs/Services Section -->
    <section class="section programs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-subtitle">
            <!-- Add description of your programs -->
            We educate people about diabetes and high blood pressure which are the two leading risk factors for Chronic Kidney Disease (CKD). Health & Awareness aims advocates for systematic screening of all patients with diabetes and hypertension for CKD. We encourage preventative behaviors and healthcare compliance to guide people in the right direction for managing their health.
          </p>
        </div>
        <div class="mission-content">
          <RouterLink to="/programs" class="btn btn-secondary">
            Learn About Our Programs
          </RouterLink>
        </div>
      </div>
    </section>


    <!-- Events Section -->
    <section class="section events-section">
      <div class="container">
        <div class="events-card">
          <div class="events-icon">📅</div>
          <h3>Check Out Our Events</h3>
          <p>We host health workshops, community outreach events, and educational seminars throughout the year. Visit our Eventbrite page to see what's coming up and register!</p>
          <a href="https://www.eventbrite.com/cc/saving-kidneys-2016669" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            View Events on Eventbrite
          </a>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Make a Difference?</h2>
          <p class="cta-text">
            Your support helps us continue our vital work in the community.
          </p>
          <div class="cta-actions">
            <RouterLink to="/donate" class="btn btn-primary btn-lg">
              Donate Today
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline btn-lg">
              Get Involved
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
        <!-- Supporters Section -->
    <section class="section supporters-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Supporters</h2>

        </div>
        <div class="supporters-grid">
          <a href="https://www.donatelifevirginia.org/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/Donate-Life-Virginia-Logo-Horizontal.webp" alt="Donate Life Virginia" class="supporter-logo" />
          </a>
          <a href="https://www.lifenethealth.org/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/lifenet.png" alt="LifeNet Health" class="supporter-logo" />
          </a>
          <a href="https://www.integritymedicareva.com/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/IIS LOGO 2.avif" alt="Integrity Insurance Services" class="supporter-logo" />
          </a>
          <a href="https://reps.modernwoodmen.org/jmcduffie/" target="_blank" rel="noopener noreferrer" class="supporter-link supporter-link-dark">
            <img src="/assets/images/modernwoodmen.svg" alt="Modern Woodmen" class="supporter-logo" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-20) 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-6);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
  margin-bottom: var(--spacing-8);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.hero .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}

/* Stats Section */
.stats-section {
  display: none;
  background-color: var(--color-gray-50);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  text-align: center;
}

.stat-item {
  padding: var(--spacing-6);
}

.stat-number {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
}

.stat-label {
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
}

/* Mission Preview */
.mission-content {
  text-align: center;
}

/* Programs Section */
.programs-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-6);
}

.programs-grid .card {
  flex: 0 1 350px;
  max-width: 400px;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: var(--color-white);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.cta-text {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-8);
}

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background-color: var(--color-white);
  color: var(--color-secondary-dark);
}

.cta-section .btn-primary:hover {
  background-color: var(--color-gray-100);
}

.cta-section .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.cta-section .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-secondary-dark);
}

/* Supporters Section */
.supporters-section {
  background-color: var(--color-gray-50);
}

.supporters-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  align-items: center;
  justify-items: center;
}

.supporter-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-6);
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.supporter-link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.supporter-link-dark {
  background-color: var(--color-gray-800);
}

.supporter-logo {
  width: 180px;
  height: 80px;
  object-fit: contain;
}

/* Events Section */
.events-section {
  background-color: var(--color-gray-50);
}

.events-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--color-white);
  padding: var(--spacing-10);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.events-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
}

.events-card h3 {
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

.events-card p {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

/* Responsive */
@media (min-width: 768px) {
  .hero {
    padding: var(--spacing-24) 0;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .programs-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .supporters-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .supporter-logo {
    width: 200px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .programs-grid .card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
