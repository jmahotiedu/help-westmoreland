import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission & Story",
  description:
    "Our mission is to uplift and support the people of Westmoreland through relief, rebuilding, and recovery after Hurricane Melissa.",
};

export default function MissionPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
          Our Mission
        </h1>

        <div className="prose prose-lg max-w-3xl">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
            Our mission is simple but profound: to uplift and support the people
            of Westmoreland. From emergency relief to long-term rebuilding, we
            stand with families every step of the way: restoring hope, dignity,
            and stability with compassion, accountability, and love.
          </p>

          <h2 className="text-3xl font-display font-bold mt-12 mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Help Westmoreland began with a painful truth: when our community
            cried out for help after Hurricane Melissa, support didn't come fast
            enough.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Homes collapsed. Roads washed away. Cell towers went down. Parents
            stood outside broken homes with nowhere to go. Children were hungry.
            Elders were stranded. Families were reporting loved ones missing.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
            We couldn't ignore it.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What started as one voice sharing updates online became a movement:
            message by message, donation by donation, family by family. People
            from Jamaica and the diaspora united to bring relief where it was
            needed most.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Help Westmoreland was born out of love, responsibility, and the
            belief that every life matters.
          </p>
        </div>
      </Container>
    </div>
  );
}
