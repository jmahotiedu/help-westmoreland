interface TrustBadge {
  icon: string;
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
      icon: "🔒",
      label: "SSL Secure",
      description: "256-bit encryption protects your data",
    },
    {
      icon: "✓",
      label: "Secure Payments",
      description: "Trusted payment processing",
    },
    {
      icon: "💯",
      label: "100% Direct Impact",
      description: "Every dollar goes to relief",
    },
    {
      icon: "📋",
      label: "Tax Inquiries",
      description: "Contact us for your jurisdiction",
    },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-4 text-sm ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">{badge.icon}</span>
            <span className="font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 rounded-lg p-8 ${className}`}>
      <h3 className="text-xl font-bold text-center mb-6">
        Your Donation is Safe & Secure
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-2">{badge.icon}</div>
            <div className="font-semibold text-gray-900 mb-1">
              {badge.label}
            </div>
            {badge.description && (
              <p className="text-xs text-gray-600">{badge.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Additional Trust Signals */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-700">
            <strong>Transparency Promise:</strong> We publish detailed financial
            reports quarterly showing exactly how donations are allocated.
          </p>
          <p className="text-sm text-gray-700">
            <strong>No Hidden Fees:</strong> Administrative costs are covered by
            separate funding. Your donation goes directly to families in need.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-500 mt-4">
            <span>✓ Community Verified</span>
            <span>✓ Transparent Reporting</span>
          </div>
        </div>
      </div>
    </div>
  );
}
