import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Layers,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shirt,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Custom Order", href: "#custom-order" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SHIRT_COLORS = [
  { name: "Black", value: "Black", hex: "#0f0f0f" },
  { name: "White", value: "White", hex: "#f5f5f5" },
  { name: "Navy", value: "Navy", hex: "#1a2a4a" },
  { name: "Red", value: "Red", hex: "#c0392b" },
  { name: "Green", value: "Green", hex: "#27ae60" },
  { name: "Yellow", value: "Yellow", hex: "#f1c40f" },
  { name: "Gray", value: "Gray", hex: "#7f8c8d" },
  { name: "Pink", value: "Pink", hex: "#e91e8c" },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/generated/gallery-1.dim_600x600.jpg",
    alt: "Custom black graphic tee",
  },
  {
    src: "/assets/generated/gallery-2.dim_600x600.jpg",
    alt: "Screen printed white shirt",
  },
  {
    src: "/assets/generated/gallery-3.dim_600x600.jpg",
    alt: "Embroidered navy polo",
  },
  {
    src: "/assets/generated/gallery-4.dim_600x600.jpg",
    alt: "DTG printed floral tee",
  },
  {
    src: "/assets/generated/gallery-5.dim_600x600.jpg",
    alt: "Matching custom hoodies",
  },
  {
    src: "/assets/generated/gallery-6.dim_600x600.jpg",
    alt: "Red minimalist print tee",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/95 backdrop-blur-md border-b border-[#2A3442]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Shirt className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-widest text-white uppercase">
              S1Unic
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-[#B7C0CC] hover:text-white transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111822] border-t border-[#2A3442]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-[#B7C0CC] hover:text-white transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-shirts.dim_1200x700.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/90 via-[#0B0F14]/70 to-[#0B0F14]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
              S1Unic — Premium T-Shirt Printing
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.05] tracking-tight text-white mb-6">
              MAKE YOUR
              <span className="block text-primary">MARK.</span>
              BOLD T‑SHIRT
              <span className="block">PRINTING.</span>
            </h1>
            <p className="text-lg text-[#B7C0CC] mb-8 max-w-lg leading-relaxed">
              From screen printing to embroidery — we bring your vision to life
              on premium apparel. Stand out from the crowd with S1Unic custom
              designs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#custom-order">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8"
                  data-ocid="hero.primary_button"
                >
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-wider px-8"
                  data-ocid="hero.secondary_button"
                >
                  View Our Work
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Screen Printing",
      description:
        "The gold standard for bulk orders. Our screen printing uses premium inks and precision mesh stencils to deliver vibrant, long-lasting colors that pop on any fabric.",
      features: [
        "Bulk order discounts",
        "Vibrant CMYK colors",
        "Fast turnaround",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "DTG Printing",
      description:
        "Direct-to-garment technology for photo-quality prints. Perfect for complex artwork, gradients, and small runs where every detail matters.",
      features: [
        "Photo-quality detail",
        "No minimum order",
        "Full-color designs",
      ],
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Embroidery",
      description:
        "Add a premium, professional touch with stitched logos and designs. Ideal for corporate wear, sports teams, and anyone wanting that elevated look.",
      features: ["Premium finish", "3D texture effect", "Durable & washable"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0B0F14] mt-2">
            OUR SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#0B0F14] rounded-lg p-8 border border-[#2A3442] hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#B7C0CC] leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-[#B7C0CC]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#custom-order">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-wider w-full"
                  data-ocid="services.primary_button"
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomOrderSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shirtStyle, setShirtStyle] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [designDescription, setDesignDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !shirtStyle ||
      !color ||
      !quantity ||
      !designDescription
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitCustomOrder(
        name,
        email,
        shirtStyle,
        color,
        BigInt(quantity),
        designDescription,
      );
      toast.success("Order submitted! We'll be in touch soon.");
      setName("");
      setEmail("");
      setShirtStyle("");
      setColor("");
      setQuantity("1");
      setDesignDescription("");
    } catch {
      toast.error("Failed to submit order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="custom-order" className="py-24 bg-[#111822]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            Start Today
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
            CREATE YOUR CUSTOM ORDER
          </h2>
          <p className="text-[#B7C0CC] mt-4 max-w-lg mx-auto">
            Fill out the form below and our team will provide a quote within 24
            hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#1A2330] rounded-xl p-8 border border-[#2A3442] space-y-6"
          data-ocid="order.panel"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="order-name"
                className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
              >
                Full Name
              </Label>
              <Input
                id="order-name"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary"
                data-ocid="order.input"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="order-email"
                className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
              >
                Email Address
              </Label>
              <Input
                id="order-email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary"
                data-ocid="order.input"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider">
                Shirt Style
              </Label>
              <Select value={shirtStyle} onValueChange={setShirtStyle}>
                <SelectTrigger
                  className="bg-[#0B0F14] border-[#2A3442] text-white focus:border-primary"
                  data-ocid="order.select"
                >
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A2330] border-[#2A3442]">
                  {["Crew Neck", "V-Neck", "Polo", "Hoodie", "Tank Top"].map(
                    (s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        className="text-white hover:bg-[#2A3442]"
                      >
                        {s}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider">
                Quantity
              </Label>
              <Input
                type="number"
                min="1"
                placeholder="10"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary"
                data-ocid="order.input"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider">
                Color
              </Label>
              <div className="flex flex-wrap gap-2 pt-1">
                {SHIRT_COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    title={c.name}
                    onClick={() => setColor(c.value)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      color === c.value
                        ? "border-primary scale-110 ring-2 ring-primary/40"
                        : "border-[#2A3442] hover:border-white/50"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    data-ocid="order.toggle"
                  />
                ))}
              </div>
              {color && (
                <p className="text-xs text-primary font-semibold">
                  {color} selected
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="order-desc"
              className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
            >
              Design Description
            </Label>
            <Textarea
              id="order-desc"
              placeholder="Describe your design: logo, text, colors, placement, any references..."
              value={designDescription}
              onChange={(e) => setDesignDescription(e.target.value)}
              rows={4}
              className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary resize-none"
              data-ocid="order.textarea"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest"
            data-ocid="order.submit_button"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Order <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0B0F14] mt-2">
            OUR WORK
          </h2>
          <p className="text-[#0B0F14]/60 mt-4 max-w-lg mx-auto">
            Every print tells a story. Here's a glimpse of what we've created
            for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg bg-[#1A2330] group"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2 mb-6">
              WHY S1UNIC?
            </h2>
            <p className="text-[#B7C0CC] leading-relaxed mb-6 text-lg">
              At S1Unic, we believe every person deserves to wear something
              that's truly their own. Founded with a passion for bold expression
              and premium quality, we're not just a printing shop — we're your
              creative partner.
            </p>
            <p className="text-[#B7C0CC] leading-relaxed mb-8">
              From local brands to global events, from single tees to bulk
              corporate orders, we deliver exceptional results with precision,
              speed, and care. Our team of skilled artisans combines
              cutting-edge technology with old-school attention to detail.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Happy Clients" },
                { num: "10K+", label: "Prints Delivered" },
                { num: "5★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-primary">
                    {stat.num}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B7C0CC] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/assets/generated/gallery-1.dim_600x600.jpg"
              alt="Our work sample"
              className="rounded-lg object-cover w-full aspect-square"
            />
            <img
              src="/assets/generated/gallery-5.dim_600x600.jpg"
              alt="Team wearing custom prints"
              className="rounded-lg object-cover w-full aspect-square mt-8"
            />
            <img
              src="/assets/generated/gallery-3.dim_600x600.jpg"
              alt="Embroidery work"
              className="rounded-lg object-cover w-full aspect-square"
            />
            <img
              src="/assets/generated/gallery-4.dim_600x600.jpg"
              alt="DTG printing"
              className="rounded-lg object-cover w-full aspect-square mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitContactForm(name, email, message);
      toast.success("Message sent! We'll get back to you shortly.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-2">
            CONTACT US
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">
                Let's Talk
              </h3>
              <p className="text-[#B7C0CC] leading-relaxed">
                Have a project in mind? Questions about pricing or turnaround
                times? We'd love to hear from you. Reach out and let's create
                something amazing together.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "hello@s1unic.com",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "+1 (555) 123-4567",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "123 Print Street, Design City",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[#B7C0CC]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#1A2330] rounded-xl p-8 border border-[#2A3442] space-y-5"
            data-ocid="contact.panel"
          >
            <div className="space-y-2">
              <Label
                htmlFor="contact-name"
                className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
              >
                Name
              </Label>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact-email"
                className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
              >
                Email
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact-message"
                className="text-[#B7C0CC] text-sm font-semibold uppercase tracking-wider"
              >
                Message
              </Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-[#0B0F14] border-[#2A3442] text-white placeholder:text-[#B7C0CC]/50 focus:border-primary resize-none"
                data-ocid="contact.textarea"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest"
              data-ocid="contact.submit_button"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-[#0B0F14] border-t border-[#2A3442]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Shirt className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase">
                S1Unic
              </span>
            </div>
            <p className="text-[#B7C0CC] text-sm leading-relaxed">
              Premium custom T-shirt printing. Making your mark, one print at a
              time.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#B7C0CC] hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  title={s.label}
                  className="w-10 h-10 bg-[#1A2330] border border-[#2A3442] rounded-lg flex items-center justify-center text-[#B7C0CC] hover:text-white hover:border-primary transition-colors"
                  data-ocid="footer.button"
                >
                  {s.icon}
                </button>
              ))}
            </div>
            <p className="text-[#B7C0CC] text-sm">hello@s1unic.com</p>
          </div>
        </div>

        <div className="border-t border-[#2A3442] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#B7C0CC] text-sm">
            © {year} S1Unic. All rights reserved.
          </p>
          <p className="text-[#B7C0CC] text-sm">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Toaster richColors position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CustomOrderSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
