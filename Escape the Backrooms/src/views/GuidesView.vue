<template>
  <div class="guides-view">
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Escape the Backrooms Survival Guides & Tutorials</h1>
          <p class="page-subtitle">Essential resources for wanderers. Master beginner tips, fix multiplayer/microphone issues, setup VR, and unlock 100% Steam achievements.</p>
        </div>
      </div>
    </section>

    <section class="guides-content">
      <div class="container">
        <!-- Multiplayer Guide -->
        <div class="guide-section">
          <div class="section-header">
            <h2 class="section-title">Multiplayer Guide</h2>
            <p class="section-subtitle">How to play with friends and rescue teammates</p>
          </div>
          <div class="guide-content">
            <div class="guide-card">
              <h3 class="guide-title">How to Play Co-op</h3>
              <div class="guide-steps">
                <div class="step-item">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>Starting a Session</h4>
                    <p>Launch the game and select "Multiplayer" from the main menu. Create a lobby or join an existing one using the room code.</p>
                  </div>
                </div>
                <div class="step-item">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>Inviting Friends</h4>
                    <p>Share your room code with friends or invite them through Steam. Up to 4 players can join a session.</p>
                  </div>
                </div>
                <div class="step-item">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>Rescuing Teammates</h4>
                    <p>If a teammate is down, approach them and hold the interaction key to revive. Work together to ensure everyone escapes.</p>
                  </div>
                </div>
                <div class="step-item">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h4>Communication</h4>
                    <p>Use in-game proximity chat or external voice chat. Communication is key for survival and puzzle solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div class="guide-section">
          <div class="section-header">
            <h2 class="section-title">Achievements Guide</h2>
            <p class="section-subtitle">Complete guide to all achievements and how to unlock them</p>
          </div>
          <div class="achievements-grid">
            <div class="achievement-card" v-for="achievement in achievements" :key="achievement.id">
              <h3 class="achievement-name">{{ achievement.name }}</h3>
              <p class="achievement-desc">{{ achievement.description }}</p>
              <div class="achievement-requirement">
                <strong>Requirement:</strong> {{ achievement.requirement }}
              </div>
            </div>
          </div>
        </div>

        <!-- Game Comparison -->
        <div class="guide-section">
          <div class="section-header">
            <h2 class="section-title">Game Comparison</h2>
            <p class="section-subtitle">Escape the Backrooms vs. Backrooms: Escape Together</p>
          </div>
          <div class="comparison-content">
            <div class="comparison-card">
              <h3 class="comparison-title">Escape the Backrooms</h3>
              <ul class="comparison-list">
                <li>Developed by Fancy Games</li>
                <li>Published by Secret Mode</li>
                <li>Linear progression system</li>
                <li>28+ levels with unique mechanics</li>
                <li>Task list system in Level 3999</li>
                <li>Single-player and co-op (1-4 players)</li>
                <li>Steam version (v1.0 Full Release)</li>
              </ul>
            </div>
            <div class="comparison-card">
              <h3 class="comparison-title">Backrooms: Escape Together</h3>
              <ul class="comparison-list">
                <li>Different developer and publisher</li>
                <li>Different game mechanics</li>
                <li>Different level structure</li>
                <li>Separate entity system</li>
                <li>Different progression style</li>
                <li>Not covered by this wiki</li>
                <li>Separate game entirely</li>
              </ul>
            </div>
          </div>
          <div class="comparison-note">
            <p>
              <strong>Note:</strong> This wiki is dedicated exclusively to <strong>Escape the Backrooms</strong> by Fancy Games.
              If you're looking for guides for "Backrooms: Escape Together" or other Backrooms-themed games, please
              search for the appropriate wiki for that specific game.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { achievements } from '../data/guides.js'
</script>

<style scoped>
.guides-view {
  min-height: 100vh;
}


.guides-content {
  padding: 3rem 0;
}

.guide-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #999;
  font-size: 1rem;
}

.guide-content {
  max-width: 900px;
  margin: 0 auto;
}

.guide-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
}

.guide-title {
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 2rem;
}

.guide-steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.step-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  font-weight: bold;
}

.step-content h4 {
  color: #ffd700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.7;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 10px;
  padding: 1.5rem;
}

.achievement-name {
  font-size: 1.2rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
}

.achievement-desc {
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.achievement-requirement {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  font-size: 0.9rem;
  color: #aaa;
}

.achievement-requirement strong {
  color: #ffd700;
}

.comparison-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.comparison-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
}

.comparison-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.4rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.comparison-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.comparison-list li {
  color: #ccc;
  font-size: 0.95rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.comparison-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ffd700;
  font-size: 1.2rem;
}

.comparison-note {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.comparison-note p {
  color: #ccc;
  line-height: 1.8;
  margin: 0;
}

.comparison-note strong {
  color: #ffd700;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .comparison-content {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .guides-view section {
    padding: 0.5rem 0;
  }

  .page-hero {
    padding: 0.5rem 0;
  }

  .page-title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .page-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .guides-content {
    padding: 0.5rem 0;
  }

  .guide-section {
    margin-bottom: 1rem;
  }

  .section-header {
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .guide-card {
    padding: 0.5rem;
  }

  .guide-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .guide-steps {
    gap: 1rem;
  }

  .step-item {
    gap: 0.5rem;
  }

  .step-number {
    width: 30px;
    height: 30px;
    font-size: 1.1rem;
  }

  .step-content h4 {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .step-content p {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .achievement-card {
    padding: 0.5rem;
  }

  .achievement-name {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .achievement-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .achievement-requirement {
    padding-top: 0.5rem;
    font-size: 0.8rem;
  }

  .comparison-content {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .comparison-card {
    padding: 0.5rem;
  }

  .comparison-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
    padding-bottom: 0.5rem;
  }

  .comparison-list {
    gap: 0.5rem;
  }

  .comparison-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    padding-left: 0.5rem;
  }

  .comparison-note {
    padding: 0.5rem;
    margin-top: 1rem;
  }

  .comparison-note p {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
</style>

