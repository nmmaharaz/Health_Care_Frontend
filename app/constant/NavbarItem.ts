import { UserRole } from "@/utils/auth-utils";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

export const navItems = (role: UserRole): NavItem[] => {
  console.log('User Role in navItems:', role);
  // let defaultDashboard
  // if (role) {
  //   defaultDashboard = getDefaultDashboardRoute(role)
  // };
  return [
    { name: 'Home', href: '/' },
    { name: 'Doctors', href: '/consultation' },
    {
      name: 'Healthcare',
      href: '/healthcare',
      hasDropdown: true,
      dropdownItems: [
        { name: 'NGOs', href: '/ngos', description: 'Generate insights' },
        { name: 'Hospitals', href: '/hospitals', description: 'Generate insights' },
        { name: 'Medicine', href: '/medicine', description: 'Manage your account' },
        { name: 'Blood Donation', href: '/blood-donation', description: 'Manage your account' },

      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }

  ].filter(Boolean) as NavItem[]
};