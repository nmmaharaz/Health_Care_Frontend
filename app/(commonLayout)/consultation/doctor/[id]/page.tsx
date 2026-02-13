import ConsultationDetails from "@/components/modules/common/consultation/ConsultationDetails";
import ConsultationHeader from "@/components/modules/common/consultation/ConsultationHeader";

export default async function ConsultationDetailsPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <>
        <ConsultationHeader></ConsultationHeader>
       <ConsultationDetails></ConsultationDetails>
        </>
    )
}
