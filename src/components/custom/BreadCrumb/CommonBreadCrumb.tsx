import { Breadcrumb } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router';

interface BreadCrumbItem {
  name: string;
  link?: string;
  disabled?: boolean;
}

interface CommonBreadCrumbProps {
  items: BreadCrumbItem[];
  className?: string;
}

const CommonBreadCrumbs: React.FC<CommonBreadCrumbProps> = ({ items,className }) => {
    const navigate = useNavigate()
    const linkItems = items?.map((item)=>{
        const isLink = item?.link !== null && item?.link !== undefined 
        return {
            title: item.name,
            onClick: () => {
                if (isLink ) { 
                        navigate(item.link!);
                }
            },
            className: `text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white ${isLink?"cursor-pointer": "cursor-default"}`,
        }
    })
  return (
    <Breadcrumb separator=">" className={className} items={linkItems} />
  )
}

export default CommonBreadCrumbs