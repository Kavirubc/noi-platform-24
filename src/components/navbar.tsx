"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "./NOILogoGold.svg";
import { LogoutButton } from "./ui/login";

interface Component {
  title: string;
  href: string;
  description: string;
}

interface NavbarProps {
  status?: string;
  name?: string;
  // Optional "status" prop
  // Add other expected props here
}

const components: Component[] = [
  {
    title: "How to Compete",
    href: "/howtocompete",
    description: "Divisions and other details",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Resources for the Participants",
  },
  {
    title: "Awards",
    href: "/awards",
    description: "Awards Offered for Winners",
  },
  {
    title: "Results",
    href: "/docs/primitives/scroll-area",
    description: "Coming soon",
  },
  {
    title: "SignUp",
    href: "/docs/primitives/tabs",
    description: "Coming soon",
  },
  {
    title: "SignUp to portal",
    href: "/docs/primitives/tooltip",
    description: "Coming soon",
  },
];

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ href, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-gold transition-colors hover:bg-black hover:text-gold focus:bg-black focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";

const Navbar: React.FC<NavbarProps> = (NavbarProps) => {
  return (
    <nav className="fixed top-0 z-50 hidden py-5 lg:flex flex-row w-full">
      <div className="md:mx-60 mx-5 flex flex-row justify-between content-center items-center w-full">
        <Link href="/" passHref>
          <Image
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            src={logo}
            alt="NOI 24"
            width={130}
            height={50}
          />
        </Link>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/profile"
                        >
                          {NavbarProps.status === "authenticated" ? (
                            <div>
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {NavbarProps.name}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Continue to the profile
                              </p>
                            </div>
                          ) : (
                            <div>
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Portal Login
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Continue to the profile
                              </p>
                            </div>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Timeline">
                      Coming soon
                    </ListItem>
                    <ListItem href="/awards" title="Awards">
                      Awards Offered for Winners
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Title 3"
                    >
                      Coming soon
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Competition</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Home
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/howtocompete">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Compete
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/resources">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Resources
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/awards">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Awards
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/timeline">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Timeline
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/results">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Results
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/IOI2023">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        IOI 2023
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/register">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Register Now
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {NavbarProps.status === "authenticated" ? (
                  <LogoutButton />
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="https://noi-platform-24.vercel.app/">
                      <div className="text-sans text-sm text-gold bg-blacky-100 py-2 px-4 hover:bg-blacky-200">
                        Portal
                      </div>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
