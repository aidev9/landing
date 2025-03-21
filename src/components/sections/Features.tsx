"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Brain, Code2, GitBranch, Sparkles } from "lucide-react";
import { HoverScale } from "@/components/ui/animate";

const features = [
  {
    title: "AI-Powered Code Generation",
    description:
      "Generate code from natural language descriptions, complete functions, and create entire components with AI assistance.",
    icon: Brain,
  },
  {
    title: "Smart Code Understanding",
    description:
      "Get instant explanations of complex code, find bugs, and understand unfamiliar codebases with AI-powered analysis.",
    icon: Code2,
  },
  {
    title: "Intelligent Refactoring",
    description:
      "Automatically refactor code, improve performance, and maintain clean architecture with AI suggestions.",
    icon: GitBranch,
  },
  {
    title: "Context-Aware Assistance",
    description:
      "Get relevant suggestions based on your codebase, project structure, and development context.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-muted/50">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Heading level={2}>Why Choose Cursor?</Heading>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experience the future of coding with features that make you more
            productive and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <HoverScale key={feature.title}>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </HoverScale>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="/download">Get Started with Cursor</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
