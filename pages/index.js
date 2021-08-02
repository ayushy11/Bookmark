import React, { useState } from "react";
import Layout from "components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { css, useTheme } from "@emotion/react";
// import { useSome } from "components/Providers/SomeProvider";

export default function Home() {
  return (
    <Layout title="Bookmark">
      <Navbar />
      <Hero />
      <Features />
    </Layout>
  );
}
