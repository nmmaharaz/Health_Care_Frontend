import MyProfile from "@/components/modules/common/my-profile/MyProfile";
import { getUserInfo } from "@/service/auth/user";

const MyProfilePage = async () => {
  const userInfo = await getUserInfo();
  console.log(userInfo, )
  return <MyProfile userInfo={userInfo!} />;
};

export default MyProfilePage;
