import JobSearchForm from "./components/JobSearch";
import Container from "./Container";
import HeroSection from "./HeroSection";
import JobListing from "./JobListing";

export default function Home() {
  return (
      <Container>
        <JobSearchForm />
        <HeroSection />
        <JobListing />
      </Container>
  );
}
