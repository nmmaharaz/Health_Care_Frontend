import LoginForm from "@/components/modules/auth/LoginForm";
import SharedHeader from "@/components/shared/SharedHeader";

export default async function page({ searchParams }: { searchParams?: Promise<{  redirect?: string }>}) {

const { redirect } = (await searchParams) || {};
  return (
    <div>
      <SharedHeader title={"Switch An Account"} subtitle={"Login Account"}></SharedHeader>
      <LoginForm redirect={redirect}></LoginForm>
    </div>
  )
}
