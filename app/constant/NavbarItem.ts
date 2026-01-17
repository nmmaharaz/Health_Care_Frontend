
interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Analytics',
        href: '/analytics',
        description: 'Track your metrics',
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        description: 'Manage your data',
      },
      { name: 'Reports', href: '/reports', description: 'Generate insights' },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];