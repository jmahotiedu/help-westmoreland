import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Help Westmoreland is a grassroots, community-led movement supporting families in Westmoreland, Jamaica after Hurricane Melissa.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
          Who We Are
        </h1>

        <div className="prose prose-lg max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Help Westmoreland is a grassroots, community-led movement created to
            support families in Westmoreland, Jamaica, whose lives were
            devastated by Hurricane Melissa. We are not a large corporation: we
            are neighbors helping neighbors, Jamaicans and diaspora coming
            together to rebuild what we love.
          </p>

          <h2 className="text-3xl font-display font-bold mt-12 mb-4 text-gray-900">
            What We Believe
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe in unity, dignity, transparency, and compassion. No
            politics. No hidden agendas. Just people helping people.
          </p>

          <h2 className="text-3xl font-display font-bold mt-12 mb-4 text-gray-900">
            Why We Exist
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Because too many families were overlooked.</li>
            <li>Because waiting for help isn't an option.</li>
            <li>Because every person deserves safety, shelter, and hope.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
