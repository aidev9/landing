import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background/60" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="flex flex-col gap-6">
            <Heading level={1} className="text-balance">
              The AI-first code editor that helps you write better code faster
            </Heading>

            <p className="text-xl text-muted-foreground text-balance">
              Experience the future of coding with Cursor. Built with AI at its
              core, it helps you write, understand, and refactor code with
              unprecedented speed and accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/download">
                  Download Cursor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <p>Trusted by 100,000+ developers worldwide</p>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-muted/50 shadow-2xl">
              <Image
                src="/hero-image.svg"
                alt="Cursor Editor Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
