<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialSection />
    <StatisticsBar />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import StatisticsBar from "@/components/StatisticsBar.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    AboutSection,
    PortfolioSection,
    ServicesSection,
    TestimonialSection,
    StatisticsBar,
    ContactSection,
  },
};
</script>
