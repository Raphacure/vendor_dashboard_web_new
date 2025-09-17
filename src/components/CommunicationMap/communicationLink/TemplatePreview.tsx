import React, { useMemo } from 'react'
import { previewTemplateTypeDto } from './CreateCommunication'
import EmailTemplatePreview from '../email/EmailTemplatePreview'
import WaTemplatesStyles from '../whatsApp/WaTemplatesStyles'
import WaTemplatePreview from '../whatsApp/WaTemplatePreview'

const TemplatePreview = ({ templateType, data }: { templateType: previewTemplateTypeDto, data: any }) => {

    let text = useMemo(() => {
        if (templateType != "SMS-TEMPLATE") return ""
        let startIndex = 0;
        let finalText = "";
        let matches = [...data?.text?.matchAll(/\{#(.*?)#\}/g)];

        matches.forEach((match, i) => {
            let index = match.index;
            finalText += data.text.substring(startIndex, index);
            finalText += `{#${data?.params?.[i] ?? 'var'}#}`;
            startIndex = index + match[0].length;
        });

        if (startIndex < data.text.length) {
            finalText += data.text.substring(startIndex);
        }

        return finalText;
    }, [data, templateType]);

    if (templateType == "EMAIL-TEMPLATE") {
        return <div>
            <div className='mb-2 emailPreview p-2'>Subject:
                <div className='preview-body p-0'>
                    {data?.subject ?? ""}
                </div>
            </div>
            <EmailTemplatePreview
                body={data?.text ?? ""}
            />
        </div>
    }
    else if (templateType == "SMS-TEMPLATE") {
        return <WaTemplatesStyles>
            <div className="emailPreview">
                <div className="preview-body"
                    dangerouslySetInnerHTML={{ __html: text?.toString()?.replace("\n", "<br>") ?? "" }}
                />
            </div>
        </WaTemplatesStyles>
    }
    else if (templateType == 'WATHS-APP-TEMPLATE') {
        return <WaTemplatePreview template={data} />
    }
    return (
        <div></div>
    )
}

export default TemplatePreview