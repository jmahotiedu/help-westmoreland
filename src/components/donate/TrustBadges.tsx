interface TrustBadge {
  label: string;
  description?: string;
}

interface TrustBadgesProps {
  variant?: "default" | "compact";
  className?: string;
}

export default function TrustBadges({
  variant = "default",
  className = "",
}: TrustBadgesProps) {
  const badges: TrustBadge[] = [
    {
      label: "Direct Communication",
      description: "Personal coordination for each donation",
    },
    {
      label: "Flexible Payment Options",
      description: "Multiple secure methods available",
    },
    {
      label: "100% Direct Impact",
      description: "Every dollar goes to relief efforts",
    },
    {
      label: "Tax Receipt Inquiries",
      description: "Contact us for your jurisdiction",
    },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-6 text-sm ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="text-gray-700">
            <span className="font-semibold">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 rounded-lg p-8 ${className}`}>
      <h3 className="text-2xl font-display font-bold text-center mb-8 text-gray-900">
        Why Donate Through Help Westmoreland
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 border-2 border-primary-600 rounded-full"></div>
            </div>
            <div className="font-semibold text-gray-900 mb-2">
              {badge.label}
            </div>
            {badge.description && (
              <p className="text-sm text-gray-600 leading-relaxed">{badge.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Additional Trust Signals */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Our Commitment to Transparency</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              We provide regular updates with photos, videos, and receipts showing exactly how donations support families in Westmoreland. Follow our social media channels to see the direct impact of your contribution.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">No Administrative Overhead</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              All operational costs are covered separately. Your donation goes directly to purchasing food, supplies, building materials, and supporting families rebuilding their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
