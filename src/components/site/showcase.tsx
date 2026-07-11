"use client";

import { motion } from "framer-motion";
import {
  Bell,
  ChevronDown,
  CreditCard,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/skiper-ui/skiper101";

export function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          The building blocks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground"
        >
          Every shadcn/ui primitive running live on Corvus&apos;s sage theme —
          inputs, selects, sliders, accordions, and more.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl"
      >
        {/* Mock window top bar */}
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-chart-4/70" />
            <span className="size-2.5 rounded-full bg-primary/60" />
            <span className="size-2.5 rounded-full bg-chart-3/70" />
          </div>
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Bell className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className="flex items-center gap-2 rounded-full border border-border/60 py-1 pl-1 pr-2 text-sm hover:bg-accent" />
                }
              >
                <Avatar className="size-6">
                  <AvatarFallback className="bg-primary/20 text-primary text-xs">
                    CV
                  </AvatarFallback>
                </Avatar>
                Corvus
                <ChevronDown className="size-3.5 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard /> Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="overview" className="p-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* ── Overview ── */}
          <TabsContent value="overview" className="mt-6 space-y-5">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-8" placeholder="Search components…" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Sage</Badge>
              <Badge variant="secondary">Framer Motion</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
              <Badge variant="outline">Skiper UI</Badge>
              <Badge variant="secondary">Base UI</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Sessions", value: "12.4k" },
                { label: "Signups", value: "8.1k" },
                { label: "Retention", value: "94%" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-muted/40 p-4"
                >
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Onboarding progress</span>
                <span>72%</span>
              </div>
              <Progress value={72} />
            </div>
          </TabsContent>

          {/* ── Components ── */}
          <TabsContent value="components" className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Input */}
              <div className="space-y-1.5">
                <Label>Email address</Label>
                <div className="flex gap-2">
                  <Input placeholder="you@example.com" type="email" />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>

              {/* Select */}
              <div className="space-y-1.5">
                <Label>Framework</Label>
                <Select defaultValue="next">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="nuxt">Nuxt</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[40]} />
            </div>

            {/* RadioGroup */}
            <div className="space-y-2">
              <Label>Plan</Label>
              <RadioGroup defaultValue="pro" className="flex gap-6">
                {["Starter", "Pro", "Enterprise"].map((plan) => (
                  <label
                    key={plan}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    <RadioGroupItem value={plan.toLowerCase()} />
                    {plan}
                  </label>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>

          {/* ── Settings ── */}
          <TabsContent value="settings" className="mt-6 space-y-4">
            {[
              { icon: Settings, label: "Product updates", checked: true },
              { icon: Bell, label: "Weekly digest", checked: false },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-2xl border border-border/60 p-4"
              >
                <div className="flex items-center gap-3">
                  <row.icon className="size-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{row.label}</span>
                </div>
                <Switch defaultChecked={row.checked} />
              </div>
            ))}
            <Accordion multiple={false} className="mt-2 rounded-2xl border border-border/60 px-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>How do I add more components?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Run <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">npx shadcn add [component]</code> to pull any shadcn/ui component straight into your project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Can I change the color scheme?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes — update the OKLCH variables in <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">globals.css</code> to match your brand in minutes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
