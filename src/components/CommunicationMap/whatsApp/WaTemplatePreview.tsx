import WaTemplatesStyles from "./WaTemplatesStyles"

const WaTemplatePreview = ({ template }: { template: any }) => {

    console.log(template);
    
    return (
        <WaTemplatesStyles>
            <div className='container-right'>
                {
                    template?.wa_components?.map((item: any) => {

                        if (item?.type == "HEADER") {

                            if (item?.format == "IMAGE") {
                                return <img className='w-100' src={item?.example?.header_handle?.[0] ?? ""} />
                            }
                        }

                        else if (item?.type == "BODY") {
                            let exampleText = ''

                            item?.text?.trim()?.split(/{{\d+}}/g)?.forEach((ele: any, i: number) => {
                                if (ele) {
                                    exampleText = exampleText + ele?.replaceAll("\n", "<br />") + ` ${item?.example?.body_text?.[0]?.[i] ?? ""} `
                                }
                            })
                            return <div dangerouslySetInnerHTML={{ __html: exampleText }} ></div>
                        }
                        else if (item?.type == "FOOTER") {
                            return <div className='footer'>
                                {item?.text}
                            </div>
                        }
                    })
                }
            </div>
        </WaTemplatesStyles>
    )
}

export default WaTemplatePreview