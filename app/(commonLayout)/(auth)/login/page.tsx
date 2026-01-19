import LoginForm from "@/components/modules/auth/LoginForm";
import SharedHeader from "@/components/shared/SharedHeader";

export default function page() {
  return (
    <div>
      <SharedHeader title={"Make An Account"} subtitle={"Patient Sign UP"}></SharedHeader>
        <LoginForm></LoginForm>
    </div>
  )
}
