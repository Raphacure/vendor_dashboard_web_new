import WaTemplatesStyles from '../whatsApp/WaTemplatesStyles'

const EmailTemplatePreview = ({body} : {body: string}) => {
    return (
        <WaTemplatesStyles>
            <div className="emailPreview">
                <img className="logo" src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/rectangle_7.png" alt="Logo" />
                <img className="banner" src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/LAB+TESTS.png" alt="Banner" />

                <div className="preview-body"
                    dangerouslySetInnerHTML={{ __html: body?.toString()?.replace("\n", "<br>") ?? "" }}
                >
                </div>
            </div>
        </WaTemplatesStyles>
    )
}

export default EmailTemplatePreview