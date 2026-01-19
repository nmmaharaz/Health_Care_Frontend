import RegisterForm from '@/components/modules/auth/RegisterForm'
import SharedHeader from '@/components/shared/SharedHeader'

export default function page() {
    return (
        <div>
            <SharedHeader title={"Make An Account"} subtitle={"Patient Register"}></SharedHeader>
            <RegisterForm></RegisterForm>
        </div>
    )
}
