import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Cursor has completely transformed how I write code. The AI assistance is incredibly accurate and helps me move faster than ever.",
    author: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "TechCorp",
    image: "/testimonials/sarah.svg",
  },
  {
    content:
      "The code understanding features are game-changing. It's like having a pair programmer who knows your entire codebase.",
    author: "Michael Rodriguez",
    role: "Full Stack Developer",
    company: "StartupX",
    image: "/testimonials/michael.svg",
  },
  {
    content:
      "I was skeptical about AI coding tools, but Cursor has proven to be an indispensable part of my development workflow.",
    author: "Emma Thompson",
    role: "Lead Developer",
    company: "DevTeam",
    image: "/testimonials/emma.svg",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Heading level={2}>Loved by Developers</Heading>
          <p className="text-xl text-muted-foreground max-w-2xl">
            See what developers are saying about their experience with Cursor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
