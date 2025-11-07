"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface Family {
  id: string;
  name: string;
  location: string;
  size: number;
  needs: string[];
  story: string;
  imageUrl?: string;
  monthlySupport: number;
  isSponsored: boolean;
}

interface AdoptAFamilyProps {
  families?: Family[];
}

// Sample families data - replace with real data from CMS/API
const defaultFamilies: Family[] = [
  {
    id: "1",
    name: "The Campbell Family",
    location: "Savanna-la-Mar",
    size: 5,
    needs: ["Food assistance", "Home repairs", "School supplies"],
    story:
      "The Campbells lost their roof in Hurricane Melissa. Mother of 3, working to rebuild while caring for elderly parents.",
    monthlySupport: 150,
    isSponsored: false,
  },
  {
    id: "2",
    name: "The Thompson Family",
    location: "Negril",
    size: 4,
    needs: ["Medical care", "Food", "Clothing"],
    story:
      "Single father of 3 whose fishing business was destroyed. Children need school uniforms and supplies.",
    monthlySupport: 150,
    isSponsored: false,
  },
  {
    id: "3",
    name: "The Williams Family",
    location: "Little London",
    size: 6,
    needs: ["Shelter materials", "Food", "Water filtration"],
    story:
      "Extended family living in damaged home. Grandmother needs regular medication. Working to secure safe shelter.",
    monthlySupport: 150,
    isSponsored: true,
  },
  {
    id: "4",
    name: "The Brown Family",
    location: "Whitehouse",
    size: 3,
    needs: ["Business restart", "Food", "Home repairs"],
    story:
      "Small shop owner whose business was flooded. Mother of 2 trying to restart livelihood and repair home.",
    monthlySupport: 150,
    isSponsored: false,
  },
];

export default function AdoptAFamily({
  families = defaultFamilies,
}: AdoptAFamilyProps) {
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);

  const handleSponsor = (family: Family) => {
    setSelectedFamily(family);
    // In production, this would open a Donorbox form or custom donation flow
    // For now, scroll to donation form or show modal
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Adopt-A-Family Program
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Make a direct, lasting impact by supporting a specific family's
          recovery journey. Your monthly support provides consistent help for
          food, shelter, education, and rebuilding.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {families.map((family) => (
          <div
            key={family.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden border-2 ${
              family.isSponsored
                ? "border-gray-300 opacity-75"
                : "border-primary-200 hover:border-primary-400 transition"
            }`}
          >
            {/* Family Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center">
              <div className="text-6xl">👨‍👩‍👧‍👦</div>
            </div>

            <div className="p-6">
              {/* Family Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {family.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    📍 {family.location} • {family.size} family members
                  </p>
                </div>
                {family.isSponsored && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    ✓ Sponsored
                  </span>
                )}
              </div>

              {/* Story */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {family.story}
              </p>

              {/* Needs */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Current Needs:
                </p>
                <div className="flex flex-wrap gap-2">
                  {family.needs.map((need, index) => (
                    <span
                      key={index}
                      className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              {/* Support Amount & CTA */}
              <div className="border-t pt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Monthly support:</p>
                  <p className="text-2xl font-bold text-primary-600">
                    ${family.monthlySupport}
                  </p>
                </div>
                <Button
                  variant={family.isSponsored ? "outline" : "primary"}
                  onClick={() => handleSponsor(family)}
                  disabled={family.isSponsored}
                  className={family.isSponsored ? "cursor-not-allowed" : ""}
                >
                  {family.isSponsored ? "Sponsored" : "Sponsor Family"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-primary-50 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-display font-bold text-center mb-6">
          How the Program Works
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              1
            </div>
            <h4 className="font-semibold mb-2">Choose a Family</h4>
            <p className="text-sm text-gray-700">
              Select a family whose story resonates with you
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              2
            </div>
            <h4 className="font-semibold mb-2">Monthly Support</h4>
            <p className="text-sm text-gray-700">
              Commit to $150/month (or one-time donation)
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              3
            </div>
            <h4 className="font-semibold mb-2">Get Updates</h4>
            <p className="text-sm text-gray-700">
              Receive quarterly updates on your family's progress
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Can I sponsor for less than $150/month?
            </h4>
            <p className="text-sm text-gray-700">
              Yes! Any amount helps. $150/month is our recommended amount to
              cover food, utilities, and essential needs, but we're grateful for
              any level of support.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Can I make a one-time donation instead?
            </h4>
            <p className="text-sm text-gray-700">
              Absolutely. While monthly support provides consistent help,
              one-time donations are also incredibly valuable and go directly to
              the family's needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Will I know how my donation is used?
            </h4>
            <p className="text-sm text-gray-700">
              Yes! You'll receive quarterly updates with photos and stories
              showing exactly how your support is helping your adopted family
              rebuild their lives.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Can I communicate with the family?
            </h4>
            <p className="text-sm text-gray-700">
              For privacy and safety, direct contact isn't available, but we
              facilitate letter exchanges and updates so you can see the direct
              impact of your generosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
