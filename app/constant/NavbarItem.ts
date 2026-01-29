import { getDefaultDashboardRoute, UserRole } from "@/utils/auth-utils";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

export const navItems = (role: UserRole): NavItem[] => {
  let defaultDashboard
  if (role) {
    defaultDashboard = getDefaultDashboardRoute(role)
  };
  return [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },

    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    role ? {
      name: 'Profile',
      href: '/my-profile',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Dashboard',
          href: defaultDashboard as string,
          description: 'Manage your data',
        },
        { name: 'Reports', href: '/reports', description: 'Generate insights' },
      ],
    }:null,
  ].filter(Boolean) as NavItem[]
};