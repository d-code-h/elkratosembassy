import Container from "@/components/Container";
import Benefits from "@/components/features/Benefits";
import BlogPosts from "@/components/features/BlogPosts";
import Cta from "@/components/features/Cta";
import UpcomingSermons from "@/components/features/UpcomingSermons";
import Welcome from "@/components/features/Welcome";
import WhatWeDo from "@/components/features/WhatWeDo";
import Footer from "@/components/Footer";
import Hero from "@/components/ui/Hero";

export default function Home() {
	return (
		<main>
			<Hero />

			<Container>
				<WhatWeDo />
				<Welcome />
			</Container>

			<Container containerClass="bg-grey">
				<Benefits />
			</Container>

			<Container>
				<UpcomingSermons />
			</Container>

			<Cta />
			<Container>
				<BlogPosts />
			</Container>

			<Container containerClass="bg-[#161722] text-white">
				<Footer />
			</Container>
		</main>
	);
}
