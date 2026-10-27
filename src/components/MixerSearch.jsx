"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { mergeCatalog } from "@/lib/catalog";

// Flattens the catalogue; `available` mixers (from the product API) link to their page
const flattenMixers = (products) =>
  mergeCatalog(products).flatMap((collection) =>
    collection.flavors.map((flavor) => ({ ...flavor, collection: collection.title }))
  );

// Lowercase + strip accents so "pina" matches "Piña"
const normalize = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

export default function MixerSearch({ className = "", autoFocus = false, onNavigate }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allMixers, setAllMixers] = useState(() => flattenMixers([]));
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/products")
      .then((response) => (response.ok ? response.json() : []))
      .then((products) => {
        if (!cancelled && Array.isArray(products)) setAllMixers(flattenMixers(products));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];

    return allMixers.filter(
      (mixer) =>
        normalize(mixer.name).includes(q) ||
        (mixer.description !== "NULL" && normalize(mixer.description).includes(q))
    )
      // Name matches and available mixers first
      .sort(
        (a, b) =>
          Number(normalize(b.name).includes(q)) - Number(normalize(a.name).includes(q)) ||
          Number(b.available) - Number(a.available)
      )
      .slice(0, 8);
  }, [query, allMixers]);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClick = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const reset = () => {
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
    onNavigate?.();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      const target =
        results[activeIndex] ?? results.find((mixer) => mixer.available);
      if (target?.available) {
        router.push(`/mixers/${target.slug}`);
        reset();
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="flex h-[44px] w-full items-center gap-2 rounded-full border border-white/30 bg-white px-4">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-black/50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20L16.5 16.5" />
        </svg>
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search mixers..."
          aria-label="Search mixers"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="mixer-search-results"
          aria-autocomplete="list"
          className="w-full bg-transparent font-sf-pro text-[15px] font-medium text-black outline-none placeholder:text-black/40"
        />
      </div>

      {showDropdown && (
        <ul
          id="mixer-search-results"
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[60vh] overflow-y-auto rounded-2xl bg-white py-2 shadow-xl"
        >
          {results.length === 0 ? (
            <li className="px-4 py-3 font-sf-pro text-[14px] text-black/50">
              No mixers found for “{query.trim()}”
            </li>
          ) : (
            results.map((mixer, index) => {
              const content = (
                <>
                  <span
                    className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg"
                    style={{ backgroundColor: mixer.accent }}
                  >
                    {(mixer.image60 || mixer.image) && (
                      <Image
                        src={mixer.image60 || mixer.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-sf-pro text-[15px] font-bold text-black">
                      {mixer.name}
                    </span>
                    <span className="block truncate font-sf-pro text-[12px] text-black/50">
                      {mixer.collection}
                    </span>
                  </span>
                  {!mixer.available && (
                    <span className="shrink-0 font-sf-pro text-[11px] font-semibold uppercase tracking-wider text-black/40">
                      Coming soon
                    </span>
                  )}
                </>
              );

              const rowClass = `flex items-center gap-3 px-4 py-2 ${
                index === activeIndex ? "bg-black/5" : ""
              }`;

              return (
                <li
                  key={`${mixer.collection}-${mixer.slug}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  aria-disabled={!mixer.available}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {mixer.available ? (
                    <Link href={`/mixers/${mixer.slug}`} onClick={reset} className={rowClass}>
                      {content}
                    </Link>
                  ) : (
                    <div className={`${rowClass} cursor-default opacity-70`}>{content}</div>
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
