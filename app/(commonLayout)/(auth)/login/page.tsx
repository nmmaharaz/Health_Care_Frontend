import LoginForm from "@/components/modules/auth/LoginForm";
import SharedHeader from "@/components/shared/SharedHeader";

export default function page() {
  return (
    <div>
      <SharedHeader title={"Switch An Account"} subtitle={"Login Account"}></SharedHeader>
        <LoginForm></LoginForm>
    </div>
  )
}
