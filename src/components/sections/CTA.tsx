"use client";

import { Section } from "@/components/ui/section";
import { FadeIn, ScaleIn, SlideIn, HoverScale } from "@/components/ui/animate";

export function CTA() {
  return (
    <Section className="bg-indigo-600">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-5 sm:pb-12 lg:flex lg:px-8 lg:py-12">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <FadeIn delay={0.2}>
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <HoverScale>
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-500/20">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-white">
                      <span>Just shipped v1.0</span>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </HoverScale>
              </div>
            </FadeIn>
            <SlideIn delay={0.4}>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Ready to transform your coding experience?
              </h1>
            </SlideIn>
            <FadeIn delay={0.6}>
              <p className="mt-6 text-lg leading-8 text-indigo-100">
                Join thousands of developers who are already using Cursor to
                write better code faster. Start your journey today with our free
                tier.
              </p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="mt-10 flex items-center gap-x-6">
                <HoverScale>
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started for free
                  </a>
                </HoverScale>
                <HoverScale>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </HoverScale>
              </div>
            </FadeIn>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <ScaleIn delay={0.4}>
                <HoverScale>
                  <img
                    src="/cursor-preview.svg"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                  />
                </HoverScale>
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
