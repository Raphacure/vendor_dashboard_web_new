import { Dropdown } from 'react-bootstrap'
import { Share2, Mail, MessageSquare } from 'lucide-react';

type prop = {
    sectionName: 'PACKAGES',
    data: any
}
const DropDownShareOptions = ({ sectionName , data}: prop) => {
    
    const templates = {
        "PACKAGES": `🩺 Health Checkup Package Available! \n
        🔹 Package Name: ${data?.service_name ?? "-"}
        📋 Includes Tests: ${data?.tests?.map((test : any) => test?.service_name)?.join(", ") ?? "-"}
        💰 Price: ₹${data?.price?.actual_cost ?? ""}
        🎉 Discounted Price: ₹${data?.price?.discounted_price ?? "-"}
        🚑 Visit Type: ${data?.visit_type ?? "-"}`
    }

    const handleShare = (platform: string, payload?: any) => {
        const url = window.location.href; // Current URL
        const newMessage = `${templates?.[sectionName] ?? ""}:\n\n${url}`;        

        switch (platform) {
            case "whatsapp":
                window.open(
                    `https://api.whatsapp.com/send?text=${encodeURIComponent(newMessage)}`,
                    "_blank"
                );
                break;
            case "email":
                window.open(
                    `mailto:?subject=Appointment Details&body=${encodeURIComponent(
                        newMessage
                    )}`,
                    "_self"
                );
                break;
            default:
                break;
        }
    };
    return <Dropdown>
        <Dropdown.Toggle
            as="div"
            id="dropdown-custom-components"
            className="cursor-pointer"
        >
            <Share2 size={20} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item
                onClick={() => handleShare("whatsapp", data)}
            >
                <MessageSquare size={16} className="me-2" /> WhatsApp
            </Dropdown.Item>

            <Dropdown.Item
                onClick={() => handleShare("email", data)}
            >
                <Mail size={16} className="me-2" /> Email
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default DropDownShareOptions