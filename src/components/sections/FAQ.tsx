"use client";

import { Section } from "@/components/ui/section";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Cursor?",
    answer:
      "Cursor is an AI-first code editor that helps developers write better code faster. It combines the power of advanced AI with a modern, intuitive interface to streamline your development workflow.",
  },
  {
    question: "How does the AI code completion work?",
    answer:
      "Cursor's AI analyzes your code context in real-time and provides intelligent suggestions for completing your code. It understands your project structure, dependencies, and coding patterns to offer relevant and accurate completions.",
  },
  {
    question: "Is my code secure with Cursor?",
    answer:
      "Yes, your code is secure. Cursor processes code locally on your machine and only sends necessary context to our AI models. We never store your code or sensitive information on our servers.",
  },
  {
    question: "What programming languages does Cursor support?",
    answer:
      "Cursor supports all major programming languages including JavaScript, TypeScript, Python, Java, C++, and many more. Our AI models are trained on a wide variety of languages and frameworks.",
  },
  {
    question: "Can I use Cursor offline?",
    answer:
      "Yes, many of Cursor's features work offline. While some AI features require an internet connection, the core code editor functionality is fully available offline.",
  },
  {
    question: "How do I get started with Cursor?",
    answer:
      "Getting started is easy! Simply download Cursor from our website, install it on your machine, and you can begin coding right away. We offer a free tier that includes essential features to help you get acquainted with the platform.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronUpIcon
                            className={`h-6 w-6 transform ${
                              open ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
