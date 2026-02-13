import { getUserInfo } from "@/service/auth/user";
import { getDefaultDashboardRoute, UserRole } from "@/utils/auth-utils";
import PublicNavbar from "./PublicNavbar";
import { IUserInfo } from "@/types/user";

export default async function Navbar({user}: {user: IUserInfo}) {
      const userInfo = await getUserInfo();
  const dashboardRoute = userInfo
    ? getDefaultDashboardRoute(userInfo.role as UserRole)
    : "/";
  return (
    <div>
        <PublicNavbar user={user} dashboardRoute={dashboardRoute}></PublicNavbar>
    </div>
  )
}
