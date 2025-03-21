"use client";

import { Section } from "@/components/ui/section";
import { CheckIcon } from "@heroicons/react/24/outline";
import { HoverScale } from "@/components/ui/animate";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    price: { monthly: "$0" },
    description: "Perfect for individual developers getting started.",
    features: [
      "Basic AI code completion",
      "Standard code editor features",
      "Community support",
      "Up to 100 AI requests per day",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$20" },
    description: "For professional developers who need more power.",
    features: [
      "Advanced AI code completion",
      "Priority support",
      "Unlimited AI requests",
      "Custom AI model fine-tuning",
      "Team collaboration features",
      "Advanced code analysis",
    ],
    cta: "Start Free Trial",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: { monthly: "Custom" },
    description: "For large organizations with custom requirements.",
    features: [
      "Everything in Pro",
      "Custom AI model training",
      "Dedicated support",
      "SLA guarantees",
      "Advanced security features",
      "Custom integrations",
      "Team management",
      "Usage analytics",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start with our free tier and upgrade as you grow. All plans include
            our core AI features.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          {tiers.map((tier) => (
            <HoverScale key={tier.id}>
              <div
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 xl:p-10 h-full ${
                  tier.mostPopular
                    ? "ring-2 ring-indigo-600 shadow-xl"
                    : "hover:shadow-md hover:ring-gray-300"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      className={`text-lg font-semibold leading-8 ${
                        tier.mostPopular ? "text-indigo-600" : "text-gray-900"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <span className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                        Most popular
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price.monthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-grow"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className={`mt-8 block rounded-md px-3 py-2.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
                      : "bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </HoverScale>
          ))}
        </div>
      </div>
    </Section>
  );
}
