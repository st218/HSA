"use client"
import { siteConfig } from "@/app/siteConfig"
import { cx, focusRing } from "@/lib/utils"
import {
  RiBarChart2Line,
  RiBookOpenLine,
  RiHome2Line,
  RiLineChartLine,
  RiLockLine,
  RiRoadMapLine,
  RiSettings5Line,
  RiShieldCheckLine,
  RiShoppingBag3Line,
} from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileSidebar from "./MobileSidebar"
import { UserProfileDesktop, UserProfileMobile } from "./UserProfile"

const navigation = [
  { name: "Executive Summary", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
  { name: "PSA Case Study", href: siteConfig.baseLinks.psa, icon: RiLineChartLine },
  { name: "Market Analysis", href: siteConfig.baseLinks.comparables, icon: RiBarChart2Line },
  { name: "HSA Product", href: siteConfig.baseLinks.product, icon: RiShoppingBag3Line },
  { name: "Security & Compliance", href: siteConfig.baseLinks.security, icon: RiLockLine },
  { name: "Risk & Validation", href: siteConfig.baseLinks.risk, icon: RiShieldCheckLine },
  { name: "Roadmap", href: siteConfig.baseLinks.roadmap, icon: RiRoadMapLine },
  { name: "Sources", href: siteConfig.baseLinks.sources, icon: RiBookOpenLine },
] as const

const shortcuts = [
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings,
    icon: RiSettings5Line,
  },
] as const

export function Sidebar() {
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }
  return (
    <>
      {/* sidebar (lg+) */}
      <nav className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <aside className="flex grow flex-col gap-y-6 overflow-y-auto border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-sm">
              HSA
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                Investment Report
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Decision-Grade Memo
              </p>
            </div>
          </div>
          <nav
            aria-label="core navigation links"
            className="flex flex-1 flex-col space-y-10"
          >
            <ul role="list" className="space-y-0.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cx(
                      isActive(item.href)
                        ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                      "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                      focusRing,
                    )}
                  >
                    <item.icon className="size-4 shrink-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <span className="text-xs font-medium leading-6 text-gray-500">
                Options
              </span>
              <ul aria-label="shortcuts" role="list" className="space-y-0.5">
                {shortcuts.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cx(
                        pathname === item.href || pathname.startsWith(item.href)
                          ? "text-orange-600 dark:text-orange-400"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                        "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                        focusRing,
                      )}
                    >
                      <item.icon
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="mt-auto">
            <UserProfileDesktop />
          </div>
        </aside>
      </nav>
      {/* top navbar (xs-lg) */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-2 shadow-sm sm:gap-x-6 sm:px-4 lg:hidden dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-xs">
            HSA
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
            Investment Report
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <UserProfileMobile />
          <MobileSidebar />
        </div>
      </div>
    </>
  )
}
