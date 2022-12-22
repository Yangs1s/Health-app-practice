import { BenefitType, SelectedPage } from '@/shared/types'
import React from 'react'


type Props ={
  setSelectedPage:(value:SelectedPage) => void
}
function Benefits({title,description,icon}: BenefitType, setSelectedPage:Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16">
      <div className="mb-5 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default Benefits